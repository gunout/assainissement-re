// scripts/fetch-data.js
import fs from 'node:fs/promises';
import path from 'node:path';

const DEPARTEMENT_REUNION = '974';
const SANDE_URL = 'https://services.sandre.eaufrance.fr/geo/odp';
const HUBEAU_URL = 'https://hubeau.eaufrance.fr/api/v1/indicateurs_services';

async function fetchSandreSteu() {
  const params = new URLSearchParams({
    service: 'WFS', version: '2.0.0', request: 'GetFeature',
    typeName: 'ms:Steu', outputFormat: 'application/json',
    CQL_FILTER: `code_departement = '${DEPARTEMENT_REUNION}'`
  });
  const url = `${SANDE_URL}?${params}`;
  console.log(`🌐 Sandre → ${url}`);

  const res = await fetch(url, {
    headers: { 'User-Agent': 'Dashboard-Assainissement-Reunion/2.0' },
    signal: AbortSignal.timeout(45000)
  });
  if (!res.ok) throw new Error(`Sandre HTTP ${res.status}`);
  return res.json();
}

async function fetchHubeauIndicateurs() {
  const params = new URLSearchParams({
    code_departement: DEPARTEMENT_REUNION,
    type_service: 'AC',
    size: '100'
  });
  const url = `${HUBEAU_URL}/communes?${params}`;
  console.log(`🌐 Hubeau → ${url}`);

  const res = await fetch(url, {
    headers: { 'User-Agent': 'Dashboard-Assainissement-Reunion/2.0' },
    signal: AbortSignal.timeout(30000)
  });
  if (!res.ok) throw new Error(`Hubeau HTTP ${res.status}`);
  return res.json();
}

function extraireAnnee(v) {
  if (!v) return 0;
  if (typeof v === 'number') return v;
  const m = String(v).match(/(\d{4})/);
  return m ? parseInt(m[1], 10) : 0;
}

function transformerSandre(geojson) {
  const features = geojson.features || [];
  console.log(`📦 Sandre : ${features.length} features brutes`);

  return features.map(f => {
    const p = f.properties || {};
    return {
      commune: p.nom_commune || p.NomCommune || p.commune || '',
      nom_station: p.nom_steu || p.NomOuvrage || p.nom || '',
      filiere: p.type_traitement || p.filiere_traitement || 'Non renseigné',
      capacite_eh: parseInt(p.capacite_nominale || 0, 10),
      annee: extraireAnnee(p.date_mise_service || p.annee),
      conformite: parseFloat(p.taux_conformite || 0),
      population: parseInt(p.population_commune || 0, 10)
    };
  }).filter(s => s.nom_station && s.commune);
}

async function chargerFallback() {
  const file = path.resolve('data/stations-fallback.json');
  try {
    const raw = await fs.readFile(file, 'utf-8');
    console.log('⚠️  Utilisation du fallback local');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function sauvegarder(stations) {
  const dir = path.resolve('data');
  await fs.mkdir(dir, { recursive: true });
  const file = path.join(dir, 'stations.json');
  await fs.writeFile(file, JSON.stringify(stations, null, 2), 'utf-8');
  console.log(`✅ ${stations.length} stations écrites dans ${file}`);
}

async function main() {
  console.log('🚀 Démarrage de la récupération des données…\n');
  let stations = [];

  try {
    const geojson = await fetchSandreSteu();
    stations = transformerSandre(geojson);
    console.log(`✅ Sandre : ${stations.length} stations valides\n`);
  } catch (err) {
    console.warn(`⚠️  Sandre indisponible : ${err.message}\n`);
  }

  try {
    await fetchHubeauIndicateurs();
    console.log('✅ Hubeau interrogé (enrichissement non utilisé)\n');
  } catch (err) {
    console.warn(`⚠️  Hubeau indisponible : ${err.message}\n`);
  }

  if (stations.length === 0) {
    stations = await chargerFallback();
  }

  if (stations.length === 0) {
    console.error('❌ Aucune donnée récupérée. Abandon.');
    process.exit(1);
  }

  await sauvegarder(stations);
  console.log('✨ Terminé avec succès');
}

main().catch(err => {
  console.error('❌ Erreur fatale :', err);
  process.exit(1);
});