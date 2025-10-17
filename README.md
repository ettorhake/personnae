# 👤 Générateur de Personas Numérotés# Persona Creator



Une application web moderne pour créer des personas détaillés et professionnels avec un système de numérotation visuelle (1-13). Interface intuitive avec formulaire, prévisualisation en temps réel et export PNG.Une application web intuitive pour créer et gérer des personas marketing et UX de manière professionnelle.



**Version**: 2.0 - Système Numéroté Complet  ## 📋 Fonctionnalités

**Date**: Octobre 2025  

**Status**: ✅ Production-Ready- Création de personas détaillés avec photo

- Interface intuitive et responsive

---- Sections personnalisables :

  - Profil personnel et professionnel

## ✨ Fonctionnalités Principales  - Besoins et objectifs

  - Points de douleur

### 🎯 Système Numéroté 1-13  - Solutions proposées

- **13 champs organisés** avec identification visuelle par badges- Export au format CSV

- **Profil** (Champs 1-6 - Badges Bleus 🔵)- Personnalisation de l'apparence avec des dégradés et images de fond

  - [1] Nom- Mode d'affichage adaptatif

  - [2] Âge

  - [3] Localisation## 🚀 Installation

  - [4] Poste / Statut

  - [5] Expérience1. Clonez ce dépôt :

  - [6] Entreprise```bash

git clone https://github.com/ettorhake/personnae.git

- **Critères d'Évaluation** (Champs 7-9 - Badges Verts 🟢)```

  - [7] Niveau de Connaissance (slider 1-5)

  - [8] Niveau de Compréhension (slider 1-5)2. Ouvrez le dossier :

  - [9] Taux de Distraction (slider 1-5)```bash

cd personnae

- **Sections Textuelles** (Champs 10-13)```

  - [10] Objectifs Professionnels

  - [11] Besoins Fonctionnels3. Ouvrez le fichier `index.html` dans votre navigateur web préféré

  - [12] Frustrations

  - [13] Opportunités UX## 💡 Utilisation



### 📊 Interface Dual-Panel### Création d'un Persona

- **Panneau Gauche (Formulaire)** : 13 champs éditables avec badges gris

- **Panneau Droit (Prévisualisation)** : Aperçu en temps réel avec numérotation visuelle1. **Photo du Persona**

   - Cliquez sur la zone de photo pour télécharger une image

### 🔄 Synchronisation Temps Réel   - Format recommandé : carrée, minimum 150x150px

- Modifications instantanées dans la prévisualisation

- Animations fluides lors des mises à jour2. **Image d'en-tête**

- Support des sliders avec barres de progression   - Utilisez le champ "Image de fond de l'en-tête" pour personnaliser l'arrière-plan

   - Un dégradé élégant sera automatiquement appliqué

### 📥 Import CSV Positionnel

- Import de données positionnées (colonnes 1-13)3. **Informations du Profil**

- Exemple fourni : `exemple-persona.csv`   - Remplissez les champs du formulaire :

- Support de données internationales     - Nom du persona

     - Titre/Poste

### 📤 Export PNG     - Âge

- Export haute résolution (double résolution)     - Localisation

- Préservation de la mise en forme     - etc.

- Inclut tous les numéros visibles

4. **Sections spécifiques**

### 🎨 Personnalisation   - Complétez les différentes sections :

- Couleurs personnalisables     - Profil (formation, expérience)

- Logo du client     - Objectifs et motivations

- Photo du persona     - Points de douleur

- Image d'en-tête     - Solutions envisagées



---### Export et Sauvegarde



## 🚀 Démarrage Rapide- Utilisez la fonction d'export CSV pour sauvegarder vos personas

- Le format CSV permet l'importation dans d'autres outils

### Installation

```bash## 🎨 Personnalisation

# 1. Cloner le dépôt

git clone https://github.com/ettorhake/personnae.gitVous pouvez personnaliser l'apparence en modifiant les variables CSS dans `css/styles.css` :

cd personnae

```css

# 2. Ouvrir dans le navigateur:root {

# Double-cliquez sur index.html    --primary-color: #4A90E2;    /* Couleur principale */

# OU lancez un serveur local:    --accent-color: #FF6B6B;     /* Couleur d'accent */

python -m http.server 8000    --success-color: #4CAF50;    /* Couleur de succès */

# Puis visitez: http://localhost:8000    --warning-color: #FFC107;    /* Couleur d'avertissement */

```    /* etc. */

}

### Utilisation de Base```

```

1. Ouvrir index.html## 💻 Compatibilité

2. Importer exemple-persona.csv (ou votre fichier CSV)

3. Voir les données se remplir automatiquement (1-13)- Chrome (recommandé)

4. Éditer les labels ou contenus- Firefox

5. Voir les changements en prévisualisation instantanément- Safari

6. Exporter en image PNG- Edge

```

## 🛠️ Structure du Projet

---

```

## 📋 Structure des Fichierspersonnae/

│

```├── index.html          # Page principale

personnae/├── css/

││   └── styles.css      # Styles de l'application

├── 📄 index.html                 # Interface principale (dual-panel)├── js/

├── 📄 README.md                  # Ce fichier│   └── app.js         # Logique de l'application

├── 📄 .gitignore                 # Ignorer les fichiers└── assets/            # Ressources (images, etc.)

│```

├── 📁 css/

│   └── styles.css                # Styles et animations## ✨ Bonnes Pratiques

│

├── 📁 js/1. **Photos**

│   └── app.js                    # Logique d'application (397 lignes)   - Utilisez des photos professionnelles

│   - Respectez les droits d'image

├── 📁 assets/                    # Images et ressources   - Optimisez la taille des images

│

├── 📋 FICHIERS CSV:2. **Contenu**

│   ├── exemple-persona.csv       # ⭐ EXEMPLE COMMENTÉ (5 personas)   - Soyez concis mais descriptif

│   ├── biopath.csv               # Données de test biopath   - Utilisez des données réelles ou réalistes

│   └── biopath-GUIDE-IA.csv      # Guide explicatif des champs   - Mettez à jour régulièrement vos personas

│

└── 📚 DOCUMENTATION:## 🤝 Contribution

    ├── SYSTEM-DOCUMENTATION.md   # Architecture générale

    ├── FIELD-MAPPING.md          # Correspondance champs (1-13)Les contributions sont les bienvenues ! N'hésitez pas à :

    ├── NUMBERED-SYSTEM.md        # Explication du système numéroté1. Fork le projet

    ├── VISUAL-STRUCTURE.md       # Diagrammes et visualisations2. Créer une branche (`git checkout -b feature/AmeliorationIncroyable`)

    ├── QUICK-CHECKLIST.md        # Checklist de vérification3. Commit vos changements (`git commit -m 'Ajout de quelque chose d'incroyable'`)

    ├── TEST-GUIDE.md             # Guide de test complet4. Push vers la branche (`git push origin feature/AmeliorationIncroyable`)

    └── IMPLEMENTATION-SUMMARY.md # Récapitulatif des modifications5. Ouvrir une Pull Request

```

## 📄 Licence

---

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.
## 🔗 Format CSV

### Structure Requise (Ordre Immuable)
```
Nom, Âge, Localisation, Poste, Contexte, SituationMédicale, 
Connaissance, Compréhension, Distraction, Objectifs, Besoins, Frustrations, Opportunités
```

### Exemple de Ligne
```csv
"Sophie Martin",28,"Lyon, France","Product Manager","5 ans en gestion de produit...","Excellente santé","4","4","2","Simplifier les workflows...","Intégration fluide...","Interface trop complexe...","Design UX plus intuitif..."
```

**Note**: Tous les champs textuels doivent être entre guillemets si contenant des virgules.

---

## 🎯 Système de Badges

| Localisation | Couleur | Numéros | Signification |
|---|---|---|---|
| Formulaire | Gris 🔘 | 1-13 | Position dans le formulaire |
| Profil (prévisualisation) | Bleu 🔵 | 1-6 | Informations de profil |
| Critères (prévisualisation) | Vert 🟢 | 7-9 | Niveaux d'évaluation |

---

## 🔄 Flux de Travail Complet

```
1. IMPORT CSV
   └─ Position 1 → Champ [1] Nom
   └─ Position 2 → Champ [2] Âge
   └─ ... jusqu'à Position 13

2. ÉDITION EN TEMPS RÉEL
   └─ Modifier label-poste → [4] Prévisualisation change
   └─ Modifier sliders [7-9] → Barres de progression changent
   └─ Modifier textes [10-13] → Contenu change immédiatement

3. ANIMATION
   └─ Classe CSS "update-animation" appliquée (fade)
   └─ Durée: 1 seconde

4. EXPORT
   └─ HTML2Canvas capture la prévisualisation
   └─ Résolution double (scale: 2)
   └─ PNG sauvegardé avec numéros visibles
```

---

## 🛠️ Technologie Stack

- **Frontend**: HTML5, CSS3, Bootstrap 5.3.2
- **JavaScript**: Vanilla JS (pas de dépendances externes)
- **Export**: HTML2Canvas
- **Données**: CSV (traitement côté client)
- **Versioning**: Git + GitHub

---

## 📚 Documentation Complète

| Document | Contenu |
|---|---|
| **SYSTEM-DOCUMENTATION.md** | Architecture générale, fonctions principales |
| **FIELD-MAPPING.md** | Tableau complet des 13 champs avec IDs HTML |
| **NUMBERED-SYSTEM.md** | Explication du système 1-13, avant/après code |
| **VISUAL-STRUCTURE.md** | Diagrammes ASCII, visualisations |
| **QUICK-CHECKLIST.md** | 30-point checklist de vérification |
| **TEST-GUIDE.md** | Scénarios de test complets, troubleshooting |
| **IMPLEMENTATION-SUMMARY.md** | Récapitulatif des modifications récentes |

---

## ✅ Checklist de Verification (30 secondes)

```
ÉLÉMENTS VISIBLES?
☐ 13 badges gris dans formulaire
☐ 6 badges bleus dans profil
☐ 3 badges verts dans critères

FONCTIONNALITÉS?
☐ Import CSV remplit les champs
☐ Labels éditables se mettent à jour
☐ Valeurs éditables se mettent à jour
☐ Sliders changent les barres
☐ Export génère une image

SI TOUT ✓ = SYSTÈME OPÉRATIONNEL! 🎉
```

---

## 🐛 Troubleshooting Rapide

### Les badges ne s'affichent pas
→ Vérifier que Bootstrap CSS est chargé

### L'import CSV ne remplit pas les données
→ Vérifier que l'ordre des colonnes correspond exactement

### La prévisualisation ne met pas à jour
→ Ouvrir DevTools (F12) et chercher les erreurs console

---

## 📊 Statistiques du Projet

- **Lignes HTML**: 321
- **Lignes JavaScript**: 397  
- **Lignes CSS**: Styles modulaires
- **Badges Visuels**: 22 (13 formulaire + 6 profil + 3 critères)
- **Champs Éditables**: 26 (13 labels + 13 contenus)
- **Documentation**: 7 fichiers markdown
- **Exemples CSV**: 1 fichier commenté avec 5 personas

---

## 🤝 Contribution

```bash
# 1. Fork le projet
# 2. Créer une branche
git checkout -b feature/ma-fonctionnalite

# 3. Commiter vos changements
git commit -m "Ajout de ma fonctionnalité"

# 4. Pousser vers votre fork
git push origin feature/ma-fonctionnalite

# 5. Ouvrir une Pull Request
```

---

## 📄 Licence

MIT License - Voir le fichier LICENSE pour les détails

---

## 👤 Auteur

**GitHub**: @ettorhake  
**Projet**: Générateur de Personas Numérotés v2.0  
**Dernière mise à jour**: Octobre 2025

---

## 🎓 Pour Aller Plus Loin

- Consultez **QUICK-CHECKLIST.md** pour vérifier le système en 2 minutes
- Lisez **VISUAL-STRUCTURE.md** pour comprendre l'architecture visuelle
- Consultez **TEST-GUIDE.md** pour des scénarios de test complets
- Ouvrez **FIELD-MAPPING.md** pour voir la correspondance détaillée des champs

---

**⭐ N'oubliez pas de laisser une star si vous trouvez ce projet utile!**
