# Persona Creator

Une application web intuitive pour créer et gérer des personas marketing et UX de manière professionnelle.

## 📋 Fonctionnalités

- Création de personas détaillés avec photo
- Interface intuitive et responsive
- Sections personnalisables :
  - Profil personnel et professionnel
  - Besoins et objectifs
  - Points de douleur
  - Solutions proposées
- Export au format CSV
- Personnalisation de l'apparence avec des dégradés et images de fond
- Mode d'affichage adaptatif

## 🚀 Installation

1. Clonez ce dépôt :
```bash
git clone https://github.com/ettorhake/personnae.git
```

2. Ouvrez le dossier :
```bash
cd personnae
```

3. Ouvrez le fichier `index.html` dans votre navigateur web préféré

## 💡 Utilisation

### Création d'un Persona

1. **Photo du Persona**
   - Cliquez sur la zone de photo pour télécharger une image
   - Format recommandé : carrée, minimum 150x150px

2. **Image d'en-tête**
   - Utilisez le champ "Image de fond de l'en-tête" pour personnaliser l'arrière-plan
   - Un dégradé élégant sera automatiquement appliqué

3. **Informations du Profil**
   - Remplissez les champs du formulaire :
     - Nom du persona
     - Titre/Poste
     - Âge
     - Localisation
     - etc.

4. **Sections spécifiques**
   - Complétez les différentes sections :
     - Profil (formation, expérience)
     - Objectifs et motivations
     - Points de douleur
     - Solutions envisagées

### Export et Sauvegarde

- Utilisez la fonction d'export CSV pour sauvegarder vos personas
- Le format CSV permet l'importation dans d'autres outils

## 🎨 Personnalisation

Vous pouvez personnaliser l'apparence en modifiant les variables CSS dans `css/styles.css` :

```css
:root {
    --primary-color: #4A90E2;    /* Couleur principale */
    --accent-color: #FF6B6B;     /* Couleur d'accent */
    --success-color: #4CAF50;    /* Couleur de succès */
    --warning-color: #FFC107;    /* Couleur d'avertissement */
    /* etc. */
}
```

## 💻 Compatibilité

- Chrome (recommandé)
- Firefox
- Safari
- Edge

## 🛠️ Structure du Projet

```
personnae/
│
├── index.html          # Page principale
├── css/
│   └── styles.css      # Styles de l'application
├── js/
│   └── app.js         # Logique de l'application
└── assets/            # Ressources (images, etc.)
```

## ✨ Bonnes Pratiques

1. **Photos**
   - Utilisez des photos professionnelles
   - Respectez les droits d'image
   - Optimisez la taille des images

2. **Contenu**
   - Soyez concis mais descriptif
   - Utilisez des données réelles ou réalistes
   - Mettez à jour régulièrement vos personas

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmeliorationIncroyable`)
3. Commit vos changements (`git commit -m 'Ajout de quelque chose d'incroyable'`)
4. Push vers la branche (`git push origin feature/AmeliorationIncroyable`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.