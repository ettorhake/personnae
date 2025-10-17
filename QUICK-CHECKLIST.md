# ✅ CHECKLIST RAPIDE - Système Numéroté

## 🚀 Démarrage Rapide (2 minutes)

### Étape 1: Vérifier les Badges Visuels

```
□ Ouvrir index.html dans navigateur
□ Voir 13 badges GRIS dans le formulaire
□ Voir 6 badges BLEUS dans la prévisualisation (profil)
□ Voir 3 badges VERTS dans la prévisualisation (critères)
```

### Étape 2: Tester l'Import CSV

```
□ Cliquer sur "Sélectionner un fichier CSV"
□ Choisir biopath.csv
□ Voir tous les 13 champs se remplir
□ Voir les badges restent visibles
```

### Étape 3: Tester L'Édition Label

```
□ Modifier "Poste:" → "Fonction:" (formulaire [4])
□ Voir la prévisualisation changer immédiatement
□ Voir "[4] Fonction: ..." en bleu
```

### Étape 4: Tester Un Slider

```
□ Déplacer le slider "Connaissance" [7]
□ Voir la barre de progression changer
□ Voir le nombre mettre à jour
```

### Étape 5: Tester L'Export

```
□ Cliquer "Exporter en image"
□ Voir l'image PNG s'ouvrir
□ Vérifier que les nombres sont visibles
```

---

## 🔍 Vérification Détaillée (5 minutes)

### ✓ Formulaire - 13 Champs Gris

```
[1] Nom              □ Badge visible  □ Label éditable  □ Contenu éditable
[2] Âge              □ Badge visible  □ Label éditable  □ Contenu éditable
[3] Localisation     □ Badge visible  □ Label éditable  □ Contenu éditable
[4] Poste            □ Badge visible  □ Label éditable  □ Contenu éditable
[5] Contexte         □ Badge visible  □ Label éditable  □ Contenu éditable
[6] Situation Méd.   □ Badge visible  □ Label éditable  □ Contenu éditable
[7] Connaissance     □ Badge visible  □ Label éditable  □ Slider fonctionne
[8] Compréhension    □ Badge visible  □ Label éditable  □ Slider fonctionne
[9] Distraction      □ Badge visible  □ Label éditable  □ Slider fonctionne
[10] Objectifs       □ Badge visible  □ Label éditable  □ Contenu éditable
[11] Besoins         □ Badge visible  □ Label éditable  □ Contenu éditable
[12] Frustrations    □ Badge visible  □ Label éditable  □ Contenu éditable
[13] Opportunités    □ Badge visible  □ Label éditable  □ Contenu éditable
```

### ✓ Prévisualisation - Section Profil (6 Bleus)

```
[1] Nom              □ Badge BLEU      □ Valeur affichée
[2] Âge              □ Badge BLEU      □ Valeur affichée
[3] Localisation     □ Badge BLEU      □ Valeur affichée
[4] Poste            □ Badge BLEU      □ Valeur affichée    □ Label changeant
[5] Expérience       □ Badge BLEU      □ Valeur affichée    □ Label changeant
[6] Entreprise       □ Badge BLEU      □ Valeur affichée    □ Label changeant
```

### ✓ Prévisualisation - Section Critères (3 Verts)

```
[7] Connaissance     □ Badge VERT      □ Barre visible      □ Nombre affiché
[8] Compréhension    □ Badge VERT      □ Barre visible      □ Nombre affiché
[9] Distraction      □ Badge VERT      □ Barre visible      □ Nombre affiché
```

### ✓ Prévisualisation - Section Textes (10-13)

```
[10] Objectifs       □ Section visible □ Titre visible      □ Texte affiché
[11] Besoins         □ Section visible □ Titre visible      □ Texte affiché
[12] Frustrations    □ Section visible □ Titre visible      □ Texte affiché
[13] Opportunités    □ Section visible □ Titre visible      □ Texte affiché
```

---

## 🧪 Scénarios de Test

### Scénario 1: Import & Visualisation
```
① Importer biopath.csv
   └─ ✓ Toutes les valeurs se remplissent
   └─ ✓ Toutes les prévisualisations se mettent à jour
   └─ ✓ Les badges restent visibles

② Vérifier l'ordre
   └─ ✓ Champ 1 = Nom
   └─ ✓ Champ 2 = Âge
   └─ ✓ ... etc jusqu'à Champ 13 = Opportunités

③ Exporter en image
   └─ ✓ L'image s'ouvre
   └─ ✓ Les numéros sont dans l'image
```

### Scénario 2: Édition Label
```
① Localiser le champ [4] "Poste:"
② Changer le label: "Poste:" → "Fonction:"
   └─ ✓ Le label change en temps réel
   └─ ✓ La prévisualisation affiche "[4] Fonction: ..."
   └─ ✓ L'animation se joue

③ Appliquer les modifications
   └─ ✓ Bouton est cliquable
   └─ ✓ Message de confirmation apparaît
```

### Scénario 3: Édition Valeur
```
① Changer "Jean" → "Pierre" dans [1] Nom
   └─ ✓ La prévisualisation affiche "[1] Nom: Pierre"
   └─ ✓ Le titre de la persona change aussi

② Changer "28" → "32" dans [2] Âge
   └─ ✓ La prévisualisation affiche "[2] Âge: 32"

③ Changer un slider [7] de 3 → 5
   └─ ✓ La barre se remplit complètement
   └─ ✓ Le nombre affiche "5/5"
```

### Scénario 4: Textes Longs (10-13)
```
① Modifier "Objectifs Professionnels" [10]
   └─ ✓ Le texte s'affiche avec retours à la ligne
   └─ ✓ Il n'écrase pas les autres sections

② Modifier "Besoins Fonctionnels" [11]
   └─ ✓ Le texte s'affiche
   └─ ✓ Il reste lisible dans la prévisualisation
```

---

## 🐛 Troubleshooting

### ❌ Les badges ne s'affichent pas

**Cause**: Classes CSS manquantes
```html
<!-- Doit avoir -->
<span class="badge bg-secondary">1</span>    ← Formulaire (gris)
<span class="badge bg-info">1</span>        ← Profil (bleu)
<span class="badge bg-success">7</span>     ← Critères (vert)
```

**Vérifier**: Ouvrir DevTools (F12) → Chercher "badge" dans HTML

---

### ❌ La prévisualisation ne se met pas à jour

**Cause**: Les IDs ne correspondent pas
```javascript
// Dans app.js - Les IDs doivent exister en HTML
'preview-nom'                    ← Doit être dans index.html
'preview-label-poste'            ← Doit être dans index.html
'preview-label-entreprise'       ← Doit être dans index.html
```

**Vérifier**: Console DevTools → `console.log(document.getElementById('preview-nom'))`
- Si `null` → l'ID n'existe pas
- Si l'élément → tout est bon

---

### ❌ L'import CSV ne remplit pas les champs

**Cause**: L'ordre CSV ne correspond pas
```javascript
// Dans app.js - L'ordre DOIT être:
const orderedFormFields = [
  'nom',              // Position 1
  'age',              // Position 2
  'localisation',     // Position 3
  // ... etc
];
```

**Vérifier**: Le CSV a-t-il les colonnes dans le bon ordre?
```
1:Nom, 2:Âge, 3:Localisation, 4:Poste, 5:Contexte, 6:Situation, 7:Connaissance...
```

---

### ❌ Les sliders ne mettent pas à jour les barres

**Cause**: Les éléments barre ou nombre n'existent pas
```html
<!-- Doit avoir pour chaque slider -->
<div id="progress-connaissance" style="width: 0%"></div>
<span id="value-connaissance">0/5</span>
```

**Vérifier**: Chercher ces IDs dans index.html avec Ctrl+F

---

## 📞 Questions Fréquentes

### Q: Comment vérifier que les 22 badges sont présents?
**A**: Ouvrir DevTools → Console → Copier/coller:
```javascript
document.querySelectorAll('.badge').length
// Doit afficher: 22
```

### Q: Comment vérifier que tous les IDs sont corrects?
**A**: Console → Copier/coller:
```javascript
// Vérifier les IDs critiques
console.log('preview-nom:', !!document.getElementById('preview-nom'));
console.log('label-poste:', !!document.getElementById('label-poste'));
console.log('preview-label-poste:', !!document.getElementById('preview-label-poste'));
```

### Q: Comment déboguer une édition qui ne s'affiche pas?
**A**: 
```javascript
// Dans le formulaire, changez une valeur et ouvrez DevTools
// Puis tapez:
updatePreview('label-poste', 'Nouveau Label')
// Vérifie que la fonction fonctionne
```

---

## 🎯 Résumé de Vérification (30 secondes)

```
ÉLÉMENTS VISIBLES?
□ 13 badges gris dans formulaire
□ 6 badges bleus dans profil
□ 3 badges verts dans critères

FONCTIONNALITÉS?
□ Import CSV remplit les champs
□ Labels éditables se mettent à jour
□ Valeurs éditables se mettent à jour
□ Sliders changent les barres
□ Export génère une image

SI TOUT ✓ = SYSTÈME OPÉRATIONNEL! 🎉
```

---

**Version**: 1.0
**Dernière mise à jour**: Octobre 2025
**Status**: ✅ PRÊT À TESTER
