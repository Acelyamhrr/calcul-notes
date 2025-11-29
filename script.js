// Variables globales
let currentSemester = 's1';     // semestre actuellement séléctionné
let grades = {};        // les notes saisies par l'utilisateur
let customSemesters = [...semesterData];        // copie du tableau semesterData pour permettre la personalisation
let currentTheme = 'elegant';       // thème séléctionné
let editedSemester = null;      // stocker un semestre en cours de modif

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    loadData();     // charge les données sauvegardées depuis le localStorage
    initializeEventListeners();     
    renderSemesterButtons();        
    renderGradeInputs();
    renderUECards();
    updateOverallAverage();
});

// ==================== GESTION DES DONNÉES ====================

// Chargement des données depuis localStorage
function loadData() {
    const savedGrades = localStorage.getItem('university-grades');      // récupère les notes sauvegardés
    if (savedGrades) {      
        grades = JSON.parse(savedGrades);
    }

    const savedCustomSemesters = localStorage.getItem('custom-semesters');      // récup les semestres personalisés
    if (savedCustomSemesters) {
        customSemesters = JSON.parse(savedCustomSemesters);
    }

    const savedTheme = localStorage.getItem('app-theme');       // recup le thème choisi
    if (savedTheme) {
        currentTheme = savedTheme;
        document.body.className = `theme-${currentTheme}`;
        updateThemeButtons();
    }
}

// Sauvegarde des notes
function saveGrades() {
    localStorage.setItem('university-grades', JSON.stringify(grades));
}

// sauvegarde des semestres perso
function saveCustomSemesters() {
    localStorage.setItem('custom-semesters', JSON.stringify(customSemesters));
}

// sauvegarde du theme
function saveTheme() {
    localStorage.setItem('app-theme', currentTheme);
}

// ==================== GESTIONNAIRES D'ÉVÉNEMENTS ====================

// Initialisation des event listeners
function initializeEventListeners() {
    // Thème
    document.getElementById('theme-elegant').addEventListener('click', () => setTheme('elegant'));
    document.getElementById('theme-vibrant').addEventListener('click', () => setTheme('vibrant'));

    // Personnalisation
    document.getElementById('customize-btn').addEventListener('click', openCustomizationModal);
    document.getElementById('close-modal').addEventListener('click', closeCustomizationModal);
    document.getElementById('cancel-btn').addEventListener('click', closeCustomizationModal);
    document.getElementById('save-btn').addEventListener('click', saveCustomization);

    // PDF
    document.getElementById('generate-pdf').addEventListener('click', generatePDF);

    // Modal
    document.getElementById('customization-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeCustomizationModal();
        }
    });
}

// Gestion des thèmes
function setTheme(theme) {
    currentTheme = theme;
    document.body.className = `theme-${theme}`;
    updateThemeButtons();
    saveTheme();
}

function updateThemeButtons() {
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`theme-${currentTheme}`).classList.add('active');
}

// Rendu des boutons de semestre
function renderSemesterButtons() {
    const container = document.getElementById('semester-buttons');
    container.innerHTML = '';

    customSemesters.forEach(semester => {
        const button = document.createElement('button');
        button.className = `semester-btn ${semester.id === currentSemester ? 'active' : ''}`;
        button.textContent = semester.name;
        button.addEventListener('click', () => selectSemester(semester.id));
        container.appendChild(button);
    });
}

// Sélection de semestre
function selectSemester(semesterId) {
    currentSemester = semesterId;
    renderSemesterButtons();
    renderGradeInputs();
    renderUECards();
    updateOverallAverage();
    updateResultsTitle();
}

function updateResultsTitle() {
    const semester = getCurrentSemester();
    document.getElementById('results-title').textContent = `Résultats par UE - ${semester.name}`;
}

// Obtenir le semestre actuel
function getCurrentSemester() {
    return customSemesters.find(s => s.id === currentSemester);
}

// Obtenir toutes les matières uniques du semestre
function getAllSubjects() {
    const semester = getCurrentSemester();
    const subjectCodes = new Set();
    const subjects = [];

    semester.ues.forEach(ue => {
        ue.subjects.forEach(subject => {
            if (!subjectCodes.has(subject.code)) {
                subjectCodes.add(subject.code);
                subjects.push(subject);
            }
        });
    });

    return subjects;
}

// Rendu des inputs de notes
function renderGradeInputs() {
    const container = document.getElementById('grade-inputs');
    container.innerHTML = '';

    const subjects = getAllSubjects();
    const currentGrades = grades[currentSemester] || {};

    subjects.forEach(subject => {
        const gradeInput = document.createElement('div');
        gradeInput.className = 'grade-input';
        
        gradeInput.innerHTML = `
            <div class="grade-input-header">
                <span class="subject-code">${subject.code}</span>
                <span class="coefficient">Coeff: ${subject.coefficient}</span>
            </div>
            <input 
                type="number" 
                min="0" 
                max="20" 
                step="0.1" 
                placeholder="Note /20"
                value="${currentGrades[subject.code] || ''}"
                data-subject="${subject.code}"
            >
        `;

        const input = gradeInput.querySelector('input');
        input.addEventListener('input', function() {
            updateGrade(subject.code, this.value);
        });

        container.appendChild(gradeInput);
    });
}

// Mise à jour d'une note
function updateGrade(subjectCode, value) {
    if (!grades[currentSemester]) {
        grades[currentSemester] = {};
    }

    if (value === '' || value === null) {
        delete grades[currentSemester][subjectCode];
    } else {
        grades[currentSemester][subjectCode] = parseFloat(value);
    }

    saveGrades();
    renderUECards();
    updateOverallAverage();
}

// Calcul d'une UE 
function calculateUEGrade(ue) { 
    const g = grades[currentSemester] || {}; 
    let total = 0, coeffSum = 0; 
    ue.subjects.forEach(s => { 
        if (g[s.code] !== undefined) { 
            total += g[s.code] * s.coefficient; 
            coeffSum += s.coefficient; 
        } 
    }); 
    return coeffSum ? total / coeffSum : null; 
}

// Obtenir la classe CSS pour une note
function getGradeClass(grade) {
    if (grade === null) return 'no-grade';
    if (grade >= 16) return 'grade-excellent';
    if (grade >= 14) return 'grade-good';
    if (grade >= 12) return 'grade-average';
    if (grade >= 10) return 'grade-passing';
    return 'grade-failing';
}

// Obtenir le statut d'une note
function getGradeStatus(grade) {
    if (grade === null) return 'Aucune note saisie';
    return grade >= 10 ? '✅ Validé' : '❌ Non validé';
}

// Rendu des cartes UE
function renderUECards() {
    const container = document.getElementById('ue-cards');
    container.innerHTML = '';

    const semester = getCurrentSemester();
    const currentGrades = grades[currentSemester] || {};

    semester.ues.forEach(ue => {
        const grade = calculateUEGrade(ue);
        const gradeClass = getGradeClass(grade);
        
        const ueCard = document.createElement('div');
        ueCard.className = `ue-card ${gradeClass}`;
        
        ueCard.innerHTML = `
            <div class="ue-header ${gradeClass}">
                <i class="fas fa-award"></i>
                <span class="ue-name">${ue.name}</span>
            </div>
            <div class="ue-grade-display">
                <div class="ue-grade-value ${gradeClass}">
                    ${grade !== null ? grade.toFixed(2) : '--'}
                </div>
                <div class="ue-grade-status">
                    ${getGradeStatus(grade)}
                </div>
            </div>
            ${grade !== null ? `
                <div class="ue-details">
                    ${ue.subjects.filter(s => currentGrades[s.code] !== undefined).map(subject => `
                        <div class="detail-row">
                            <span>${subject.code}</span>
                            <span>${currentGrades[subject.code]} × ${subject.coefficient} = ${(currentGrades[subject.code] * subject.coefficient).toFixed(1)}</span>
                        </div>
                    `).join('')}
                    <div class="detail-row detail-total">
                        <span>Total / ${ue.totalCoeff}</span>
                        <span>${grade.toFixed(2)}</span>
                    </div>
                </div>
            ` : ''}
        `;

        container.appendChild(ueCard);
    });
}

// Calcul de la moyenne du semestre (pondérée sur toutes les matières)
function calculateSemesterAverage() {
    const g = grades[currentSemester] || {};
    const semester = getCurrentSemester();

    let total = 0, coeffSum = 0;
    semester.ues.forEach(ue => {
        ue.subjects.forEach(s => {
            if (g[s.code] !== undefined) {
                total += g[s.code] * s.coefficient;
                coeffSum += s.coefficient;
            }
        });
    });

    return coeffSum ? total / coeffSum : null;
}

// Mise à jour de la moyenne générale
function updateOverallAverage() {
    const average = calculateSemesterAverage();
    const averageElement = document.getElementById('overall-average');
    const valueElement = document.getElementById('average-value');
    const statusElement = document.getElementById('average-status');

    if (average !== null) {
        averageElement.style.display = 'block';
        valueElement.textContent = average.toFixed(2);
        statusElement.textContent = average >= 10 ? '🎉 Semestre validé' : '⚠️ Semestre non validé';
    } else {
        averageElement.style.display = 'none';
    }
}

// Modal de personnalisation
function openCustomizationModal() {
    const semester = getCurrentSemester();
    editedSemester = JSON.parse(JSON.stringify(semester));
    
    document.getElementById('modal-title').textContent = `Personnaliser ${semester.name}`;
    renderCustomizationModal();
    document.getElementById('customization-modal').classList.add('show');
}

function closeCustomizationModal() {
    document.getElementById('customization-modal').classList.remove('show');
    editedSemester = null;
}

function renderCustomizationModal() {
    const container = document.getElementById('modal-body');
    container.innerHTML = '';

    editedSemester.ues.forEach((ue, ueIndex) => {
        const ueSection = document.createElement('div');
        ueSection.className = 'ue-section';
        
        ueSection.innerHTML = `
            <input 
                type="text" 
                class="ue-name-input" 
                value="${ue.name}" 
                data-ue-index="${ueIndex}"
                placeholder="Nom de l'UE"
            >
            <div class="subjects-header">
                <h4>Matières</h4>
                <button class="add-subject-btn" data-ue-index="${ueIndex}">
                    <i class="fas fa-plus"></i>
                    Ajouter
                </button>
            </div>
            <div class="subjects-container" data-ue-index="${ueIndex}">
                ${ue.subjects.map((subject, subjectIndex) => `
                    <div class="subject-row">
                        <input 
                            type="text" 
                            placeholder="Code" 
                            value="${subject.code}"
                            data-ue-index="${ueIndex}"
                            data-subject-index="${subjectIndex}"
                            data-field="code"
                        >
                        <input 
                            type="text" 
                            placeholder="Nom" 
                            value="${subject.name}"
                            data-ue-index="${ueIndex}"
                            data-subject-index="${subjectIndex}"
                            data-field="name"
                        >
                        <input 
                            type="number" 
                            placeholder="Coeff" 
                            min="1" 
                            value="${subject.coefficient}"
                            data-ue-index="${ueIndex}"
                            data-subject-index="${subjectIndex}"
                            data-field="coefficient"
                        >
                        <button class="remove-subject-btn" data-ue-index="${ueIndex}" data-subject-index="${subjectIndex}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `).join('')}
            </div>
            <div class="coeff-total">
                Total des coefficients: ${ue.subjects.reduce((sum, s) => sum + s.coefficient, 0)}
            </div>
        `;

        container.appendChild(ueSection);
    });

    // Event listeners pour la modal
    addCustomizationEventListeners();
}

function addCustomizationEventListeners() {
    // Noms des UE
    document.querySelectorAll('.ue-name-input').forEach(input => {
        input.addEventListener('input', function() {
            const ueIndex = parseInt(this.dataset.ueIndex);
            editedSemester.ues[ueIndex].name = this.value;
        });
    });

    // Matières
    document.querySelectorAll('.subject-row input').forEach(input => {
        input.addEventListener('input', function() {
            const ueIndex = parseInt(this.dataset.ueIndex);
            const subjectIndex = parseInt(this.dataset.subjectIndex);
            const field = this.dataset.field;
            
            let value = this.value;
            if (field === 'coefficient') {
                value = parseInt(value) || 1;
            }
            
            editedSemester.ues[ueIndex].subjects[subjectIndex][field] = value;
            updateCoeffTotal(ueIndex);
        });
    });

    // Boutons d'ajout de matière
    document.querySelectorAll('.add-subject-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const ueIndex = parseInt(this.dataset.ueIndex);
            editedSemester.ues[ueIndex].subjects.push({
                code: '',
                name: '',
                coefficient: 1
            });
            renderCustomizationModal();
        });
    });

    // Boutons de suppression de matière
    document.querySelectorAll('.remove-subject-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const ueIndex = parseInt(this.dataset.ueIndex);
            const subjectIndex = parseInt(this.dataset.subjectIndex);
            editedSemester.ues[ueIndex].subjects.splice(subjectIndex, 1);
            renderCustomizationModal();
        });
    });
}

function updateCoeffTotal(ueIndex) {
    const ue = editedSemester.ues[ueIndex];
    const total = ue.subjects.reduce((sum, s) => sum + s.coefficient, 0);
    const totalElement = document.querySelector(`[data-ue-index="${ueIndex}"]`).parentElement.querySelector('.coeff-total');
    if (totalElement) {
        totalElement.textContent = `Total des coefficients: ${total}`;
    }
}

function saveCustomization() {
    // Recalculer les totaux de coefficients
    editedSemester.ues.forEach(ue => {
        ue.totalCoeff = ue.subjects.reduce((sum, subject) => sum + subject.coefficient, 0);
    });

    // Mettre à jour le semestre dans customSemesters
    const index = customSemesters.findIndex(s => s.id === editedSemester.id);
    if (index !== -1) {
        customSemesters[index] = editedSemester;
    }

    saveCustomSemesters();
    closeCustomizationModal();
    
    // Rafraîchir l'affichage
    renderGradeInputs();
    renderUECards();
    updateOverallAverage();
}

// Génération PDF
function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const semester = getCurrentSemester();
    const semesterGrades = grades[currentSemester] || {};
    
    // Titre
    doc.setFontSize(20);
    doc.text(`Relevé de notes - ${semester.name}`, 20, 30);
    
    let yPosition = 50;
    
    semester.ues.forEach((ue) => {
        // Nom de l'UE
        doc.setFontSize(14);
        doc.text(ue.name, 20, yPosition);
        yPosition += 10;
        
        // Calcul de la note de l'UE
        const ueGrade = calculateUEGrade(ue);
        
        // Note de l'UE
        doc.setFontSize(12);
        doc.text(`Moyenne UE: ${ueGrade ? ueGrade.toFixed(2) : 'N/A'}/20`, 30, yPosition);
        yPosition += 8;
        
        // Matières
        doc.setFontSize(10);
        ue.subjects.forEach((subject) => {
            const grade = semesterGrades[subject.code];
            if (grade !== undefined) {
                doc.text(`${subject.code} (Coeff: ${subject.coefficient}): ${grade}/20`, 40, yPosition);
                yPosition += 6;
            }
        });
        
        yPosition += 10;
        
        // Nouvelle page si nécessaire
        if (yPosition > 250) {
            doc.addPage();
            yPosition = 30;
        }
    });
    
    // Moyenne générale
    const overallAverage = calculateSemesterAverage();
    if (overallAverage !== null) {
        yPosition += 10;
        doc.setFontSize(14);
        doc.text(`Moyenne générale: ${overallAverage.toFixed(2)}/20`, 20, yPosition);
    }
    
    doc.save(`releve-notes-${semester.name.toLowerCase().replace(' ', '-')}.pdf`);
}