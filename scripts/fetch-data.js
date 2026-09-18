// scripts/fetch-data.js
// Script Node.js — s'exécute sur les serveurs GitHub (aucun blocage CORS)

import fs from 'node:fs/promises';
import path from 'node:path';

const DEPARTEMENT = '974';
const HUBEAU_BASE = 'https://hubeau.eaufrance.fr/api/v1/assainissement/ouvrages';

/* =========================================================
   1. Récupération via API Hubeau Assainissement
   ========================================================= */
async function fetchHubeau() {
  const params = new URLSearchParams({
    code_departement: DEPARTEMENT,
    size: '500'
  });
  const url = `${HUBEAU_BASE}?${params}`;
  console.log(`🌐 Hubeau → ${url}`);

  const res = await fetch(url, {
    headers: { 'Accept': 'application/json', 'User-Agent': 'Dashboard-Assainissement-Reunion/2.0' },
    signal: AbortSignal.timeout(60000)
  });

  if (!res.ok) throw new Error(`Hubeau HTTP ${res.status} ${res.statusText}`);

  const json = await res.json();
  const items = json.data || [];
  console.log(`📦 Hubeau : ${items.length} ouvrages bruts`);
  return items;
}

/* =========================================================
   2. Transformation au format du dashboard
   ========================================================= */
function transformer(items) {
  return items
    .map(item => ({
      commune: item.nom_commune || item.libelle_commune || '',
      nom_station: item.nom_ouvrage || item.libelle_ouvrage || item.nom || '',
      filiere: normaliserFiliere(item.type_traitement || item.filiere || ''),
      capacite_eh: parseInt(item.capacite_nominale || item.capacite || 0, 10),
      annee: parseInt(item.annee_mise_en_service || item.annee_construction || 0, 10),
      conformite: parseFloat(item.taux_conformite || item.conformite || 0),
      population: parseInt(item.population_commune || 0, 10)
    }))
    .filter(s => s.nom_station && s.commune && s.capacite_eh > 0);
}

function normaliserFiliere(f) {
  const s = String(f).toLowerCase();
  if (s.includes('boue') && s.includes('activ')) return 'Boues activées';
  if (s.includes('lagun')) return 'Lagunage';
  if (s.includes('filtre') || s.includes('plant')) return 'Filtres plantés';
  if (s.includes('sbr') || s.includes('sequenc')) return 'SBR';
  return f || 'Non renseigné';
}

/* =========================================================
   3. Fallback local
   ========================================================= */
async function chargerFallback() {
  const file = path.resolve('data/stations-fallback.json');
  try {
    const raw = await fs.readFile(file, 'utf-8');
    console.log('⚠️  Utilisation du fallback local');
    return JSON.parse(raw);
  } catch (e) {
    console.warn('❌ Fallback introuvable :', e.message);
    return [];
  }
}

/* =========================================================
   4. Sauvegarde
   ========================================================= */
async function sauvegarder(stations) {
  const dir = path.resolve('data');
  await fs.mkdir(dir, { recursive: true });
  const file = path.join(dir, 'stations.json');

  // Format enrichi : { stations, timestamp, source, count }
  const payload = {
    stations,
    timestamp: new Date().toISOString(),
    source: 'Hubeau Assainissement',
    count: stations.length
  };

  await fs.writeFile(file, JSON.stringify(payload, null, 2), 'utf-8');
  console.log(`✅ ${stations.length} stations écrites dans ${file}`);
}

/* =========================================================
   5. Programme principal
   ========================================================= */
async function main() {
  console.log('🚀 Démarrage de la récupération des données…\n');

  let stations = [];

  try {
    const items = await fetchHubeau();
    stations = transformer(items);
    console.log(`✅ Hubeau : ${stations.length} stations valides\n`);
  } catch (err) {
    console.warn(`⚠️  Hubeau indisponible : ${err.message}\n`);
  }

  if (stations.length === 0) {
    stations = await chargerFallback();
  }

  if (stations.length === 0) {
    console.error('❌ Aucune donnée. Abandon.');
    process.exit(1);
  }

  await sauvegarder(stations);
  console.log('✨ Terminé avec succès');
}

main().catch(err => {
  console.error('❌ Erreur fatale :', err);
  process.exit(1);
});
