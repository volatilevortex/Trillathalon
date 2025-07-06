document.addEventListener('DOMContentLoaded', () => {
    const wyrQuestions = [
        "Would you rather [Placeholder Option A] or [Placeholder Option B]?",
        "Would you rather [Insert First Scenario Here] or [Insert Second Scenario Here]?",
        "Would you rather [Decision Point 1] or [Decision Point 2]?",
        "Would you rather have [Benefit X] or [Benefit Y]?",
        "Would you rather experience [Challenge A] or [Challenge B]?",
        "Would you rather live with [Condition 1] or [Condition 2]?",
        "Would you rather possess [Power 1] or [Power 2]?",
        "Would you rather have [Companion Type 1] or [Companion Type 2]?"
    ];

    let currentWyrIndex = 0;

    const wyrQuestionDisplay = document.getElementById('wyr-question-text');
    const prevWyrBtn = document.getElementById('prev-wyr-btn');
    const nextWyrBtn = document.getElementById('next-wyr-btn');

    function updateWyrDisplay() {
        if (wyrQuestionDisplay) {
            wyrQuestionDisplay.textContent = wyrQuestions[currentWyrIndex];
        }
        if(currentWyrIndex === 0){
            if (prevWyrBtn) {
                prevWyrBtn.disabled = true;
                prevWyrBtn.hidden = true;
            }
        } else {
            if (prevWyrBtn) {
                prevWyrBtn.disabled = false;
                prevWyrBtn.hidden = false;
            }
        }

        if (currentWyrIndex === wyrQuestions.length - 1) {
            if (nextWyrBtn) {
                nextWyrBtn.disabled = true;
                nextWyrBtn.hidden = true;
            }
        } else {
            if (nextWyrBtn) {
                nextWyrBtn.disabled = false;
                nextWyrBtn.hidden = false;
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
});
