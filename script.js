// Equation Names Array - Matches the index of Equations array
const equationNames = [
  "4 APs (2 sciences)",                                                // Option 1
  "8 Subjects (3 sciences)",                                          // Option 2
  "6 Subjects (3 sciences) + ACT1",                                   // Option 3
  "6 Subjects (3 sciences) + 1 AP",                                   // Option 4
  "4 Subjects (3 sciences) + 1 AP + ACT1",                            // Option 5
  "4 Subjects + 2 APs (min 3 sciences total)",                        // Option 6
  "2 Subjects + 3 APs (2 sciences)",                                  // Option 7
  "2 Subjects + 2 APs (2 sciences) + ACT1",                           // Option 8
  "3 APs (2 sciences) + ACT1",                                        // Option 9
  "6 Subjects (3 sciences) + School (Grades 10, 11, 12)",             // Option 10
  "3 APs (2 sciences) + School (Grades 10, 11, 12)",                  // Option 11
  "2 APs (2 sciences) + 2 Subjects + School (Grades 10, 11, 12)",     // Option 12
  "1 AP + 4 Subjects (3 sciences) + School (Grades 10, 11, 12)",      // Option 13
  "2 APs (2 sciences) + ACT1 + School (Grades 10, 11, 12)",           // Option 14
  "1 AP (1 science) + 2 Subjects + ACT1 + School (Grades 10, 11, 12)",// Option 15
  "ACT1 + 4 Subjects (3 sciences) + School (Grades 10, 11, 12)"       // Option 16
];

// Score Data - Mapping scores to values
const ScoreData = {
    // SAT Subject Scores (based on ranges)
    SAT: [
        { range: "450-470", equivalency: 65 },
        { range: "480-500", equivalency: 70 },
        { range: "510-530", equivalency: 73 },
        { range: "540-560", equivalency: 77 },
        { range: "570-590", equivalency: 80 },
        { range: "600-620", equivalency: 83 },
        { range: "630-650", equivalency: 86 },
        { range: "660-680", equivalency: 90 },
        { range: "690-710", equivalency: 93 },
        { range: "720-740", equivalency: 95 },
        { range: "750-770", equivalency: 98 },
        { range: "780-800", equivalency: 100 }
    ],
    
    // SAT1 or EST1 Scores (based on ranges)
    SAT1_OR_EST1: [
        { range: "1600-1550", equivalency: 100 },
        { range: "1540-1530", equivalency: 99 },
        { range: "1520-1510", equivalency: 98 },
        { range: "1500-1490", equivalency: 97 },
        { range: "1480-1470", equivalency: 96 },
        { range: "1460-1450", equivalency: 95 },
        { range: "1440-1430", equivalency: 94 },
        { range: "1420-1410", equivalency: 93 },
        { range: "1400-1390", equivalency: 92 },
        { range: "1380-1370", equivalency: 91 },
        { range: "1360-1350", equivalency: 90 },
        { range: "1340-1330", equivalency: 89 },
        { range: "1320-1310", equivalency: 88 },
        { range: "1300-1290", equivalency: 87 },
        { range: "1280-1270", equivalency: 86 },
        { range: "1260-1250", equivalency: 85 },
        { range: "1240-1230", equivalency: 84 },
        { range: "1220-1210", equivalency: 83 },
        { range: "1200-1190", equivalency: 82 },
        { range: "1180-1170", equivalency: 81 },
        { range: "1160-1150", equivalency: 80 },
        { range: "1140-1130", equivalency: 79 },
        { range: "1120-1110", equivalency: 78 },
        { range: "1100-1090", equivalency: 77 },
        { range: "1080-1070", equivalency: 76 },
        { range: "1060-1050", equivalency: 75 }
    ],
    
    // AP Scores
    AP: [
        { score: 2, equivalency: 50 },
        { score: 3, equivalency: 86 },
        { score: 4, equivalency: 93 },
        { score: 5, equivalency: 100 }
    ],
    
    // ACT1 Scores
    ACT1: [
        { score: 16, equivalency: 64 },
        { score: 17, equivalency: 67 },
        { score: 18, equivalency: 70 },
        { score: 19, equivalency: 73 },
        { score: 20, equivalency: 76 },
        { score: 21, equivalency: 79 },
        { score: 22, equivalency: 82 },
        { score: 23, equivalency: 84 },
        { score: 24, equivalency: 86 },
        { score: 25, equivalency: 88 },
        { score: 26, equivalency: 90 },
        { score: 27, equivalency: 91 },
        { score: 28, equivalency: 92 },
        { score: 29, equivalency: 93 },
        { score: 30, equivalency: 94 },
        { score: 31, equivalency: 95 },
        { score: 32, equivalency: 96 },
        { score: 33, equivalency: 97 },
        { score: 34, equivalency: 98 },
        { score: 35, equivalency: 99 },
        { score: 36, equivalency: 100 }
    ],
    
    // Arabic Scores
    Arabic: [
        { score: "E", equivalency: 55 },
        { score: "D", equivalency: 65 },
        { score: "C", equivalency: 75 },
        { score: "B", equivalency: 85 },
        { score: "A", equivalency: 95 },
        { score: "A*", equivalency: 100 }
    ],
    
    // For backward compatibility with the rest of the code
    // These will need to be updated to use the new format
    EST: {
        800: 100, 790: 99, 780: 98, 770: 97, 760: 96, 750: 95, 740: 94, 730: 93, 720: 92, 710: 91,
        700: 90, 690: 89, 680: 88, 670: 87, 660: 86, 650: 85, 640: 84, 630: 83, 620: 82, 610: 81,
        600: 80, 590: 79, 580: 78, 570: 77, 560: 76, 550: 75, 540: 74, 530: 73, 520: 72, 510: 71,
        500: 70, 490: 69, 480: 68, 470: 67, 460: 66, 450: 65, 440: 64, 430: 63, 420: 62, 410: 61,
        400: 60, 390: 59, 380: 58, 370: 57, 360: 56, 350: 55, 340: 54, 330: 53, 320: 52, 310: 51,
        300: 50, 290: 49, 280: 48, 270: 47, 260: 46, 250: 45, 240: 44, 230: 43, 220: 42, 210: 41,
        200: 40
    },
    // Legacy SAT1 format for backward compatibility
    SAT1: {
        1600: 100, 1590: 99.5, 1580: 99, 1570: 98.5, 1560: 98, 1550: 97.5, 1540: 97, 1530: 96.5, 1520: 96, 1510: 95.5,
        1500: 95, 1490: 94.5, 1480: 94, 1470: 93.5, 1460: 93, 1450: 92.5, 1440: 92, 1430: 91.5, 1420: 91, 1410: 90.5,
        1400: 90, 1390: 89.5, 1380: 89, 1370: 88.5, 1360: 88, 1350: 87.5, 1340: 87, 1330: 86.5, 1320: 86, 1310: 85.5,
        1300: 85, 1290: 84.5, 1280: 84, 1270: 83.5, 1260: 83, 1250: 82.5, 1240: 82, 1230: 81.5, 1220: 81, 1210: 80.5,
        1200: 80, 1190: 79.5, 1180: 79, 1170: 78.5, 1160: 78, 1150: 77.5, 1140: 77, 1130: 76.5, 1120: 76, 1110: 75.5,
        1100: 75, 1090: 74.5, 1080: 74, 1070: 73.5, 1060: 73, 1050: 72.5, 1040: 72, 1030: 71.5, 1020: 71, 1010: 70.5,
        1000: 70, 990: 69.5, 980: 69, 970: 68.5, 960: 68, 950: 67.5, 940: 67, 930: 66.5, 920: 66, 910: 65.5,
        900: 65, 890: 64.5, 880: 64, 870: 63.5, 860: 63, 850: 62.5, 840: 62, 830: 61.5, 820: 61, 810: 60.5,
        800: 60, 790: 59.5, 780: 59, 770: 58.5, 760: 58, 750: 57.5, 740: 57, 730: 56.5, 720: 56, 710: 55.5,
        700: 55, 690: 54.5, 680: 54, 670: 53.5, 660: 53, 650: 52.5, 640: 52, 630: 51.5, 620: 51, 610: 50.5,
        600: 50, 590: 49.5, 580: 49, 570: 48.5, 560: 48, 550: 47.5, 540: 47, 530: 46.5, 520: 46, 510: 45.5,
        500: 45, 490: 44.5, 480: 44, 470: 43.5, 460: 43, 450: 42.5, 440: 42, 430: 41.5, 420: 41, 410: 40.5,
        400: 40
    },
    // ACT format updated to match ACT1 (16-36 only)
    ACT: {
        36: 100, 35: 99, 34: 98, 33: 97, 32: 96, 31: 95, 30: 94, 29: 93, 28: 92, 27: 91,
        26: 90, 25: 88, 24: 86, 23: 84, 22: 82, 21: 79, 20: 76, 19: 73, 18: 70, 17: 67,
        16: 64
    },
    // Legacy MOE format for backward compatibility
    MOE: {
        100: 100, 99: 99, 98: 98, 97: 97, 96: 96, 95: 95, 94: 94, 93: 93, 92: 92, 91: 91,
        90: 90, 89: 89, 88: 88, 87: 87, 86: 86, 85: 85, 84: 84, 83: 83, 82: 82, 81: 81,
        80: 80, 79: 79, 78: 78, 77: 77, 76: 76, 75: 75, 74: 74, 73: 73, 72: 72, 71: 71,
        70: 70, 69: 69, 68: 68, 67: 67, 66: 66, 65: 65, 64: 64, 63: 63, 62: 62, 61: 61,
        60: 60, 59: 59, 58: 58, 57: 57, 56: 56, 55: 55, 54: 54, 53: 53, 52: 52, 51: 51,
        50: 50, 49: 49, 48: 48, 47: 47, 46: 46, 45: 45, 44: 44, 43: 43, 42: 42, 41: 41,
        40: 40
    }
};

// Equations - 16 predefined equations
const Equations = [
    // Equation 0: 4 APs (2 sciences)
    (AP1, AP2, AP3, AP4) => {
        return (AP1 + AP2 + AP3 + AP4) / 4;
    },
    
    // Equation 1: 8 Subjects (3 sciences)
    (Subject1, Subject2, Subject3, Subject4, Subject5, Subject6, Subject7, Subject8) => {
        return (Subject1 + Subject2 + Subject3 + Subject4 + Subject5 + Subject6 + Subject7 + Subject8) / 8;
    },
    
    // Equation 2: 6 Subjects (3 sciences) + ACT1
    (ACT1, Subject1, Subject2, Subject3, Subject4, Subject5, Subject6) => {
        return (ACT1 * 0.25) + ((Subject1 + Subject2 + Subject3 + Subject4 + Subject5 + Subject6) / 6) * 0.75;
    },
    
    // Equation 3: 6 Subjects (3 sciences) + 1 AP
    (AP1, Subject1, Subject2, Subject3, Subject4, Subject5, Subject6) => {
        return (AP1 * 0.25) + ((Subject1 + Subject2 + Subject3 + Subject4 + Subject5 + Subject6) / 6) * 0.75;
    },
    
    // Equation 4: 4 Subjects (3 sciences) + 1 AP + ACT1
    (AP1, ACT1, Subject1, Subject2, Subject3, Subject4) => {
        return (AP1 * 0.25) + (ACT1 * 0.25) + ((Subject1 + Subject2 + Subject3 + Subject4) / 4) * 0.5;
    },
    
    // Equation 5: 4 Subjects + 2 APs (min 3 sciences total)
    (Subject1, Subject2, Subject3, Subject4, AP1, AP2) => {
        return ((Subject1 + Subject2 + Subject3 + Subject4) / 4) * 0.5 + (AP1 * 0.25) + (AP2 * 0.25);
    },
    
    // Equation 6: 2 Subjects + 3 APs (2 sciences)
    (Subject1, Subject2, AP1, AP2, AP3) => {
        return ((Subject1 + Subject2) / 2) * 0.25 + ((AP1 + AP2 + AP3) / 3) * 0.75;
    },
    
    // Equation 7: 2 Subjects + 2 APs (2 sciences) + ACT1
    (Subject1, Subject2, AP1, AP2, ACT1) => {
        return ((Subject1 + Subject2) / 2) * 0.25 + ((AP1 + AP2) / 2) * 0.5 + (ACT1 * 0.25);
    },
    
    // Equation 8: 3 APs (2 sciences) + ACT1
    (AP1, AP2, AP3, ACT1) => {
        return ((AP1 + AP2 + AP3) / 3) * 0.75 + (ACT1 * 0.25);
    },
    
    // Equation 9: 6 Subjects (3 sciences) + School (Grades 10, 11, 12)
    (Subject1, Subject2, Subject3, Subject4, Subject5, Subject6, Grade10GPA, Grade11GPA, Grade12GPA) => {
        return ((Subject1 + Subject2 + Subject3 + Subject4 + Subject5 + Subject6) / 6) * 0.75 + ((Grade10GPA + Grade11GPA + Grade12GPA) / 3) * 0.25;
    },
    
    // Equation 10: 3 APs (2 sciences) + School (Grades 10, 11, 12)
    (AP1, AP2, AP3, Grade10GPA, Grade11GPA, Grade12GPA) => {
        return ((AP1 + AP2 + AP3) / 3) * 0.75 + ((Grade10GPA + Grade11GPA + Grade12GPA) / 3) * 0.25;
    },
    
    // Equation 11: 2 APs (2 sciences) + 2 Subjects + School (Grades 10, 11, 12)
    (AP1, AP2, Subject1, Subject2, Grade10GPA, Grade11GPA, Grade12GPA) => {
        return ((AP1 + AP2) / 2) * 0.5 + ((Subject1 + Subject2) / 2) * 0.25 + ((Grade10GPA + Grade11GPA + Grade12GPA) / 3) * 0.25;
    },
    
    // Equation 12: 1 AP + 4 Subjects (3 sciences) + School (Grades 10, 11, 12)
    (AP1, Subject1, Subject2, Subject3, Subject4, Grade10GPA, Grade11GPA, Grade12GPA) => {
        return (AP1 * 0.25) + ((Subject1 + Subject2 + Subject3 + Subject4) / 4) * 0.5 + ((Grade10GPA + Grade11GPA + Grade12GPA) / 3) * 0.25;
    },
    
    // Equation 13: 2 APs (2 sciences) + ACT1 + School (Grades 10, 11, 12)
    (AP1, AP2, ACT1, Grade10GPA, Grade11GPA, Grade12GPA) => {
        return ((AP1 + AP2) / 2) * 0.5 + (ACT1 * 0.25) + ((Grade10GPA + Grade11GPA + Grade12GPA) / 3) * 0.25;
    },
    
    // Equation 14: 1 AP (1 science) + 2 Subjects + ACT1 + School (Grades 10, 11, 12)
    (AP1, Subject1, Subject2, ACT1, Grade10GPA, Grade11GPA, Grade12GPA) => {
        return (AP1 * 0.25) + ((Subject1 + Subject2) / 2) * 0.25 + (ACT1 * 0.25) + ((Grade10GPA + Grade11GPA + Grade12GPA) / 3) * 0.25;
    },
    
    // Equation 15: ACT1 + 4 Subjects (3 sciences) + School (Grades 10, 11, 12)
    (ACT1, Subject1, Subject2, Subject3, Subject4, Grade10GPA, Grade11GPA, Grade12GPA) => {
        return (ACT1 * 0.25) + ((Subject1 + Subject2 + Subject3 + Subject4) / 4) * 0.5 + ((Grade10GPA + Grade11GPA + Grade12GPA) / 3) * 0.25;
    }
];

// DOM Elements
const equationSelectionSection = document.getElementById('equation-selection-section');
const equationSelection = document.getElementById('equation-selection');
const equationCardsContainer = document.getElementById('equation-cards');
const inputSection = document.getElementById('input-section');
const dynamicInputs = document.getElementById('dynamic-inputs');
const backButton = document.getElementById('back-button');
const calculateButton = document.getElementById('calculate-button');
const resultsSection = document.getElementById('results-section');
const resultsDisplay = document.getElementById('results-display');
const recalculateButton = document.getElementById('recalculate-button');
const mainMenuButton = document.getElementById('main-menu-button');
const mainConversionTables = document.getElementById('main-conversion-tables');

// Ensure all DOM elements are properly referenced
const ensureDomReferences = () => {
    // Make sure we have valid references to all required elements
    if (!inputSection || !dynamicInputs || !backButton || !calculateButton) {
        console.error('Missing required DOM elements');
        return false;
    }
    return true;
}

// Global variables
let selectedEquationIndex = -1;

// Function to detect if we're in an iframe (like Wix)
const detectIframe = () => {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true; // If we can't access parent, we're likely in an iframe
    }
};

// Apply iframe-specific styling
const applyIframeStyles = () => {
    if (detectIframe()) {
        document.body.classList.add('in-iframe');
        
        // Adjust container max-width for iframe
        const container = document.querySelector('.container');
        if (container) {
            container.style.maxWidth = '100%';
        }
        
        // Ensure all tables are properly sized
        const tableWrappers = document.querySelectorAll('.table-wrapper');
        tableWrappers.forEach(wrapper => {
            wrapper.style.maxWidth = '100%';
        });
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Verify all DOM elements are available
    if (!ensureDomReferences()) {
        console.error('Some DOM elements are missing. Check the HTML structure.');
        return;
    }
    
    // Apply iframe-specific styles if needed
    applyIframeStyles();
    
    // Create equation cards
    createEquationCards();
    
    // Set up event listeners
    backButton.addEventListener('click', goBackToEquations);
    calculateButton.addEventListener('click', handleCalculate);
    recalculateButton.addEventListener('click', goBackToInputs);
    mainMenuButton.addEventListener('click', goToMainMenu);
    
    console.log('Calculator initialized successfully');
});

// Create equation cards based on equation names
function createEquationCards() {
    equationCardsContainer.innerHTML = '';
    
    // Make sure we only create cards for the number of equations we have
    const numEquations = Equations.length;
    
    // Create cards for each equation
    for (let index = 0; index < numEquations; index++) {
        const card = document.createElement('div');
        card.className = 'equation-card';
        card.dataset.index = index;
        card.textContent = equationNames[index];
        
        card.addEventListener('click', () => selectEquation(index));
        
        equationCardsContainer.appendChild(card);
    }
}

// Handle equation selection
function selectEquation(index) {
    console.log('Selecting equation:', index);
    selectedEquationIndex = index;
    
    // Scroll to the top of the page first
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Highlight the selected card
    document.querySelectorAll('.equation-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    document.querySelector(`.equation-card[data-index="${index}"]`).classList.add('selected');
    
    // Generate input fields based on the selected equation
    generateInputFields(index);
    
    // Hide equation selection and show input section
    document.getElementById('equation-selection').classList.add('hidden');
    document.getElementById('main-conversion-tables').classList.add('hidden');
    document.getElementById('input-section').classList.remove('hidden');
}

// Generate input fields based on the equation parameters
function generateInputFields(equationIndex) {
    dynamicInputs.innerHTML = '';
    
    // Get the function parameters by converting the function to string and parsing
    const funcStr = Equations[equationIndex].toString();
    const paramStr = funcStr.substring(funcStr.indexOf('(') + 1, funcStr.indexOf(')'));
    const params = paramStr.split(',').map(p => p.trim()).filter(p => p);
    
    // Group parameters by type
    const paramGroups = {
        AP: [],
        ACT: [],
        Subject: [],
        Grade: []
    };
    
    params.forEach(param => {
        if (param.startsWith('AP')) {
            paramGroups.AP.push(param);
        } else if (param.startsWith('ACT')) {
            paramGroups.ACT.push(param);
        } else if (param.startsWith('Subject')) {
            paramGroups.Subject.push(param);
        } else if (param.startsWith('Grade')) {
            paramGroups.Grade.push(param);
        }
    });
    
    // Create input groups for each parameter type
    if (paramGroups.AP.length > 0) {
        createInputGroup('AP Scores', paramGroups.AP, 'AP');
    }
    
    if (paramGroups.ACT.length > 0) {
        createInputGroup('ACT Scores', paramGroups.ACT, 'ACT');
    }
    
    if (paramGroups.Subject.length > 0) {
        createInputGroup('Subject Scores', paramGroups.Subject, 'Subject');
    }
    
    if (paramGroups.Grade.length > 0) {
        createInputGroup('School Grades', paramGroups.Grade, 'Grade');
    }
}

// Create an input group with title and input fields
function createInputGroup(title, params, type) {
    const group = document.createElement('div');
    group.className = 'input-group';
    
    const heading = document.createElement('h3');
    heading.textContent = title;
    group.appendChild(heading);
    
    // Create rows with multiple fields per row
    const rows = [];
    let currentRow = document.createElement('div');
    currentRow.className = 'form-row';
    
    params.forEach((param, index) => {
        const field = createInputField(param, type);
        currentRow.appendChild(field);
        
        // Create a new row after every 2 fields
        if ((index + 1) % 2 === 0 && index < params.length - 1) {
            rows.push(currentRow);
            currentRow = document.createElement('div');
            currentRow.className = 'form-row';
        }
    });
    
    // Add the last row if it has any fields
    if (currentRow.children.length > 0) {
        rows.push(currentRow);
    }
    
    // Append all rows to the group
    rows.forEach(row => group.appendChild(row));
    
    // Add the group to the dynamic inputs container
    dynamicInputs.appendChild(group);
}

// Create an individual input field
function createInputField(param, type) {
    const field = document.createElement('div');
    field.className = 'form-field';
    
    const label = document.createElement('label');
    label.setAttribute('for', param);
    
    // Format the label text
    let labelText = param;
    if (type === 'AP') {
        const apNumber = param.replace('AP', '');
        labelText = `AP Score ${apNumber}`;
    } else if (type === 'ACT') {
        const actNumber = param.replace('ACT', '');
        labelText = `ACT Score ${actNumber}`;
    } else if (type === 'Subject') {
        const subjectNumber = param.replace('Subject', '');
        labelText = `Subject ${subjectNumber} (ACT/EST/SAT/Arabic/MOE)`;
    } else if (type === 'Grade') {
        if (param.includes('10')) {
            labelText = 'Grade 10';
        } else if (param.includes('11')) {
            labelText = 'Grade 11';
        } else if (param.includes('12')) {
            labelText = 'Grade 12';
        }
    }
    
    label.textContent = labelText;
    field.appendChild(label);
    
    // Create different input types based on the parameter type
    if (type === 'AP') {
        const select = document.createElement('select');
        select.id = param;
        select.name = param;
        select.className = 'form-select';
        
        // AP scores are 2-5 with equivalency values (50, 86, 93, 100)
        ScoreData.AP.forEach(item => {
            const option = document.createElement('option');
            option.value = item.equivalency;
            option.textContent = item.score;
            select.appendChild(option);
        });
        
        // Set default to the lowest score
        select.value = ScoreData.AP[0].equivalency;
        
        field.appendChild(select);
    } else if (type === 'ACT') {
        const select = document.createElement('select');
        select.id = param;
        select.name = param;
        select.className = 'form-select';
        
        // ACT scores are 16-36 based on the new data structure
        ScoreData.ACT1.forEach(item => {
            const option = document.createElement('option');
            option.value = item.equivalency;
            option.textContent = item.score;
            select.appendChild(option);
        });
        
        // Set default to the lowest score
        select.value = ScoreData.ACT1[0].equivalency;
        
        field.appendChild(select);
    } else if (type === 'Subject') {
        // Create a container for the subject type and score
        const subjectContainer = document.createElement('div');
        subjectContainer.className = 'subject-container';
        
        // Add a label for the test type
        const typeLabel = document.createElement('label');
        typeLabel.textContent = 'Test Type:';
        typeLabel.className = 'sub-label';
        subjectContainer.appendChild(typeLabel);
        
        // Subject type selector
        const typeSelect = document.createElement('select');
        typeSelect.id = `${param}Type`;
        typeSelect.className = 'subject-type form-select';
        typeSelect.style.marginBottom = '15px';
        
        // Test types in the original order with updated names
        const types = ['ACT', 'EST', 'SAT', 'Arabic', 'MOE'];
        const displayNames = ['ACT', 'EST', 'SAT', 'Arabic', 'MOE'];
        
        types.forEach((type, index) => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = displayNames[index];
            typeSelect.appendChild(option);
        });
        
        // Add a label for the score
        const scoreLabel = document.createElement('label');
        scoreLabel.textContent = 'Score:';
        scoreLabel.className = 'sub-label';
        
        // Score input container
        const scoreContainer = document.createElement('div');
        scoreContainer.id = `${param}ScoreContainer`;
        
        // Initial score input based on default type (ACT)
        updateScoreInput(param, 'ACT', scoreContainer);
        
        // Event listener for type change
        typeSelect.addEventListener('change', (e) => {
            updateScoreInput(param, e.target.value, scoreContainer);
        });
        
        subjectContainer.appendChild(typeSelect);
        subjectContainer.appendChild(scoreLabel);
        subjectContainer.appendChild(scoreContainer);
        field.appendChild(subjectContainer);
    } else if (type === 'Grade') {
        // For school grades, use a number input with min/max
        const input = document.createElement('input');
        input.type = 'number';
        input.id = param;
        input.name = param;
        input.className = 'form-input';
        input.min = 50;
        input.max = 100;
        input.step = 0.1;
        input.value = 50; // Default to lowest value
        
        field.appendChild(input);
    }
    
    return field;
}

// Update score input based on subject type
function updateScoreInput(param, type, container) {
    container.innerHTML = '';
    
    // For MOE, use a number input
    if (type === 'MOE') {
        const input = document.createElement('input');
        input.type = 'number';
        input.id = param;
        input.name = param;
        input.className = 'form-input';
        input.min = 50;
        input.max = 100;
        input.step = 1;
        input.value = 50; // Default to lowest value
        
        container.appendChild(input);
    } else if (type === 'Arabic') {
        // For Arabic, use a select with letter grades
        const select = document.createElement('select');
        select.id = param;
        select.name = param;
        select.className = 'form-select';
        
        // Use the Arabic array from ScoreData
        ScoreData.Arabic.forEach(item => {
            const option = document.createElement('option');
            option.value = item.equivalency;
            option.textContent = item.score; // This will be the letter grade (E, D, C, B, A, A*)
            select.appendChild(option);
        });
        
        // Set default to the lowest grade
        select.value = ScoreData.Arabic[0].equivalency;
        
        container.appendChild(select);
    } else if (type === 'ACT') {
        // For ACT, use the ACT1 scores (16-36) with their equivalency values
        const select = document.createElement('select');
        select.id = param;
        select.name = param;
        select.className = 'form-select';
        
        // Use ACT1 array from ScoreData for scores 16-36
        ScoreData.ACT1.forEach(item => {
            const option = document.createElement('option');
            option.value = item.equivalency;
            option.textContent = item.score;
            select.appendChild(option);
        });
        
        // Set default to the lowest score
        select.value = ScoreData.ACT1[0].equivalency;
        
        container.appendChild(select);
    } else if (type === 'SAT') {
        // For SAT, use the SAT subject scores with ranges (450-800)
        const select = document.createElement('select');
        select.id = param;
        select.name = param;
        select.className = 'form-select';
        
        // Use SAT array from ScoreData for ranges 450-800
        ScoreData.SAT.forEach(item => {
            const option = document.createElement('option');
            option.value = item.equivalency;
            option.textContent = item.range;
            select.appendChild(option);
        });
        
        // Set default to the lowest range
        select.value = ScoreData.SAT[0].equivalency;
        
        container.appendChild(select);

    } else if (type === 'EST') {
        // For EST, use the SAT1_OR_EST1 scores with ranges (1050-1600)
        const select = document.createElement('select');
        select.id = param;
        select.name = param;
        select.className = 'form-select';
        
        // Use SAT1_OR_EST1 array from ScoreData for ranges 1050-1600
        ScoreData.SAT1_OR_EST1.forEach(item => {
            const option = document.createElement('option');
            option.value = item.equivalency;
            option.textContent = item.range;
            select.appendChild(option);
        });
        
        // Set default to the lowest range
        select.value = ScoreData.SAT1_OR_EST1[0].equivalency;
        
        container.appendChild(select);
    } else {
        // Fallback for any legacy types
        const select = document.createElement('select');
        select.id = param;
        select.name = param;
        select.className = 'form-select';
        
        // Get the score range based on type
        const scores = Object.keys(ScoreData[type]).map(Number).sort((a, b) => a - b);
        
        scores.forEach(score => {
            const option = document.createElement('option');
            option.value = ScoreData[type][score];
            option.textContent = score;
            select.appendChild(option);
        });
        
        // Set default to the lowest score
        select.value = scores[scores.length - 1];
        
        container.appendChild(select);
    }
}

// Handle calculation button click
function handleCalculate() {
    if (selectedEquationIndex === -1) return;
    
    // Validate all inputs before calculating
    if (!validateAllInputs()) {
        // Show a notification to the user that they need to fill all required fields
        const notification = document.createElement('div');
        notification.className = 'validation-notification';
        notification.innerHTML = '<i class="fas fa-exclamation-circle"></i> Please fill in all required fields correctly before calculating.';
        
        // Add the notification to the page
        const container = document.querySelector('#input-section');
        
        // Remove any existing notification
        const existingNotification = container.querySelector('.validation-notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Insert the notification at the top of the input section
        container.insertBefore(notification, container.firstChild);
        
        // Auto-dismiss the notification after 5 seconds
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 5000);
        
        return; // Stop if validation fails
    }
    
    const results = calculateResults();
    displayResults(results);
    
    // Show results section, hide input section
    inputSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
    
    // Scroll to the top of the page to ensure results are fully visible
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Validate all input fields
function validateAllInputs() {
    // Reset all previous validation styles
    document.querySelectorAll('.invalid-input').forEach(el => {
        el.classList.remove('invalid-input');
    });
    
    // Remove all empty bracket highlights
    document.querySelectorAll('.empty-brackets').forEach(el => {
        el.classList.remove('empty-brackets');
    });
    
    // Remove all error messages
    document.querySelectorAll('.error-message').forEach(el => {
        el.remove();
    });
    
    let allValid = true;
    
    // Check all input fields for empty values
    const allInputFields = document.querySelectorAll('input, select');
    allInputFields.forEach(field => {
        // Check if the field is empty
        if (field.value.trim() === '') {
            field.classList.add('invalid-input');
            allValid = false;
            
            // Show error message for empty field
            let errorMsg = document.createElement('div');
            errorMsg.className = 'error-message';
            errorMsg.textContent = 'This field is required';
            field.parentElement.appendChild(errorMsg);
        }
    });
    
    // Check all number inputs for Arabic, MOE, and Grade fields
    const numberInputs = document.querySelectorAll('input[type="number"]');
    
    numberInputs.forEach(input => {
        // Skip if we already marked it as invalid (empty)
        if (input.classList.contains('invalid-input')) {
            return;
        }
        
        const value = parseFloat(input.value);
        const min = parseFloat(input.min);
        const max = parseFloat(input.max);
        
        // Check if value is within range
        if (isNaN(value) || value < min || value > max) {
            input.classList.add('invalid-input');
            allValid = false;
            
            // Show error message
            let errorMsg = input.parentElement.querySelector('.error-message');
            if (!errorMsg) {
                errorMsg = document.createElement('div');
                errorMsg.className = 'error-message';
                input.parentElement.appendChild(errorMsg);
            }
            errorMsg.textContent = `Please enter a value between ${min} and ${max}`;
        }
    });
    
    // Check for empty brackets in the input fields
    const inputFields = document.querySelectorAll('input, select');
    inputFields.forEach(field => {
        // Skip if we already marked it as invalid
        if (field.classList.contains('invalid-input')) {
            return;
        }
        
        // Check if the field has a value
        const value = field.value.trim();
        
        // Find any brackets in the field value
        if (value.includes('[]') || value.includes('()') || value.includes('{}')) {
            // Highlight empty brackets
            field.classList.add('invalid-input');
            allValid = false;
            
            // Show error message for empty brackets
            let errorMsg = field.parentElement.querySelector('.error-message');
            if (!errorMsg) {
                errorMsg = document.createElement('div');
                errorMsg.className = 'error-message';
                field.parentElement.appendChild(errorMsg);
            }
            errorMsg.textContent = 'Empty brackets are not allowed';
            
            // Apply special styling to the text input to highlight the brackets
            highlightEmptyBrackets(field);
        }
    });
    
    // If validation failed, scroll to the first invalid input
    if (!allValid) {
        const firstInvalidInput = document.querySelector('.invalid-input');
        if (firstInvalidInput) {
            firstInvalidInput.focus();
            firstInvalidInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    
    return allValid;
}

// Function to highlight empty brackets in a field
function highlightEmptyBrackets(field) {
    // If it's a text input, we can highlight the brackets
    if (field.tagName.toLowerCase() === 'input' && field.type === 'text') {
        const value = field.value;
        const bracketPatterns = ['\\[\\]', '\\(\\)', '\\{\\}'];
        
        // Create a temporary element to hold the formatted content
        const tempDiv = document.createElement('div');
        let formattedContent = value;
        
        // Replace each empty bracket pattern with a highlighted version
        bracketPatterns.forEach(pattern => {
            const regex = new RegExp(pattern, 'g');
            formattedContent = formattedContent.replace(regex, match => 
                `<span class="empty-brackets">${match}</span>`);
        });
        
        tempDiv.innerHTML = formattedContent;
        
        // For direct text inputs, we can't replace with HTML, so we just mark the field
        field.dataset.containsEmptyBrackets = 'true';
    }
}

// Calculate results based on the selected equation and input values
function calculateResults() {
    const funcStr = Equations[selectedEquationIndex].toString();
    const paramStr = funcStr.substring(funcStr.indexOf('(') + 1, funcStr.indexOf(')'));
    const params = paramStr.split(',').map(p => p.trim()).filter(p => p);
    
    // Get values for each parameter
    const values = params.map(param => {
        const element = document.getElementById(param);
        return parseFloat(element.value);
    });
    
    // Apply the equation function with the values
    const result = Equations[selectedEquationIndex](...values);
    
    return {
        equationName: equationNames[selectedEquationIndex],
        equationIndex: selectedEquationIndex,
        parameters: params.map((param, index) => ({
            name: param,
            value: values[index]
        })),
        result: result
    };
}

// Display the calculation results
function displayResults(results) {
    resultsDisplay.innerHTML = '';
    
    // Create header
    const header = document.createElement('h3');
    header.textContent = 'Equivalency Score';
    resultsDisplay.appendChild(header);
    
    // Create result display
    const resultScore = document.createElement('div');
    resultScore.className = 'result-score';
    resultScore.innerHTML = `<span class="score">${results.result.toFixed(2)}%</span>`;
    resultsDisplay.appendChild(resultScore);
    
    // Create details section
    const details = document.createElement('div');
    details.className = 'result-details';
    
    // Equation used
    const equationUsed = document.createElement('p');
    equationUsed.innerHTML = `<strong>Equation Used:</strong> ${results.equationName}`;
    details.appendChild(equationUsed);
    
    // Parameters
    const paramsList = document.createElement('ul');
    results.parameters.forEach(param => {
        const item = document.createElement('li');
        item.textContent = `${param.name}: ${param.value}%`;
        paramsList.appendChild(item);
    });
    
    details.appendChild(paramsList);
    resultsDisplay.appendChild(details);
}

// Go back to equations
function goBackToEquations() {
    // Hide input section
    inputSection.classList.add('hidden');
    
    // Show equation selection and main conversion tables
    equationSelection.classList.remove('hidden');
    mainConversionTables.classList.remove('hidden');
    
    // Reset selected equation
    selectedEquationIndex = -1;
    
    // Clear any selected equation card
    document.querySelectorAll('.equation-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Clear dynamic inputs
    dynamicInputs.innerHTML = '';
    
    // Scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Go to main menu from results
function goToMainMenu() {
    // Hide results section
    resultsSection.classList.add('hidden');
    
    // Show equation selection and main conversion tables
    equationSelection.classList.remove('hidden');
    mainConversionTables.classList.remove('hidden');
    
    // Reset selected equation
    selectedEquationIndex = -1;
    
    // Clear any selected equation card
    document.querySelectorAll('.equation-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Clear dynamic inputs
    dynamicInputs.innerHTML = '';
    
    // Scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Go back to inputs from results
function goBackToInputs() {
    // Hide results section
    resultsSection.classList.add('hidden');
    
    // Show input section
    inputSection.classList.remove('hidden');
    
    // Scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Additional scroll for Safari and other browsers
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
