const question = document.getElementById('question');
const answerInput = document.getElementById('answer-input');
const verifyBtn = document.getElementById('verify-btn');
const result = document.getElementById('result');
const clue = document.getElementById('clue');
const themeBtn = document.getElementById('theme-button');
const image = document.getElementById('image');
const body = document.body;
let countdownValue = 3;

verifyBtn.addEventListener('click', () => {
    if (answerInput.value === '21') {
        result.style.color = 'green';
        const countdownInterval = setInterval(() => {
            result.textContent = 'duh, tunggu '+ countdownValue +' detik berarti yawww!';
            // clue.textContent = countdownValue;
            countdownValue--;
            if (countdownValue < 0) {
                clearInterval(countdownInterval);
                countdownValue = 0;
                clue.textContent = "kocak penjumlahan aja salah? scroll ke paling bawah";
            }
        }, 1000);
    } else {
        result.textContent = 'jawaban salah kocak, coba lagi!';
        result.style.color = 'red';
    }
});

function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    image.classList.remove('image');
    question.value = "Berapa umur pipi sekarang?"
}

themeBtn.addEventListener('click', toggleDarkMode);