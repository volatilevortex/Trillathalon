document.addEventListener('DOMContentLoaded', () => {
    const wyrQuestions = [
        "Would you rather fight 100 duck-sized horses or 1 horse-sized duck?",
        "Would you rather have unlimited bacon but no games, or unlimited games but no games?",
        "Would you rather be able to talk to animals or speak all human languages?",
        "Would you rather have a rewind button or a pause button in your life?",
        "Would you rather have perpetually sticky hands or perpetually wet feet?",
        "Would you rather live without the internet or live without air conditioning?",
        "Would you rather be able to fly or be invisible?",
        "Would you rather have a pet dragon or a pet unicorn?"
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
