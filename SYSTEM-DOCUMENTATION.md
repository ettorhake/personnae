# Système de Génération de Personas - Documentation Complète

## Vue d'ensemble

Ce système permet de créer des cartes de personas (personas UI) en important des données depuis un fichier CSV, avec une interface de formulaire flexible et une prévisualisation en temps réel.

## Architecture du Système

### 1. **Structure des Données - 13 Champs Ordonnés**

Le système utilise un mappage **position-based** (basé sur les positions) plutôt que name-based (basé sur les noms).

| Position | Champ | ID HTML | Type | CSV Colonne |
|----------|-------|---------|------|-----------|
| 1 | Nom | nom | text | Colonne 1 |
| 2 | Âge | age | text | Colonne 2 |
| 3 | Localisation | localisation | text | Colonne 3 |
| 4 | Poste / Statut | poste | text | Colonne 4 |
| 5 | Contexte / Expérience | experience | textarea | Colonne 5 |
| 6 | Situation médicale | entreprise | text | Colonne 6 |
| 7 | Niveau de connaissance | connaissance | slider (1-5) | Colonne 7 |
| 8 | Niveau de compréhension | comprehension | slider (1-5) | Colonne 8 |
| 9 | Taux de distraction | distraction | slider (1-5) | Colonne 9 |
| 10 | Objectifs personnels | objectifs | textarea | Colonne 10 |
| 11 | Besoins fonctionnels | besoins | textarea | Colonne 11 |
| 12 | Frustrations | frustrations | textarea | Colonne 12 |
| 13 | Opportunités UX | opportunites | textarea | Colonne 13 |

### 2. **Système d'Étiquettes (Labels) Éditables**

Chaque champ a maintenant deux composants :
- **Libellé du critère** : `label-{fieldname}` - Editeur de titre/label
- **Contenu** : `{fieldname}` - Valeur du champ

Exemple pour le champ 1 :
```html
<input name="label-nom" id="label-nom" value="Nom">
<input name="nom" id="nom" value="">
```

### 3. **Flux de Données CSV → Formulaire → Prévisualisation**

```
CSV File
    ↓
handleCSVImport()
    ↓
orderedFormFields array (positions 1-13)
    ↓
data{} + labels{} objects
    ↓
updateFormWithData(data, labels)
    ↓
Form inputs + Preview elements
```

### 4. **Système de Prévisualisation en Temps Réel**

Chaque modification de formulaire met à jour les éléments de prévisualisation :

| Type de champ | Élément de prévisualisation | ID Pattern |
|----------------|---------------------------|-----------|
| Champ simple | `<div>` ou `<span>` | `preview-{fieldname}` |
| Label de section | `<h3>` | `preview-label-{fieldname}` |
| Titre de critère | `<strong>` | `preview-{fieldname}-title` |
| Barre de progression | `<div class="progress-bar">` | `preview-{fieldname}-bar` |

## Fonctionnalités Principales

### ✅ Import CSV Position-Based

```javascript
const orderedFormFields = [
    'nom', 'age', 'localisation', 'poste', 'experience', 'entreprise',
    'connaissance', 'comprehension', 'distraction',
    'objectifs', 'besoins', 'frustrations', 'opportunites'
];

// CSV lignes 1-13 → positions 1-13 du tableau orderedFormFields
```

**Avantage** : Indépendant du nom des colonnes CSV, basé uniquement sur la position.

### ✅ Étiquettes Éditables Uniformes

Tous les 13 champs ont maintenant :
1. Un input `label-{fieldname}` pour éditer le label/titre
2. Un input/textarea `{fieldname}` pour le contenu
3. Des mises à jour en temps réel dans la prévisualisation

### ✅ Fonctions Clés du JavaScript

#### `updatePreview(field, value)`
- Gère les barres de progression pour les sliders
- Gère les labels avec préfixe `label-`
- Met à jour les éléments DOM correspondants
- Animation de mise à jour avec classe `update-animation`

#### `handleCSVImport()`
- Lit le fichier CSV
- Parse en utilisant les positions (pas les noms)
- Crée les objets `data{}` et `labels{}`
- Appelle `updateFormWithData()`

#### `updateFormWithData(data, labels)`
- Met à jour tous les inputs du formulaire
- Peuple les champs `label-*` depuis les données CSV
- Met à jour les éléments de prévisualisation

#### `applyChangesBtn` listener
- Collecte les modifications du formulaire
- Met à jour sélectivement les prévisualisations
- Affiche une animation de confirmation

## Structure HTML - Exemple de Champ Unifié

```html
<div class="mb-4">
    <h4 class="h6">
        <span class="badge bg-secondary me-2">1</span>
        Premier champ
    </h4>
    
    <!-- Libellé du critère (éditabl) -->
    <div class="mb-2">
        <label class="form-label">Libellé du critère</label>
        <input 
            type="text" 
            class="form-control" 
            id="label-nom" 
            name="label-nom" 
            value="Nom"
        >
    </div>
    
    <!-- Contenu du champ -->
    <div class="mb-3">
        <label class="form-label">Contenu</label>
        <input 
            type="text" 
            class="form-control" 
            id="nom" 
            name="nom"
        >
    </div>
</div>
```

## Utilisation - Étapes Complètes

### 1. **Préparer le Fichier CSV**

Format attendu (sans entête) :
```
Nom
25
Paris
Product Manager
5 ans d'expérience
Pas de limitation
4
4
2
Simplifier les workflows
Intégrations avec outils existants
Interface trop complexe
Workflow plus intuitif
```

Le CSV utilise 13 lignes, une par champ. L'ordre est CRITIQUE.

### 2. **Importer le CSV**

1. Cliquer sur "Choisir un fichier"
2. Sélectionner le fichier CSV
3. Les données s'importent automatiquement
4. Les labels se remplissent depuis les noms du CSV
5. La prévisualisation se met à jour

### 3. **Éditer les Labels et Contenu**

1. Changer les valeurs de "Libellé du critère" pour personnaliser les titres
2. Changer les valeurs de "Contenu" pour mettre à jour les descriptions
3. Voir les mises à jour en temps réel dans la prévisualisation

### 4. **Appliquer les Modifications**

1. Cliquer sur "Appliquer les modifications"
2. Tous les changements de labels/contenu sont validés
3. Animation de confirmation affichée

### 5. **Exporter en Image**

1. Cliquer sur "Exporter en image"
2. PNG est généré et téléchargé
3. Résolution double (scale: 2) pour meilleure qualité

## Fichiers de Référence

### biopath-GUIDE-IA.csv
Guide UX pour les AI agents générant des personas avec ce système.
Contient : Champ | Contenu | Explication UX

## Points Techniques Importants

### Mappage des Champs (IMPORTANT)
```javascript
orderedFormFields = [
    'nom',              // ← Position CSV colonne 1
    'age',              // ← Position CSV colonne 2
    'localisation',     // ← Position CSV colonne 3
    'poste',            // ← Position CSV colonne 4
    'experience',       // ← Position CSV colonne 5
    'entreprise',       // ← Position CSV colonne 6
    'connaissance',     // ← Position CSV colonne 7
    'comprehension',    // ← Position CSV colonne 8
    'distraction',      // ← Position CSV colonne 9
    'objectifs',        // ← Position CSV colonne 10
    'besoins',          // ← Position CSV colonne 11
    'frustrations',     // ← Position CSV colonne 12
    'opportunites'      // ← Position CSV colonne 13
];
```

### Animation de Mise à Jour
Les éléments reçoivent une classe `update-animation` pendant 1 seconde lors d'une mise à jour.

### Barres de Progression (Sliders)
Les sliders (1-5) sont converti en pourcentage pour la barre de progression :
```javascript
const percentage = (value / 5) * 100;
```

## Débogage et Vérification

### Vérifier l'import CSV
1. Ouvrir la console navigateur (F12)
2. Importer un CSV
3. Vérifier les logs pour voir `data{}` et `labels{}`

### Vérifier les IDs d'éléments
Tous les inputs doivent avoir des `id` et `name` correspondants :
```javascript
id="nom" name="nom"           // OK
id="label-nom" name="label-nom" // OK
```

### Vérifier les Éléments de Prévisualisation
Les éléments de prévisualisation doivent exister dans le DOM :
```javascript
document.getElementById('preview-nom')           // Doit exister
document.getElementById('preview-label-nom')     // Doit exister
document.getElementById('preview-nom-bar')       // Pour les sliders
```

## Fichiers du Projet

```
PERSONNAE/
├── index.html              # Interface principale
├── css/
│   └── styles.css         # Styles Bootstrap + custom
├── js/
│   └── app.js             # Logique JavaScript
├── biopath.csv            # Exemple de data persona
├── allphins.csv           # Autre exemple
├── biopath-GUIDE-IA.csv   # Guide pour IA
└── README.md
```

## Améliorations Futures Possibles

1. **Validation des champs** : Vérifier que les sliders sont entre 1-5
2. **Export CSV** : Exporter les personas modifiés en CSV
3. **Templates multiples** : Support pour différentes structures de personas
4. **Sauvegarde locale** : localStorage pour persister les modifications
5. **Batch import** : Importer plusieurs personas à la fois

## Support et Maintenance

Pour toute modification :
1. Garder le mappage `orderedFormFields` synchronisé
2. Ajouter des inputs `label-*` correspondants pour chaque champ
3. Créer les éléments de prévisualisation avec les IDs corrects
4. Tester avec un CSV de test

---

**Version** : 1.0
**Dernière mise à jour** : 2024
**Statut** : ✅ Complet et opérationnel
