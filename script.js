const wyrQuestions = [
    "Would you rather [Placeholder Option A] or [Placeholder Option B]?",
    "Would you rather [Insert First Scenario Here] or [Insert Second Scenario Here]?",
    "Would you rather [Decision Point 1] or [Decision Point 2]?",
    "Would you rather have [Benefit X] or [Benefit Y]?",
    "Would you rather experience [Challenge A] or [Challenge B]?",
    "Would you rather live with [Condition 1] or [Condition 2]?",
    "Would you rather possess [Power 1] or [Power 2]?",
    "Would you rather have [Companion Type 1] or [Companion Type 2]?",
    "Would you rather [Transform A] or [Transform B]?",
    "Would you rather have [Unlimited Resource 1] or [Unlimited Resource 2]?",
    "Would you rather possess [Supernatural Ability 1] or [Supernatural Ability 2]?",
    "Would you rather have [Personal Service A] or [Personal Service B]?",
    "Would you rather always be [Time State 1] or always be [Time State 2]?",
    "Would you rather never [Action 1] or only [Action 2] for the rest of your life?",
    "Would you rather have [Perpetual Item 1] or [Perpetual Item 2]?",
    "Would you rather communicate with [Entity Type 1] or comprehend [Language Type 2]?",
    "Would you rather live without [Modern Convenience 1] or live without [Essential Utility 2]?",
    "Would you rather have a [Life Control Feature 1] or a [Life Control Feature 2]?",
    "Would you rather be the greatest in [Art Form 1] or the greatest in [Art Form 2]?",
    "Would you rather lose [Memory Set A] or lose [Memory Set B]?",
    "Would you rather acquire [Societal Status] or possess [Ultimate Attribute]?",
    "Would you rather have [Physical Enhancement 1] or [Physical Enhancement 2]?",
    "Would you rather endure [Unpleasant Routine 1] or tolerate [Unsanitary Habit 2]?",
    "Would you rather manipulate [Element 1] or manipulate [Element 2]?",
    "Would you rather reside in [Spooky Setting A] with [Presence 1] or in [Normal Setting B] with [Spooky Location 2]?",
    "Would you rather perceive [Mental Ability A] or influence [Mental Ability B]?",
    "Would you rather persistently face [Frustration Type 1] or consistently experience [Frustration Type 2]?",
    "Would you rather have [Body Condition 1] or have [Body Condition 2]?",
    "Would you rather achieve [Post-mortem Recognition] or experience [Living Anonymity]?",
    "Would you rather perfectly imitate [Vocal Type] or perfectly replicate [Musical Talent]?",
    "Would you rather only use [Volume Level 1] or only use [Volume Level 2]?",
    "Would you rather adopt [Mythical Creature 1] or adopt [Mythical Creature 2]?",
    "Would you rather inhabit [Dwelling Type 1] or inhabit [Dwelling Type 2]?",
    "Would you rather lose the capacity for [Sense/Function 1] or lose the capacity for [Sense/Function 2]?"
];

let currentWyrIndex = 0;

function setWyrNavigation(){
    const wyrQuestionDisplay = document.getElementById('wyr-question-text');
    const prevWyrBtn = document.getElementById('prev-wyr-btn');
    const nextWyrBtn = document.getElementById('next-wyr-btn');

    function updateWyrDisplay() {
        if (wyrQuestionDisplay) {
            wyrQuestionDisplay.textContent = wyrQuestions[currentWyrIndex];
        }
        setWrySteps()
        if(currentWyrIndex === 0){
            if (prevWyrBtn) {
                prevWyrBtn.disabled = true;
                prevWyrBtn.classList.remove('bg-blue-700', 'hover:bg-blue-800', 'dark:bg-blue-600', 'dark:hover:bg-blue-700', 'focus:outline-none', 'dark:focus:ring-blue-800', );
                prevWyrBtn.classList.add('bg-gray-600', 'cursor-not-allowed', 'dark:bg-gray-700');
            }
        } else {
            if (prevWyrBtn) {
                prevWyrBtn.disabled = false;
                prevWyrBtn.classList.add('bg-blue-700', 'hover:bg-blue-800', 'dark:bg-blue-600', 'dark:hover:bg-blue-700', 'focus:outline-none', 'dark:focus:ring-blue-800', );
                prevWyrBtn.classList.remove('bg-gray-600', 'cursor-not-allowed', 'dark:bg-gray-700');
            }
        }

        if (currentWyrIndex === wyrQuestions.length - 1) {
            if (nextWyrBtn) {
                nextWyrBtn.disabled = true;
                nextWyrBtn.classList.remove('bg-blue-700', 'hover:bg-blue-800', 'dark:bg-blue-600', 'dark:hover:bg-blue-700', 'focus:outline-none', 'dark:focus:ring-blue-800', );
                nextWyrBtn.classList.add('bg-gray-600', 'cursor-not-allowed', 'dark:bg-gray-700');
            }
        } else {
            if (nextWyrBtn) {
                nextWyrBtn.disabled = false;
                nextWyrBtn.classList.add('bg-blue-700', 'hover:bg-blue-800', 'dark:bg-blue-600', 'dark:hover:bg-blue-700', 'focus:outline-none', 'dark:focus:ring-blue-800', );
                nextWyrBtn.classList.remove('bg-gray-600', 'cursor-not-allowed', 'dark:bg-gray-700');
            }
        }
    }

    if (prevWyrBtn) {
        prevWyrBtn.addEventListener('click', () => {
            currentWyrIndex--;
            updateWyrDisplay();
        });
    }

    if (nextWyrBtn) {
        nextWyrBtn.addEventListener('click', () => {
            currentWyrIndex++;
            updateWyrDisplay();
        });
    }

    updateWyrDisplay();
}

function addWyrSteps(){
    const stepsList = document.getElementById('wyr-steps');

    for (let i = 0; i < wyrQuestions.length; i++) {
        const newStepLi = document.createElement('li');
        newStepLi.id = `wyr-${i}`;
        newStepLi.classList.add('step');
        newStepLi.classList.add('step-minimal');
        if(i === 0) {
            newStepLi.classList.add('step-primary');
        }
        newStepLi.setAttribute('data-content', String(i + 1));
        stepsList.appendChild(newStepLi);
    }
}

function setWrySteps(){
    const stepsList = document.getElementById('wyr-steps');
    const wyrSteps = stepsList.querySelectorAll('.step');

    wyrSteps.forEach((step, index) => {
        if (index < currentWyrIndex + 1) {
            step.classList.add('step-primary');
        } else {
            step.classList.remove('step-primary');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setWyrNavigation();
    addWyrSteps();
});

