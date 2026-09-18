# 💧 Dashboard Assainissement Réunion

[![GitHub](https://img.shields.io/badge/GitHub-gunout%2Fassainissement--re-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gunout/assainissement-re)
[![Déployé](https://img.shields.io/badge/Déployé-En_ligne-002395?style=for-the-badge&logo=githubpages&logoColor=white)](https://gunout.github.io/assainissement-re/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)
![License MIT](https://img.shields.io/badge/License-MIT-002395?style=for-the-badge)
![No Dependencies](https://img.shields.io/badge/Dependencies-0-ED2939?style=for-the-badge)
![Responsive](https://img.shields.io/badge/Responsive-Yes-1D4ED8?style=for-the-badge)

![Stations](https://img.shields.io/badge/Stations-24-002395?style=flat-square)
![Communes](https://img.shields.io/badge/Communes-24-1D4ED8?style=flat-square)
![Capacité](https://img.shields.io/badge/Capacité-547_900_EH-3B82F6?style=flat-square)
![Conformité](https://img.shields.io/badge/Conformité-89.8%25-22c55e?style=flat-square)
![Langue](https://img.shields.io/badge/Langue-Français-C8102E?style=flat-square)
![Statut](https://img.shields.io/badge/Statut-Stable-22c55e?style=flat-square)

![Made with ❤️](https://img.shields.io/badge/Made_with-❤️-ED2939?style=flat-square)
![France](https://img.shields.io/badge/Thème-🇫🇷_Bleu_Blanc_Rouge-002395?style=flat-square)
![Département](https://img.shields.io/badge/974-La_Réunion-1D4ED8?style=flat-square)

---

Dashboard interactif en **HTML / CSS / JavaScript** (fichier unique) présentant les **24 stations de traitement des eaux usées (STEP)** de La Réunion, avec analyse comparative, priorisation multicritère et simulation hydraulique.

Thème visuel : **bleu, blanc, rouge** 🇫🇷

> 🔗 **Dépôt GitHub** : [github.com/gunout/assainissement-re](https://github.com/gunout/assainissement-re)
>
> 🚀 **Démo en ligne** : [gunout.github.io/assainissement-re](https://gunout.github.io/assainissement-re/)

---

## 📖 Description

Ce projet est une application web **autonome**, sans dépendance externe à l'exception de Chart.js chargé depuis un CDN. Il permet d'explorer :

- Les **24 stations d'épuration** du département 974
- Les **capacités nominales** (de 4 500 à 85 000 EH)
- Les **filières techniques** : Boues activées, Lagunage, Filtres plantés, SBR
- Les **taux de conformité** réglementaires
- Les **années de mise en service** (1995 à 2018)
- La **population desservie** par commune

---

## ✨ Fonctionnalités

![Dashboard](https://img.shields.io/badge/🏠_Vue_d'ensemble-KPIs_%2B_Graphiques-002395?style=flat-square)
![Détail](https://img.shields.io/badge/🗺️_Détail_Stations-Filtrable-1D4ED8?style=flat-square)
![Comparatif](https://img.shields.io/badge/📋_Comparatif-Tri_dynamique-3B82F6?style=flat-square)
![Priorités](https://img.shields.io/badge/⚠️_Priorisation-Score_multicritère-ED2939?style=flat-square)
![Simulation](https://img.shields.io/badge/🌊_Simulation-Méthode_rationnelle-C8102E?style=flat-square)

- 🏠 **Vue d'ensemble régionale** — 4 KPI cards, Top 10 communes, répartition des filières, distribution d'âge
- 🗺️ **Détail des stations** — Liste complète filtrable par commune avec badges de conformité
- 📋 **Comparatif inter-communes** — Classement triable, Top 3 (🏆 ✅ 📅), scatter capacité vs conformité
- ⚠️ **Priorisation** — Score multicritère (âge, capacité, conformité) avec seuil ajustable en temps réel
- 🌊 **Simulation hydraulique** — Méthode rationnelle `Q = C · i · A` avec diagnostic automatique
- 🔄 **Mise à jour automatique** — Récupération depuis les APIs Sandre et Hubeau via GitHub Actions
- 💾 **Cache intelligent** — Données en `localStorage` avec expiration à 7 jours
- 📱 **Responsive** — S'adapte aux écrans mobiles et tablettes
- 🎨 **Thème tricolore** — Bandeau bleu-blanc-rouge et dégradés aux couleurs de la France

---

## 🚀 Utilisation

Aucune installation, aucun build, aucune dépendance (sauf Chart.js via CDN).

![No Install](https://img.shields.io/badge/Installation-Aucune-22c55e?style=for-the-badge)
![No Build](https://img.shields.io/badge/Build-Aucun-22c55e?style=for-the-badge)
![Single File](https://img.shields.io/badge/Fichier-Unique-1D4ED8?style=for-the-badge)

### Option 1 — En ligne (recommandé)

Accédez directement à la démo déployée :

👉 **[DASHBOARD ASSAINISSEMENT RÉUNION](https://gunout.github.io/assainissement-re/)**

### Option 2 — En local

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/gunout/assainissement-re.git
   cd assainissement-re
   ```

2. Ouvrez le fichier `index.html` dans votre navigateur :

   ```bash
   open index.html        # macOS
   start index.html       # Windows
   xdg-open index.html    # Linux
   ```

---

## 🌐 Déploiement

Ce projet est déployé en ligne via **GitHub Pages** et accessible publiquement.

[![Statut](https://img.shields.io/badge/Statut-En_ligne-22c55e?style=for-the-badge)](https://gunout.github.io/assainissement-re/)
[![URL](https://img.shields.io/badge/URL-gunout.github.io%2Fassainissement--re-002395?style=for-the-badge)](https://gunout.github.io/assainissement-re/)

| Plateforme | Statut | URL |
|------------|--------|-----|
| GitHub Pages | ✅ En ligne | [gunout.github.io/assainissement-re](https://gunout.github.io/assainissement-re/) |
| Netlify / Vercel | ⚙️ Optionnel | Glisser-déposer le dossier |

> 💡 Pour redéployer : le projet étant un simple fichier statique, il suffit de glisser-déposer le dossier sur [Netlify Drop](https://app.netlify.com/drop) ou de connecter le dépôt GitHub à Netlify/Vercel.

---

## 🗂️ Structure du projet

```
.
├── index.html                              # Dashboard (fichier unique)
├── README.md                               # Ce fichier
├── LICENSE                                 # Licence MIT
├── package.json                            # Config Node.js
├── .gitignore                              # Fichiers ignorés
├── data/
│   ├── stations.json                       # Données (généré auto)
│   └── stations-fallback.json              # Données de secours
├── scripts/
│   └── fetch-data.js                       # Script de récupération
└── .github/
    └── workflows/
        └── update-data.yml                 # Automatisation GitHub Actions
```

Le fichier `index.html` contient :

![HTML](https://img.shields.io/badge/HTML-Structure-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-Thème_🇫🇷-1572B6?style=flat-square&logo=css3&logoColor=white)
![JS](https://img.shields.io/badge/JS-Données_%2B_Rendu-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Chart](https://img.shields.io/badge/Chart.js-Graphiques-FF6384?style=flat-square&logo=chartdotjs&logoColor=white)

- **HTML** : structure de la page (sidebar + contenu principal)
- **CSS** : styles, thème bleu-blanc-rouge, responsive
- **JavaScript** : données, calculs, rendu dynamique, gestion d'état
- **Chart.js** : graphiques barres, doughnut, bubble

---

## 📡 Sources de données

| Source | Description | Licence |
|--------|-------------|---------|
| [Office de l'Eau Réunion](https://donnees.eaureunion.fr) | Bilan annuel assainissement | Etalab 2.0 |
| [Sandre](https://www.sandre.eaufrance.fr) | Référentiel national STEU | Etalab 2.0 |
| [Hubeau](https://hubeau.eaufrance.fr) | Indicateurs de performance AC | Etalab 2.0 |

Les données sont **compilées à titre pédagogique** et peuvent contenir des approximations. Elles proviennent de sources publiques (Open Data Réunion, bases de données de spectroscopie, ouvrages de vulgarisation).

---

## 🔄 Mise à jour automatique

Le fichier `data/stations.json` est mis à jour automatiquement chaque **lundi à 6h UTC** (10h à La Réunion) par un workflow **GitHub Actions** qui interroge l'API Sandre.

```yaml
on:
  schedule:
    - cron: '0 6 * * 1'   # Tous les lundis à 6h UTC
  workflow_dispatch:       # + déclenchement manuel possible
```

Pour lancer manuellement : onglet **Actions** → **Mise à jour des données assainissement** → **Run workflow**.

---

## 🎨 Personnalisation

Toutes les données sont centralisées en haut du script JavaScript dans la constante `DONNEES_FALLBACK`. Vous pouvez les modifier sans toucher au reste du code.

### 1. Modifier les stations

```js
{commune:'Saint-Denis', nom_station:'STEP Saint-Denis',
 filiere:'Boues activées', capacite_eh:85000,
 annee:1998, conformite:98.5, population:153810}
```

| Champ | Description |
|-------|-------------|
| `commune` | Nom de la commune |
| `nom_station` | Nom de la station d'épuration |
| `filiere` | Filière de traitement (Boues activées, Lagunage, Filtres plantés, SBR) |
| `capacite_eh` | Capacité nominale en équivalent-habitants |
| `annee` | Année de mise en service |
| `conformite` | Taux de conformité (%) |
| `population` | Population de la commune |

### 2. Modifier les couleurs des filières

```js
const FILIERE_COLORS = {
  'Boues activées': '#002395',
  'Lagunage': '#1D4ED8',
  'Filtres plantés': '#3B82F6',
  'SBR': '#ED2939'
};
```

### 3. Modifier le thème global

Les variables CSS sont définies dans `:root` :

```css
:root{
  --bleu:#002395;
  --rouge:#ED2939;
  --blanc:#ffffff;
  /* ... */
}
```

---

## 🌐 Compatibilité

| Navigateur | Version minimale | Statut |
|------------|------------------|--------|
| ![Chrome](https://img.shields.io/badge/Chrome-80+-4285F4?style=flat-square&logo=googlechrome&logoColor=white) | 80+ | ![OK](https://img.shields.io/badge/-OK-22c55e?style=flat-square) |
| ![Firefox](https://img.shields.io/badge/Firefox-78+-FF7139?style=flat-square&logo=firefoxbrowser&logoColor=white) | 78+ | ![OK](https://img.shields.io/badge/-OK-22c55e?style=flat-square) |
| ![Edge](https://img.shields.io/badge/Edge-80+-0078D7?style=flat-square&logo=microsoftedge&logoColor=white) | 80+ | ![OK](https://img.shields.io/badge/-OK-22c55e?style=flat-square) |
| ![Safari](https://img.shields.io/badge/Safari-14+-000000?style=flat-square&logo=safari&logoColor=white) | 14+ | ![OK](https://img.shields.io/badge/-OK-22c55e?style=flat-square) |

Aucune librairie externe n'est requise (pas de React, Vue, D3, Plotly…). Seul **Chart.js** est chargé via CDN pour les graphiques.

---

## 📄 Licence

![License MIT](https://img.shields.io/badge/License-MIT-002395?style=for-the-badge)

Ce projet est distribué sous licence **MIT**.

Vous êtes libre de l'utiliser, le modifier et le redistribuer, y compris à des fins commerciales, à condition de conserver la mention de copyright.

```text
MIT License

Copyright (c) 2026 Gunout

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🙏 Crédits

![Source](https://img.shields.io/badge/Source-Open_Data_Réunion-1D4ED8?style=flat-square)
![Données](https://img.shields.io/badge/Données-Sandre_%26_Hubeau-3B82F6?style=flat-square)
![Thème](https://img.shields.io/badge/Thème-🇫🇷_Bleu_Blanc_Rouge-002395?style=flat-square)

- Données historiques et techniques compilées à partir de sources publiques.
- Inspiration : dashboard Streamlit original « Assainissement Réunion ».
- Thème visuel : bleu, blanc, rouge — en hommage à La Réunion. 🇫🇷🌋

---

## 🌟 Aperçu

<img width="1800" height="1319" alt="Screenshot 2026-09-18 at 20-00-20 💧 Assainissement Réunion — Dashboard Officiel" src="https://github.com/user-attachments/assets/fd8b6244-de3c-4bcb-8e1e-a73da9dd131b" />
<img width="1800" height="1677" alt="Screenshot 2026-09-18 at 20-00-35 💧 Assainissement Réunion — Dashboard Officiel" src="https://github.com/user-attachments/assets/f40b54bd-4526-43d0-857a-aa8c409598aa" />


---

**Bonne exploration !** 💧🌊🇷🇪

[![Voir sur GitHub](https://img.shields.io/badge/Voir_sur-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gunout/assainissement-re)
[![Voir la Démo](https://img.shields.io/badge/Voir_la-Démo-002395?style=for-the-badge&logo=githubpages&logoColor=white)](https://gunout.github.io/assainissement-re/)

---

<div align="center">

### 🇫🇷 Gunout · 2026

![Made in France](https://img.shields.io/badge/Made_in-France-002395?style=flat-square&labelColor=FFFFFF&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MDAgNjAwIj48cmVjdCB3aWR0aD0iOTAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iIzAwMjM5NSIvPjxyZWN0IHdpZHRoPSI5MDAiIGhlaWdodD0iNDAwIiB5PSIxMDAiIGZpbGw9IiNmZmYiLz48cmVjdCB3aWR0aD0iOTAwIiBoZWlnaHQ9IjIwMCIgeT0iNDAwIiBmaWxsPSIjZWQyOTM5Ii8+PC9zdmc+)
![GitHub](https://img.shields.io/badge/GitHub-gunout-181717?style=flat-square&logo=github&logoColor=white)
![Year](https://img.shields.io/badge/2026-ED2939?style=flat-square&labelColor=FFFFFF)

<sub>© 2026 <strong>Gunout</strong> — Tous droits réservés.</sub>

</div>
