# 🔢 Mappage Numéroté - Formulaire ↔ Prévisualisation

## Vue d'ensemble du système numéroté

Chaque champ du formulaire (1-13) est maintenant **numéroté visuellement** dans :
1. Le **formulaire** (badge gris)
2. La **prévisualisation** (badge bleu pour profil, vert pour critères)

Cela permet une **correspondance claire** entre les inputs et les affichages.

---

## 📊 Tableau de Mappage Complet

### Section Profil (Champs 1-6) - Badges Bleus 🔵

| # | Formulaire | HTML ID | Input Name | Preview ID | Type |
|---|-----------|---------|-----------|-----------|------|
| **1️⃣** | Premier champ | `nom` | `nom` | `preview-nom` | text |
| **2️⃣** | Deuxième champ | `age` | `age` | `preview-age` | text |
| **3️⃣** | Troisième champ | `localisation` | `localisation` | `preview-localisation` | text |
| **4️⃣** | Quatrième champ | `label-poste` | `label-poste` | `preview-label-poste` | text (label) |
| | | `poste` | `poste` | `preview-poste` | text (contenu) |
| **5️⃣** | Cinquième champ | `label-experience` | `label-experience` | `preview-label-experience` | text (label) |
| | | `experience` | `experience` | `preview-experience` | textarea (contenu) |
| **6️⃣** | Sixième champ | `label-entreprise` | `label-entreprise` | `preview-label-entreprise` | text (label) |
| | | `entreprise` | `entreprise` | `preview-entreprise` | text (contenu) |

### Section Critères d'Évaluation (Champs 7-9) - Badges Verts 🟢

| # | Formulaire | HTML ID | Input Name | Preview ID | Type |
|---|-----------|---------|-----------|-----------|------|
| **7️⃣** | Premier critère | `label-connaissance` | `label-connaissance` | `preview-connaissance-title` | text (label) |
| | | `connaissance` | `connaissance` | `preview-connaissance-bar` | slider (barre) |
| **8️⃣** | Deuxième critère | `label-comprehension` | `label-comprehension` | `preview-comprehension-title` | text (label) |
| | | `comprehension` | `comprehension` | `preview-comprehension-bar` | slider (barre) |
| **9️⃣** | Troisième critère | `label-distraction` | `label-distraction` | `preview-distraction-title` | text (label) |
| | | `distraction` | `distraction` | `preview-distraction-bar` | slider (barre) |

### Section Textes (Champs 10-13) - Sans Badge

| # | Formulaire | HTML ID | Input Name | Preview ID | Type |
|---|-----------|---------|-----------|-----------|------|
| **🔟** | Dixième champ | `label-objectifs` | `label-objectifs` | `preview-label-objectifs` | text (label) |
| | | `objectifs` | `objectifs` | `preview-objectifs` | textarea (contenu) |
| **1️⃣1️⃣** | Onzième champ | `label-besoins` | `label-besoins` | `preview-label-besoins` | text (label) |
| | | `besoins` | `besoins` | `preview-besoins` | textarea (contenu) |
| **1️⃣2️⃣** | Douzième champ | `label-frustrations` | `label-frustrations` | `preview-label-frustrations` | text (label) |
| | | `frustrations` | `frustrations` | `preview-frustrations` | textarea (contenu) |
| **1️⃣3️⃣** | Treizième champ | `label-opportunites` | `label-opportunites` | `preview-label-opportunites` | text (label) |
| | | `opportunites` | `opportunites` | `preview-opportunites` | textarea (contenu) |

---

## 🎨 Code Visuel - Exemple d'un Champ

### Formulaire (HTML)
```html
<div class="mb-4">
    <h4 class="h6">
        <span class="badge bg-secondary me-2">1</span>  <!-- Badge gris avec numéro -->
        Premier champ
    </h4>
    
    <!-- Libellé du critère -->
    <div class="mb-2">
        <label class="form-label">Libellé du critère</label>
        <input type="text" class="form-control" id="label-nom" name="label-nom" value="Nom">
    </div>
    
    <!-- Contenu -->
    <div class="mb-3">
        <label class="form-label">Contenu</label>
        <input type="text" class="form-control" id="nom" name="nom">
    </div>
</div>
```

### Prévisualisation (HTML)
```html
<p>
    <span class="badge bg-info me-2">1</span>  <!-- Badge bleu avec numéro -->
    <strong>Nom:</strong> 
    <span id="preview-nom">-</span>  <!-- Affichage du contenu -->
</p>
```

---

## 🔄 Flux de Données pour Chaque Champ

### Exemple : Champ 1 (Nom)

```
1. Utilisateur tape "Jean Dupont" dans le formulaire [id="nom"]
   ↓
2. JavaScript détecte le changement
   ↓
3. updatePreview('nom', 'Jean Dupont') est appelée
   ↓
4. document.getElementById('preview-nom').textContent = 'Jean Dupont'
   ↓
5. document.querySelector('.persona-name').textContent = 'Jean Dupont'
   ↓
6. La prévisualisation affiche "Jean Dupont" aux deux endroits
```

### Exemple : Champ 4 (Poste) avec Label Éditable

```
1. Utilisateur tape "Product Manager" dans [id="poste"]
   ↓
2. updatePreview('poste', 'Product Manager')
   ↓
3. document.getElementById('preview-poste').textContent = 'Product Manager'
   ↓
4. document.querySelector('.persona-title').textContent = 'Product Manager - ...'
   
OU

1. Utilisateur tape "Position" dans [id="label-poste"]
   ↓
2. updatePreview('label-poste', 'Position')
   ↓
3. document.getElementById('preview-label-poste').textContent = 'Position:'
   ↓
4. La prévisualisation affiche "Position: Product Manager"
```

---

## 📋 CSV Import Order

Lors de l'import CSV, les colonnes sont mappées **par position** :

```
Colonne CSV 1 → Champ 1 (nom)
Colonne CSV 2 → Champ 2 (age)
Colonne CSV 3 → Champ 3 (localisation)
Colonne CSV 4 → Champ 4 (poste)
Colonne CSV 5 → Champ 5 (experience)
Colonne CSV 6 → Champ 6 (entreprise)
Colonne CSV 7 → Champ 7 (connaissance)
Colonne CSV 8 → Champ 8 (comprehension)
Colonne CSV 9 → Champ 9 (distraction)
Colonne CSV 10 → Champ 10 (objectifs)
Colonne CSV 11 → Champ 11 (besoins)
Colonne CSV 12 → Champ 12 (frustrations)
Colonne CSV 13 → Champ 13 (opportunites)
```

**Important** : Les noms de colonnes CSV ne sont PAS utilisés - seule la POSITION compte !

---

## 🎯 Points de Correspondance Clés

### Badges de Numérotation

| Type | Couleur | Localisation | Champs |
|------|---------|--------------|--------|
| Profil | Bleu 🔵 | Formulaire + Prévisualisation | 1-6 |
| Critères | Gris ✓ | Formulaire uniquement | 7-9 |
| Critères | Vert 🟢 | Prévisualisation uniquement | 7-9 |
| Textes | Gris ✓ | Formulaire uniquement | 10-13 |

### Éléments à Mettre à Jour

Lors d'une édition :
- ✅ Input `label-*` → Élément `<h3 id="preview-label-*">` ou `<strong id="preview-label-*">`
- ✅ Input `*` → Élément `<span id="preview-*">` ou `<div id="preview-*">`
- ✅ Input `nom` → Aussi met à jour `<h1 class="persona-name">`
- ✅ Input `poste` / `entreprise` → Aussi met à jour `<p class="persona-title">`

---

## 🔧 Vérification des Correspondances

Pour vérifier que tout est correctement mapé :

1. **Ouvrir la console (F12)**
2. **Importer un CSV**
3. **Vérifier les logs** : Chaque champ devrait avoir ses id et name correspondants
4. **Éditer un champ** : La prévisualisation devrait se mettre à jour immédiatement
5. **Cliquer "Appliquer"** : Animation de confirmation

---

## 📝 Résumé du Système

```
FORMULAIRE (13 champs numérotés)
    ↓
    ├─ Badges gris (identifiant)
    ├─ Labels éditables (label-*)
    ├─ Champs de contenu (*)
    ↓
EVENT LISTENERS + updatePreview()
    ↓
PRÉVISUALISATION (éléments DOM correspondants)
    ├─ Badges bleus/verts (identifiant visuel)
    ├─ Titres d'éléments (correspondants aux labels)
    ├─ Valeurs affichées
    ↓
EXPORT EN IMAGE (html2canvas)
```

---

**Version** : 1.0
**Dernière mise à jour** : Octobre 2025
**Statut** : ✅ Système numéroté opérationnel
