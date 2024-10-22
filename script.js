const body = document.body;
const myAudio = document.getElementById("my-audio");
const question = document.getElementById('question');
const answerInput = document.getElementById('answer-input');
const verifyBtn = document.getElementById('verify-btn');
const result = document.getElementById('result');
const clue = document.getElementById('clue');
const ctrContainer = document.getElementById('show-center-container');
const botContainer = document.getElementById('show-bottom-container');
const themeBtn = document.getElementById('theme-button');
let countdownValue = 15;

verifyBtn.addEventListener('click', () => {
    if (answerInput.value === '21') {
        result.style.color = 'green';
        const countdownInterval = setInterval(() => {
            result.textContent = 'Pasti anda pituk, tunggu '+ countdownValue +' detik berarti yaw!';
            countdownValue--;
            if (countdownValue < 0) {
                clearInterval(countdownInterval);
                countdownValue = 0;
                question.value = "19 + 8 = ?"
                clue.textContent = "Pituk kocak penjumlahan aja salah, scroll ke paling bawah";
                botContainer.classList.remove('show-bottom-container');
            }
        }, 1000);
    } else {
        result.textContent = 'Pasti anda pituk, soalnya jawaban salah. Coba lagi!';
        result.style.color = 'red';
    }
});

function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    ctrContainer.classList.remove('show-center-container');
    question.value = "Berapa umur pipi sekarang?"
    setTimeout(() => {
        myAudio.play();
    }, 5000);
}

themeBtn.addEventListener('click', toggleDarkMode);