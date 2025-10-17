# 🧪 Guide de Test - Système Numéroté

## ⚡ Quick Start

### Étape 1: Ouvrir l'Application
```bash
Ouvrir index.html dans votre navigateur
```

### Étape 2: Importer un CSV
```
1. Cliquer sur "Choisir un fichier" (en haut à gauche)
2. Sélectionner "biopath.csv"
3. Les données doivent s'importer automatiquement
```

### Étape 3: Vérifier la Numérotation
```
Formulaire (côté gauche)          Prévisualisation (côté droit)
[1] Premier champ           ← → [1] Nom: Jean
[2] Deuxième champ          ← → [2] Âge: 28
[3] Troisième champ         ← → [3] Localisation: Paris
[4] Quatrième champ         ← → [4] Poste: Product Manager
[5] Cinquième champ         ← → [5] Expérience: 5 ans
[6] Sixième champ           ← → [6] Entreprise: TechCorp
[7] Premier critère         ← → [7] Connaissance [████░]
[8] Deuxième critère        ← → [8] Compréhension [████░]
[9] Troisième critère       ← → [9] Distraction [██░░░]
[10] Dixième champ
[11] Onzième champ
[12] Douzième champ
[13] Treizième champ
```

### Étape 4: Tester la Mise à Jour en Temps Réel

#### Test 4a: Éditer un Label (Champ 4)
```
1. Formulaire → [4] Quatrième champ → "Libellé du critère"
2. Changer "Poste / Statut" → "Fonction"
3. Prévisualisation devrait afficher "[4] Fonction: Product Manager"
```

#### Test 4b: Éditer une Valeur (Champ 1)
```
1. Formulaire → [1] Premier champ → "Contenu"
2. Changer "Jean" → "Marie"
3. Prévisualisation devrait afficher "[1] Nom: Marie"
4. Le titre principal devrait aussi afficher "Marie"
```

#### Test 4c: Éditer un Slider (Champ 7)
```
1. Formulaire → [7] Premier critère → Note (1-5)
2. Déplacer le slider vers 2
3. Prévisualisation devrait afficher "[7] ... [██░░░]"
```

### Étape 5: Appliquer et Exporter
```
1. Cliquer "Appliquer les modifications"
2. Animation de confirmation devrait apparaître
3. Cliquer "Exporter en image"
4. PNG devrait être téléchargé avec toutes les données
```

---

## ✅ Checklist de Vérification

### Prévisualisation - Profil (Badges Bleus)
- [ ] [1] Nom s'affiche avec le badge bleu "1"
- [ ] [2] Âge s'affiche avec le badge bleu "2"
- [ ] [3] Localisation s'affiche avec le badge bleu "3"
- [ ] [4] Poste s'affiche avec le badge bleu "4"
- [ ] [5] Expérience s'affiche avec le badge bleu "5"
- [ ] [6] Entreprise s'affiche avec le badge bleu "6"

### Prévisualisation - Critères (Badges Verts)
- [ ] [7] Connaissance s'affiche avec barre de progression verte "7"
- [ ] [8] Compréhension s'affiche avec barre de progression verte "8"
- [ ] [9] Distraction s'affiche avec barre de progression verte "9"

### Formulaire - Badges Gris
- [ ] Tous les 13 champs ont un badge gris (1-13)
- [ ] Chaque badge est visible et lisible

### Édition & Mise à Jour
- [ ] Éditer un label → Prévisualisation se met à jour immédiatement
- [ ] Éditer une valeur → Prévisualisation se met à jour immédiatement
- [ ] Éditer un slider → Barre de progression se met à jour
- [ ] Bouton "Appliquer" → Animation de confirmation

### CSV Import
- [ ] biopath.csv s'importe sans erreurs
- [ ] Les 13 champs se remplissent correctement
- [ ] Les labels de CSV deviennent les titres des sections

### Export
- [ ] "Exporter en image" génère une PNG
- [ ] La PNG contient toutes les données
- [ ] La PNG a la bonne résolution (double: scale 2)

---

## 🔍 Troubleshooting

### Problème: Les numéros n'apparaissent pas
**Solution**: 
1. F12 pour ouvrir la console
2. Vérifier qu'il n'y a pas d'erreur JavaScript
3. Rechargencer la page (Ctrl+Shift+R)

### Problème: La prévisualisation ne se met pas à jour
**Solution**:
1. Vérifier que les inputs ont des `id` corrects
2. Vérifier que les éléments de prévisualisation existent
3. Ouvrir la console (F12) pour voir les erreurs

### Problème: CSV ne s'importe pas
**Solution**:
1. Vérifier que le CSV a 13 lignes (positions 1-13)
2. Vérifier que les lignes ne sont pas vides
3. Le nom des colonnes n'importe pas - seule la position compte

### Problème: Les labels ne se mettent pas à jour
**Solution**:
1. Vérifier que vous éditez dans "Libellé du critère"
2. Vérifier que les IDs `preview-label-*` existent en HTML
3. Vérifier que `updatePreview()` est appelée

---

## 📊 Vérification des IDs

### Console JavaScript (F12 → Console)

Vérifier que tous les éléments existent:
```javascript
// Vérifier les inputs du formulaire
console.log(document.getElementById('nom'));                    // Input 1
console.log(document.getElementById('label-poste'));           // Input 4 label
console.log(document.getElementById('connaissance'));          // Input 7 (slider)

// Vérifier les éléments de prévisualisation
console.log(document.getElementById('preview-nom'));           // Preview 1
console.log(document.getElementById('preview-label-poste'));   // Preview 4 label
console.log(document.getElementById('preview-connaissance-bar')); // Preview 7 (barre)

// Tous devraient afficher des éléments HTML, pas "null"
```

---

## 🎓 Exemple Complet de Flux

### Scenario: Créer un Persona "Alice"

```
1. IMPORTER
   Fichier: biopath.csv
   ↓
   Données importées + Labels remplis

2. ÉDITER LABELS
   [4] Changer "Poste / Statut" → "Titre Officiel"
   [5] Changer "Contexte" → "Contexte Professionnel"
   [6] Changer "Situation médicale" → "Situation Personnelle"
   ↓
   Prévisualisation se met à jour en temps réel

3. ÉDITER VALEURS
   [1] Changer nom → "Alice"
   [7] Changer connaissance → 4
   [10] Changer objectifs → "Alice veut simplifier son workflow"
   ↓
   Prévisualisation se met à jour

4. APPLIQUER
   Cliquer "Appliquer les modifications"
   ↓
   Animation de confirmation

5. EXPORTER
   Cliquer "Exporter en image"
   ↓
   PNG téléchargée: "persona-2025-10-17...png"
```

---

## 📱 Points de Repère Visuels

### Formulaire - Couleurs des Badges
```
Tous les champs ont:
     [1] ← Badge gris numéroté
```

### Prévisualisation - Couleurs des Badges
```
Profil (1-6):
     [1] ← Badge BLEU numéroté

Critères (7-9):
     [7] ← Badge VERT numéroté

Textes (10-13):
     ← Pas de badge
```

---

## 🎯 Succès = Quand...

✅ Tous les numéros (1-13) sont visibles et correspondent entre formulaire et prévisualisation
✅ Les badges bleus (1-6) apparaissent dans le profil
✅ Les badges verts (7-9) apparaissent avec les critères
✅ Les modifications se voient en temps réel
✅ L'export PNG fonctionne

---

## 📞 Support

Si quelque chose ne fonctionne pas:
1. Consultez `FIELD-MAPPING.md` pour le mappage complet
2. Consultez `NUMBERED-SYSTEM.md` pour les détails du système
3. Ouvrez la console (F12) pour voir les erreurs

---

**Version** : 1.0
**Date** : Octobre 2025
**Prêt pour** : ✅ Tests complets
