# 📱 STRUCTURE VISUELLE - Système Numéroté

## 🖼️ Vue d'Ensemble

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                         SYSTÈME DE PERSONAS                          ┃
┃                      Numérotation 1-13 Complète                      ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

┌─────────────────────────────────┬──────────────────────────────────┐
│    FORMULAIRE (Badges Gris)     │   PRÉVISUALISATION              │
├─────────────────────────────────┤──────────────────────────────────┤
│                                 │                                  │
│  [1] Premier champ              │  [1] 👤 Nom: Jean               │
│  ├─ Libellé: Nom                │  [2] 👤 Âge: 28                 │
│  └─ Contenu: Jean               │  [3] 👤 Localisation: Paris      │
│                                 │  [4] 👤 Poste: Manager           │
│  [2] Deuxième champ             │  [5] 👤 Expérience: 5 ans       │
│  ├─ Libellé: Âge                │  [6] 👤 Entreprise: TechCorp    │
│  └─ Contenu: 28                 │                                  │
│                                 │  [7] 📊 Connaissance [████░]    │
│  [3] Troisième champ            │  [8] 📊 Compréhension [████░]   │
│  ├─ Libellé: Localisation       │  [9] 📊 Distraction [██░░░]     │
│  └─ Contenu: Paris              │                                  │
│                                 │                                  │
│  [4] Quatrième champ            │  Objectifs Professionnels       │
│  ├─ Libellé: Poste              │  Simplifier les workflows...     │
│  └─ Contenu: Product Manager    │                                  │
│                                 │  Besoins Fonctionnels          │
│  [5] Cinquième champ            │  Intégrations avec outils...    │
│  ├─ Libellé: Contexte           │                                  │
│  └─ Contenu: 5 ans              │  Frustrations                   │
│                                 │  Interface trop complexe...     │
│  [6] Sixième champ              │                                  │
│  ├─ Libellé: Situation          │  Opportunités UX                │
│  └─ Contenu: Aucune             │  Workflow plus intuitif...      │
│                                 │                                  │
│  [7] Premier critère            │                                  │
│  ├─ Libellé: Connaissance       │                                  │
│  └─ Note: 4 (slider)            │                                  │
│                                 │                                  │
│  [8] Deuxième critère           │  🔘 Exporter en image           │
│  ├─ Libellé: Compréhension      │                                  │
│  └─ Note: 4 (slider)            │                                  │
│                                 │                                  │
│  [9] Troisième critère          │                                  │
│  ├─ Libellé: Distraction        │                                  │
│  └─ Note: 2 (slider)            │                                  │
│                                 │                                  │
│  [10] Dixième champ             │                                  │
│  ├─ Libellé: Objectifs          │                                  │
│  └─ Contenu: Lorem...           │                                  │
│                                 │                                  │
│  [11] Onzième champ             │                                  │
│  ├─ Libellé: Besoins            │                                  │
│  └─ Contenu: Lorem...           │                                  │
│                                 │                                  │
│  [12] Douzième champ            │                                  │
│  ├─ Libellé: Frustrations       │                                  │
│  └─ Contenu: Lorem...           │                                  │
│                                 │                                  │
│  [13] Treizième champ           │                                  │
│  ├─ Libellé: Opportunités       │                                  │
│  └─ Contenu: Lorem...           │                                  │
│                                 │                                  │
│  🔘 Appliquer les modifications  │                                  │
│                                 │                                  │
└─────────────────────────────────┴──────────────────────────────────┘
```

---

## 🎨 Code de Couleur des Badges

### Formulaire - Badge Gris
```
[1] [2] [3] [4] [5] [6] [7] [8] [9] [10] [11] [12] [13]
 ▲   ▲   ▲   ▲   ▲   ▲   ▲   ▲   ▲    ▲    ▲    ▲    ▲
Tous les champs du formulaire ont des badges gris
identifiant leur position (1-13)
```

### Prévisualisation - Badges Bleus (Profil)
```
[1] Nom
[2] Âge                    ← Badges BLEUS
[3] Localisation           ← Profil 1-6
[4] Poste                  ← Identifiables immédiatement
[5] Expérience
[6] Entreprise
```

### Prévisualisation - Badges Verts (Critères)
```
[7] Connaissance [████░]
[8] Compréhension [████░]  ← Badges VERTS
[9] Distraction [██░░░]    ← Critères 7-9

(Avec barres de progression)
```

---

## 🔄 Flux d'Édition - Exemple Concret

### Éditer le Label du Poste (Champ 4)

```
FORMULAIRE
┌────────────────────────────┐
│  [4] Quatrième champ       │
│  ├─ Libellé: "Poste"       │ ← USER CHANGE "Poste" → "Fonction"
│  │    input#label-poste    │
│  │    [Poste          ]    │
│  │         ↓ CHANGE        │
│  │    [Fonction       ]    │
│  │                        │
│  └─ Contenu:              │
│     input#poste           │
│     [Product Manager ]    │
└────────────────────────────┘
         ↓
    updatePreview('label-poste', 'Fonction')
         ↓
PRÉVISUALISATION
┌────────────────────────────┐
│ [4] Fonction: Product Mgr  │ ← UPDATED!
│     ↑ Le label est changé  │
│     ↑ En temps réel        │
└────────────────────────────┘
```

---

## 📋 Tableaux de Correspondance

### Section Profil (1-6) - Bleus 🔵

| # | Formulaire | Prévisualisation |
|---|-----------|-----------------|
| [1] | `label-nom` | `[1] Nom: ...` |
| [2] | `label-age` | `[2] Âge: ...` |
| [3] | `label-localisation` | `[3] Localisation: ...` |
| [4] | `label-poste` | `[4] Poste: ...` |
| [5] | `label-experience` | `[5] Expérience: ...` |
| [6] | `label-entreprise` | `[6] Entreprise: ...` |

### Section Critères (7-9) - Verts 🟢

| # | Formulaire | Prévisualisation |
|---|-----------|-----------------|
| [7] | `label-connaissance` | `[7] Connaissance [████░]` |
| [8] | `label-comprehension` | `[8] Compréhension [████░]` |
| [9] | `label-distraction` | `[9] Distraction [████░]` |

---

## 🔗 Correspondance HTML ↔ JavaScript

```
FORMULAIRE (HTML)
input#label-nom
     ↓
     event: oninput
     ↓
     updatePreview('label-nom', value)
     ↓
PRÉVISUALISATION (HTML)
span#preview-nom
     ↓ textContent = value
     ↓
[1] Nom: {value} ← UPDATED
```

---

## ⚙️ Logique de updatePreview()

```javascript
function updatePreview(field, value) {
    // SLIDERS (7-9)
    if (['connaissance', 'comprehension', 'distraction'].includes(field)) {
        ├─ Calcule le pourcentage (value / 5 * 100)
        ├─ Met à jour la largeur de la barre
        └─ Affiche "X/5"
    }
    
    // LABELS (label-*)
    if (field.startsWith('label-')) {
        ├─ Si critère (7-9): Met à jour le titre
        ├─ Si profil (4-6): Met à jour le label avec ":"
        └─ Applique animation
    }
    
    // VALEURS STANDARD
    else {
        ├─ Met à jour l'élément preview-*
        ├─ Cas spécial "nom": Met à jour .persona-name aussi
        ├─ Cas spécial "poste"/"entreprise": Met à jour .persona-title
        └─ Applique animation
    }
}
```

---

## 🎯 Points de Contrôle

### Voir la Numérotation

```
✓ Ouvrir index.html dans le navigateur
✓ Chercher les badges numérotés [1-13] dans le formulaire (gris)
✓ Chercher les badges numérotés [1-6] dans la prévisualisation (bleu)
✓ Chercher les badges numérotés [7-9] dans la prévisualisation (vert)
```

### Tester la Synchronisation

```
✓ Changer "Poste:" → "Fonction:" dans le formulaire [4]
✓ Prévisualisation doit afficher "[4] Fonction: ..." immédiatement
✓ Modifier un slider → Barre de progression doit changer
✓ Modifier un texte → Valeur doit changer en prévisualisation
```

### Vérifier l'Import CSV

```
✓ Importer biopath.csv
✓ Tous les 13 champs doivent se remplir
✓ Les badges doivent tous être visibles
✓ La correspondance doit être correcte
```

---

## 📊 Décompte des Éléments

```
Formulaire:
├─ 13 champs
├─ 13 badges gris
├─ 13 labels (label-*)
├─ 13 contenus (*)
└─ Total: 26 inputs + 13 badges

Prévisualisation Profil:
├─ 6 badges bleus
├─ 6 champs affichés
└─ Total: 6 badges + 6 éléments

Prévisualisation Critères:
├─ 3 badges verts
├─ 3 barres de progression
└─ Total: 3 badges + 3 barres

Textes (10-13):
├─ 4 sections
└─ Total: 4 sections

TOTAL GÉNÉRAL:
├─ Badges: 13 (gris) + 6 (bleu) + 3 (vert) = 22 badges
├─ Inputs: 26 (formulaire)
├─ Éléments prévisualisation: 6+3+4 = 13
└─ Grand total: 61 éléments coordonnés
```

---

## 🎓 Leçon Système

### Avant (Sans Numérotation)
```
Formulaire          ← ? → Prévisualisation
Pas clair quel champ correspond où
Difficile de déboguer
Facile de faire des erreurs
```

### Après (Avec Numérotation)
```
Formulaire [1]      ← → [1] Prévisualisation
Formulaire [2]      ← → [2] Prévisualisation
...
Formulaire [13]     ← → [13] Prévisualisation

CLAIR, VISUEL, FACILE À DÉBOGUER! ✨
```

---

## 🚀 Prêt Pour

✅ Import CSV fluide (position 1-13)
✅ Édition des labels en temps réel
✅ Édition des valeurs en temps réel
✅ Export PNG de haute qualité
✅ Débogage facile (numéros visibles)
✅ Maintenance simplifiée

---

**Version** : 1.0 - Structure Visuelle
**Date** : Octobre 2025
**Status** : ✅ VISUALISATION COMPLÈTE
