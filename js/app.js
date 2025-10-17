// Sélection des éléments DOM
const personaForm = document.getElementById('personaForm');
const csvImport = document.getElementById('csvImport');
const importBtn = document.getElementById('importBtn');
const exportBtn = document.getElementById('exportBtn');
const primaryColorInput = document.getElementById('primaryColor');
const secondaryColorInput = document.getElementById('secondaryColor');
const logoUpload = document.getElementById('logoUpload');
const photoUpload = document.getElementById('photoUpload');
const headerBackgroundUpload = document.getElementById('headerBackgroundUpload');
const personaCard = document.getElementById('personaCard');

// Fonction de mise à jour des prévisualisations
function updatePreview(field, value) {
    // Gestion spéciale pour les barres de progression
    if (['connaissance', 'comprehension', 'distraction'].includes(field)) {
        const progressBar = document.getElementById(`preview-${field}-bar`);
        if (progressBar) {
            const percentage = (value / 5) * 100;
            progressBar.style.width = `${percentage}%`;
            progressBar.setAttribute('aria-valuenow', value);
            progressBar.textContent = `${value}/5`;
        }
        return;
    }

    // Gestion spéciale pour les labels (label-nom, label-age, etc.)
    if (field.startsWith('label-')) {
        const fieldName = field.replace('label-', '');
        const labelElement = document.getElementById(`preview-${field}`);
        if (labelElement) {
            labelElement.textContent = value;
            labelElement.classList.add('update-animation');
            setTimeout(() => {
                labelElement.classList.remove('update-animation');
            }, 1000);
        }
        
        // Pour les critères (connaissance, comprehension, distraction)
        if (['connaissance', 'comprehension', 'distraction'].includes(fieldName)) {
            const criteriaTitle = document.getElementById(`preview-${fieldName}-title`);
            if (criteriaTitle) {
                criteriaTitle.textContent = value;
            }
        }
        
        // Pour les champs du profil (poste, entreprise, experience, localisation)
        if (['poste', 'entreprise', 'experience', 'localisation'].includes(fieldName)) {
            const profileLabel = document.getElementById(`preview-label-${fieldName}`);
            if (profileLabel) {
                profileLabel.textContent = value + ':';
            }
        }
        
        return;
    }

    // Gestion standard pour les autres champs
    const previewElement = document.getElementById(`preview-${field}`);
    if (previewElement) {
        previewElement.textContent = value;
        previewElement.classList.add('update-animation');
        setTimeout(() => {
            previewElement.classList.remove('update-animation');
        }, 1000);
    }

    // Mise à jour spéciale pour le nom
    if (field === 'nom') {
        document.querySelector('.persona-name').textContent = value;
    }

    // Mise à jour du titre (poste - entreprise)
    if (field === 'poste' || field === 'entreprise') {
        const poste = document.getElementById('preview-poste')?.textContent || '-';
        const entreprise = document.getElementById('preview-entreprise')?.textContent || '-';
        document.querySelector('.persona-title').textContent = `${poste} - ${entreprise}`;
    }
}

// Mise à jour des couleurs
function updateColors() {
    const primaryColor = primaryColorInput.value;
    const secondaryColor = secondaryColorInput.value;
    
    document.documentElement.style.setProperty('--primary-color', primaryColor);
    document.documentElement.style.setProperty('--secondary-color', secondaryColor);
}

// Gestion du logo
function handleLogoUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.querySelector('.client-logo').style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(file);
    }
}

// Import CSV
let csvData = [];

function handleCSVImport() {
    const file = csvImport.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const text = e.target.result;
            // Support both Windows (\r\n) and Unix (\n) line endings
            const rows = text.split(/\r?\n/).filter(row => row.trim() !== '');
            
            // Parse CSV en utilisant la virgule comme séparateur
            csvData = rows.map(row => {
                let [field, ...rest] = row.split(',');
                // Reconstituer le contenu au cas où il y aurait des virgules dedans
                let content = rest.join(',');
                return {
                    field: field.trim().replace(/^["']|["']$/g, ''),
                    content: content.trim().replace(/^["']|["']$/g, '')
                };
            });

            // Enlever l'en-tête si présent
            if (csvData[0].field.toLowerCase() === 'champ') {
                csvData.shift();
            }

            // Liste ordonnée des champs du formulaire dans l'ordre d'affichage
            const orderedFormFields = [
                'nom',            // Position 1
                'age',            // Position 2
                'localisation',   // Position 3
                'poste',          // Position 4 (Statut)
                'experience',     // Position 5 (Contexte)
                'entreprise',     // Position 6 (Situation médicale)
                'connaissance',   // Position 7
                'comprehension',  // Position 8
                'distraction',    // Position 9
                'objectifs',      // Position 10
                'besoins',        // Position 11
                'frustrations',   // Position 12
                'opportunites'    // Position 13
            ];

            // Créer l'objet de données et de labels
            const data = {};
            const labels = {};
            
            // Associer chaque ligne du CSV au champ correspondant par position
            csvData.forEach((row, index) => {
                if (index < orderedFormFields.length) {
                    const fieldId = orderedFormFields[index];
                    data[fieldId] = row.content;
                    labels[fieldId] = row.field;  // Utiliser le nom du champ du CSV comme label
                }
            });

            // Mettre à jour le formulaire avec les données et les labels
            updateFormWithData(data, labels);
        };
        reader.readAsText(file);
    }
}

// Mise à jour du formulaire et de la prévisualisation
function updateFormWithData(data, labels = {}) {
    // Mettre à jour le formulaire avec les données et les labels
    Object.entries(data).forEach(([field, value]) => {
        // Mettre à jour la valeur du champ
        const input = document.querySelector(`[name="${field}"]`);
        if (input) {
            input.value = value;
            
            // Obtenir le label à utiliser
            const label = labels[field] || field;
            
            // Mettre à jour le label du champ dans le formulaire
            const labelElement = document.querySelector(`label[for="${field}"]`);
            if (labelElement) {
                labelElement.textContent = label;
            }
            
            // Mettre à jour le champ de libellé si existant
            const labelInput = document.querySelector(`input[name="label-${field}"]`);
            if (labelInput) {
                labelInput.value = label;
            }
            
            // Mettre à jour les titres dans la prévisualisation pour les sections
            const previewLabelSection = document.getElementById(`preview-label-${field}`);
            if (previewLabelSection) {
                previewLabelSection.textContent = label;
            }
            
            // Mise à jour des en-têtes de section pour les échelles
            if (['connaissance', 'comprehension', 'distraction'].includes(field)) {
                // Mettre à jour le titre du critère dans la prévisualisation
                const criteriaTitle = document.getElementById(`preview-${field}-title`);
                if (criteriaTitle) {
                    criteriaTitle.textContent = label;
                }
                
                // Mettre à jour les labels spécifiques aux échelles
                const minLabel = document.querySelector(`input[name="label-${field}-min"]`);
                const maxLabel = document.querySelector(`input[name="label-${field}-max"]`);
                if (minLabel) minLabel.value = `Min. ${label}`;
                if (maxLabel) maxLabel.value = `Max. ${label}`;
            }
            
            // Mettre à jour la prévisualisation de la valeur
            updatePreview(field, value);
        }
    });
}

// Fonction pour mettre à jour les labels des critères
function updateCriteriaLabels(criteriaName, formData) {
    // Mettre à jour le titre du critère
    const titleElement = document.getElementById(`preview-${criteriaName}-title`);
    if (titleElement) {
        titleElement.textContent = formData.get(`label-${criteriaName}`);
    }

    // Mettre à jour les labels min/max
    const minElement = document.getElementById(`preview-${criteriaName}-min`);
    const maxElement = document.getElementById(`preview-${criteriaName}-max`);
    if (minElement) {
        minElement.textContent = formData.get(`label-${criteriaName}-min`);
    }
    if (maxElement) {
        maxElement.textContent = formData.get(`label-${criteriaName}-max`);
    }
}



// Export en image
async function exportToImage() {
    try {
        // Attendre un court instant pour s'assurer que tous les styles sont appliqués
        await new Promise(resolve => setTimeout(resolve, 100));

        const canvas = await html2canvas(personaCard, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            logging: true,
            onclone: function(clonedDoc) {
                const clonedCard = clonedDoc.getElementById('personaCard');
                if (clonedCard) {
                    // Forcer les styles de background sur l'élément cloné
                    const headerBg = clonedCard.querySelector('.persona-header-background');
                    const header = clonedCard.querySelector('.persona-header');
                    if (headerBg) {
                        headerBg.style.position = 'absolute';
                        headerBg.style.width = '100%';
                        headerBg.style.height = '100%';
                    }
                    if (header && header.classList.contains('has-photo')) {
                        const photoUrl = getComputedStyle(document.documentElement)
                            .getPropertyValue('--photo-url')
                            .replace('url(', '')
                            .replace(')', '')
                            .replace(/['"]/g, '');
                        if (photoUrl && photoUrl !== 'none') {
                            // Précharger l'image
                            const img = new Image();
                            img.crossOrigin = "Anonymous";
                            img.src = photoUrl;
                        }
                    }
                }
            }
        });

        // Créer un lien de téléchargement
        const link = document.createElement('a');
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        link.download = `persona-${timestamp}.png`;
        link.href = canvas.toDataURL('image/png', 1.0);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Erreur détaillée lors de l\'export:', error);
        alert('Une erreur est survenue lors de l\'export de l\'image. Vérifiez la console pour plus de détails.');
    }
}

// Gestion de la photo du persona
function handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const photoUrl = e.target.result;
            // Mise à jour de la photo du persona
            const photoElement = document.querySelector('.persona-photo');
            photoElement.style.backgroundImage = `url(${photoUrl})`;
            photoElement.classList.add('has-photo');
            
            // Mise à jour du fond de la bannière
            const headerElement = document.querySelector('.persona-header');
            headerElement.classList.add('has-photo');
            document.documentElement.style.setProperty('--photo-url', `url(${photoUrl})`);
        };
        reader.readAsDataURL(file);
    }
}

// Gestion de l'image de fond de l'en-tête
function handleHeaderBackgroundUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const headerBackground = document.querySelector('.persona-header-background');
            headerBackground.style.backgroundImage = `linear-gradient(135deg, 
                var(--primary-color) 0%, 
                rgba(74, 144, 226, 0.8) 50%,
                rgba(74, 144, 226, 0.4) 100%),
                url(${e.target.result})`;
            headerBackground.style.backgroundSize = 'cover';
            headerBackground.style.backgroundPosition = 'center';
            headerBackground.style.opacity = '1';
        };
        reader.readAsDataURL(file);
    }
}

// Écouteurs d'événements
primaryColorInput.addEventListener('input', updateColors);
secondaryColorInput.addEventListener('input', updateColors);
logoUpload.addEventListener('change', handleLogoUpload);
photoUpload.addEventListener('change', handlePhotoUpload);
headerBackgroundUpload.addEventListener('change', handleHeaderBackgroundUpload);
csvImport.addEventListener('change', handleCSVImport); // Changed from click to change
exportBtn.addEventListener('click', exportToImage);

// Gestion du bouton d'application des modifications
const applyChangesBtn = document.getElementById('applyChangesBtn');
applyChangesBtn.addEventListener('click', () => {
    // Récupérer tous les champs du formulaire
    const formData = new FormData(personaForm);
    
    // Traiter chaque champ
    formData.forEach((value, field) => {
        if (field.startsWith('label-')) {
            // Mettre à jour les labels des sections et critères
            const fieldName = field.replace('label-', '');
            const labelElement = document.getElementById(`preview-${field}`);
            if (labelElement) {
                labelElement.textContent = value;
            }
            
            // Pour les critères (connaissance, comprehension, distraction)
            if (['connaissance', 'comprehension', 'distraction'].includes(fieldName)) {
                const criteriaTitle = document.getElementById(`preview-${fieldName}-title`);
                if (criteriaTitle) {
                    criteriaTitle.textContent = value;
                }
            }
        } else {
            // Mettre à jour les valeurs des champs
            updatePreview(field, value);
        }
    });
    
    // Animation de confirmation
    applyChangesBtn.classList.add('btn-success');
    applyChangesBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2 me-2" viewBox="0 0 16 16">
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
        </svg>
        Modifications appliquées
    `;
    
    setTimeout(() => {
        applyChangesBtn.classList.remove('btn-success');
        applyChangesBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle me-2" viewBox="0 0 16 16">
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
            </svg>
            Appliquer les modifications
        `;
    }, 2000);
});

// Désactiver la mise à jour en temps réel du formulaire
personaForm.addEventListener('input', (e) => {
    // Ne plus mettre à jour automatiquement
    // Les modifications seront appliquées lors du clic sur le bouton
});