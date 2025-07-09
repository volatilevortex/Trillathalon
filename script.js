const wyrQuestions = [
    ['Username 1', 'Placeholder Option A', 'Placeholder Option B'],
    ['Username 2', 'Insert First very veyr very very very very very very very long Scenario Here', 'Insert Second Scenario Here'],
    ['Username 3', 'Decision Point 1', 'Decision Point 2'],
    ['Username 4', 'Benefit X', 'Benefit Y'],
    ['Username 5', 'Challenge A', 'Challenge B'],
    ['Username 6', 'Condition 1', 'Condition 2'],
    ['Username 7', 'Power 1', 'Power 2'],
    ['Username 8', 'Companion Type 1', 'Companion Type 2'],
    ['Username 9', 'Transform A', 'Transform B'],
    ['Username 10', 'Unlimited Resource 1', 'Unlimited Resource 2'],
    ['Username 11', 'Supernatural Ability 1', 'Supernatural Ability 2'],
    ['Username 12', 'Personal Service A', 'Personal Service B'],
    ['Username 13', 'Time State 1', 'Time State 2'],
    ['Username 14', 'Never Action 1', 'Only Action 2'],
    ['Username 15', 'Perpetual Item 1', 'Perpetual Item 2'],
    ['Username 16', 'Entity Type 1', 'Language Type 2'],
    ['Username 17', 'Modern Convenience 1', 'Essential Utility 2'],
    ['Username 18', 'Life Control Feature 1', 'Life Control Feature 2'],
    ['Username 19', 'Greatest in Art Form 1', 'Greatest in Art Form 2'],
    ['Username 20', 'Lose Memory Set A', 'Lose Memory Set B'],
    ['Username 21', 'Acquired Societal Status', 'Possess Ultimate Attribute'],
    ['Username 22', 'Physical Enhancement 1', 'Physical Enhancement 2'],
    ['Username 23', 'Unpleasant Routine 1', 'Unsanitary Habit 2'],
    ['Username 24', 'Manipulate Element 1', 'Manipulate Element 2'],
    ['Username 25', 'Spooky Setting A with Presence 1', 'Normal Setting B with Spooky Location 2'],
    ['Username 26', 'Perceive Mental Ability A', 'Influence Mental Ability B'],
    ['Username 27', 'Persistently Face Frustration Type 1', 'Consistently Experience Frustration Type 2'],
    ['Username 28', 'Body Condition 1', 'Body Condition 2'],
    ['Username 29', 'Post‑mortem Recognition', 'Living Anonymity'],
    ['Username 30', 'Perfectly Imitate Vocal Type', 'Perfectly Replicate Musical Talent'],
    ['Username 31', 'Only Use Volume Level 1', 'Only Use Volume Level 2'],
    ['Username 32', 'Adopt Mythical Creature 1', 'Adopt Mythical Creature 2'],
    ['Username 33', 'Inhabit Dwelling Type 1', 'Inhabit Dwelling Type 2'],
    ['Username 34', 'Lose the capacity for Sense/Function 1', 'Lose the capacity for Sense/Function 2']
];

const wyrExtraQuestions = [
    ['Username 35', 'Extra 1', 'Extra 2'],
    ['Username 36', 'Extra 1', 'Extra 2'],
    ['Username 37', 'Fin 1', 'Fin 2']
];

let currentWyrIndex = 0;

const TLArray = ["Test1", "test2", "test3"];
const TLExtraArray = ["testExtra", "testExtra 2"];
let currentTLIndex = 0;

function generateRandomString() {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    let length = Math.floor((Math.random()+0.6)*10);
    for (let i = 0; i < length; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}

function setWyrNavigation(){
    const wyrCredit = document.getElementById('wyr-credit');
    const blurryCredit = document.getElementById('blurry-credit');
    const wyrQuestionDisplay = document.getElementById('wyr-question-text');
    const prevWyrBtn = document.getElementById('prev-wyr-btn');
    const nextWyrBtn = document.getElementById('next-wyr-btn');

    if(wyrCredit){
        wyrCredit.addEventListener('click', () => {
            if(currentWyrIndex < wyrQuestions.length){
                blurryCredit.textContent=wyrQuestions[currentWyrIndex][0];
            } else {
                blurryCredit.textContent=wyrExtraQuestions[currentWyrIndex-wyrQuestions.length][0];
            }
            blurryCredit.classList.remove("blur");
        });
    }

    if (prevWyrBtn) {
        prevWyrBtn.addEventListener('click', () => {
            if(currentWyrIndex <= 0) return;
            currentWyrIndex--;
            updateWyrDisplay();
        });
    }

    if (nextWyrBtn) {
        nextWyrBtn.addEventListener('click', () => {
            if(currentWyrIndex >= wyrQuestions.length + wyrExtraQuestions.length) return;
            currentWyrIndex++;
            updateWyrDisplay();
        });
    }

    function updateWyrDisplay() {
        blurryCredit.textContent=generateRandomString();
        blurryCredit.classList.add("blur");
        wyrCredit.classList.add('!bg-gray-500', '!dark:bg-gray-700');
        wyrCredit.classList.remove('!bg-pink-700', '!hover:bg-pink-800', '!dark:bg-pink-600', '!dark:hover:bg-pink-700', '!dark:focus:ring-pink-800');
        if (wyrQuestionDisplay) {
            if(currentWyrIndex < wyrQuestions.length){
                wyrQuestionDisplay.textContent = wyrQuestions[currentWyrIndex][1] + " or " + wyrQuestions[currentWyrIndex][2];
            } else {
                wyrQuestionDisplay.textContent = wyrExtraQuestions[currentWyrIndex-wyrQuestions.length][1] + " or " + wyrExtraQuestions[currentWyrIndex-wyrQuestions.length][2];
            }
        }
        setWryProgress()
        if(currentWyrIndex === 0){
            if (prevWyrBtn) {
                prevWyrBtn.classList.remove('!bg-pink-700', '!hover:bg-pink-800', '!dark:bg-pink-600', '!dark:hover:bg-pink-700', '!dark:focus:ring-pink-800');
                prevWyrBtn.classList.add('!bg-gray-500', '!cursor-not-allowed', '!dark:bg-gray-700');
            }
        } else {
            if (prevWyrBtn) {
                prevWyrBtn.disabled = false;
                prevWyrBtn.classList.add('!bg-pink-700', '!hover:bg-pink-800', '!dark:bg-pink-600', '!dark:hover:bg-pink-700', '!dark:focus:ring-pink-800');
                prevWyrBtn.classList.remove('!bg-gray-500', '!cursor-not-allowed', '!dark:bg-gray-700');
            }
        }

        if (currentWyrIndex === (wyrQuestions.length + wyrExtraQuestions.length) - 1) {
            if (nextWyrBtn) {
                nextWyrBtn.disabled = true;
                nextWyrBtn.classList.remove('!bg-pink-700', '!hover:bg-pink-800', '!dark:bg-pink-600', '!dark:hover:bg-pink-700', '!dark:focus:ring-pink-800');
                nextWyrBtn.classList.add('!bg-gray-500', '!cursor-not-allowed', '!dark:bg-gray-700');
            }
        } else {
            if (nextWyrBtn) {
                nextWyrBtn.disabled = false;
                nextWyrBtn.classList.add('!bg-pink-700', '!hover:bg-pink-800', '!dark:bg-pink-600', '!dark:hover:bg-pink-700', '!dark:focus:ring-pink-800');
                nextWyrBtn.classList.remove('!bg-gray-500', '!cursor-not-allowed', '!dark:bg-gray-700');
            }
        }
    }

    updateWyrDisplay();
}

function setWryProgress() {
    const progressBar = document.getElementById('wyr-progress');
    progressBar.setAttribute('value', String(currentWyrIndex/(wyrQuestions.length) * 100));
}


function setTLNavigation(){
    const TLDisplay = document.getElementById('tl-button');
    const prevTLBtn = document.getElementById('prev-tl-btn');
    const nextTLBtn = document.getElementById('next-tl-btn');

    if (prevTLBtn) {
        prevTLBtn.addEventListener('click', () => {
            if(currentTLIndex <= 0) return;
            currentTLIndex--;
            updateTLDisplay();
        });
    }

    if (nextTLBtn) {
        nextTLBtn.addEventListener('click', () => {
            if(currentTLIndex > TLArray.length + TLExtraArray.length) return;
            currentTLIndex++;
            updateTLDisplay();
        });
    }

    function updateTLDisplay(){
        if (TLDisplay) {
            if(currentTLIndex < TLArray.length){
                TLDisplay.textContent = TLArray[currentTLIndex];
                TLDisplay.setAttribute("href", "https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1")
            } else {
                TLDisplay.textContent = TLExtraArray[currentTLIndex-TLArray.length];
                TLDisplay.setAttribute("href", "https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1")
            }
        }
        setTLSteps()
        if(currentTLIndex === 0){
            if (prevTLBtn) {
                prevTLBtn.disabled = true;
                prevTLBtn.classList.remove('!bg-pink-700', '!hover:bg-pink-800', '!dark:bg-pink-600', '!dark:hover:bg-pink-700', '!dark:focus:ring-pink-800');
                prevTLBtn.classList.add('!bg-gray-500', '!cursor-not-allowed', '!dark:bg-gray-700');
            }
        } else {
            if (prevTLBtn) {
                prevTLBtn.disabled = false;
                prevTLBtn.classList.add('!bg-pink-700', '!hover:bg-pink-800', '!dark:bg-pink-600', '!dark:hover:bg-pink-700', '!dark:focus:ring-pink-800');
                prevTLBtn.classList.remove('!bg-gray-500', '!cursor-not-allowed', '!dark:bg-gray-700');
            }
        }

        if (currentTLIndex === (TLArray.length + TLExtraArray.length) - 1) {
            if (nextTLBtn) {
                nextTLBtn.disabled = true;
                nextTLBtn.classList.remove('!bg-pink-700', '!hover:bg-pink-800', '!dark:bg-pink-600', '!dark:hover:bg-pink-700', '!dark:focus:ring-pink-800');
                nextTLBtn.classList.add('!bg-gray-500', '!cursor-not-allowed', '!dark:bg-gray-700');
            }
        } else {
            if (nextTLBtn) {
                nextTLBtn.disabled = false;
                nextTLBtn.classList.add('!bg-pink-700', '!hover:bg-pink-800', '!dark:bg-pink-600', '!dark:hover:bg-pink-700', '!dark:focus:ring-pink-800');
                nextTLBtn.classList.remove('!bg-gray-500', '!cursor-not-allowed', '!dark:bg-gray-700');
            }
        }
    }

    updateTLDisplay();
}
function addTLSteps(){
    const stepsList = document.getElementById('tl-steps');

    for (let i = 0; i < TLArray.length; i++) {
        const newStepLi = document.createElement('li');
        newStepLi.id = `tl-${i}`;
        newStepLi.classList.add('step');
        if(i === 0) {
            newStepLi.classList.add('step-primary');
        }
        newStepLi.setAttribute('data-content', String(i + 1));
        stepsList.appendChild(newStepLi);
    }

    const newStepLi = document.createElement('li');
    newStepLi.id = `tl-q`;
    newStepLi.classList.add('step');
    newStepLi.setAttribute('data-content', '?');
    stepsList.appendChild(newStepLi);
    setTLSteps()
}

function setTLSteps(){
    const stepsList = document.getElementById('tl-steps');
    const tlSteps = stepsList.querySelectorAll('.step');

    tlSteps.forEach((step, index) => {
        if (index < currentTLIndex + 1) {
            step.classList.add('step-primary');
        } else {
            step.classList.remove('step-primary');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
    .steps.steps-primary .step::after {
      background-color: #374151 !important;
    }
    .steps.steps-primary .step {
      color: #fff !important;
      background-color: #374151 !important;
    }
  `;
    document.head.appendChild(style);
    setWyrNavigation();
    addTLSteps();
    setTLNavigation();
});

