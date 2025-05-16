let timer;
let currentMode = 0; 
let timeLeft = 1500; 
let timerDisplay = document.getElementById("timer");
let body = document.body;
let startBtn = document.querySelector(".start");
let keterangan = document.querySelector(".keterangan");

function formatTime(seconds) {
    const minute = String(Math.floor(seconds / 60));
    const second = String(seconds % 60).padStart(2, "0");
    return `${minute}:${second}`;
}

function updateDisplay() {
    timerDisplay.innerHTML = formatTime(timeLeft);
}

function switchMode(mode) {
    clearInterval(timer);
    startBtn.innerHTML = "START";
    
    currentMode = Number(mode);
    if (currentMode === 0) {
        timeLeft = 1500;
        body.style.backgroundColor = "#894682";
        keterangan.innerHTML = "Focus pocus!";
    } else {
        timeLeft = 300;
        body.style.backgroundColor = "#4988BB";
        keterangan.innerHTML = "Rest time!!";
    }

    updateDisplay();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        updateDisplay();

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Time's up!");
            startBtn.innerHTML = "START";
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    if (currentMode === 0) {
        timeLeft = 1500;
    } else {
        timeLeft = 300;
    }
    updateDisplay();
    startBtn.innerHTML = "START";
}

startBtn.addEventListener("click", () => {
    if (startBtn.innerHTML === "START") {
        startBtn.innerHTML = "RESET";
        startTimer();
    } else {
        resetTimer();
    }
});

updateDisplay();