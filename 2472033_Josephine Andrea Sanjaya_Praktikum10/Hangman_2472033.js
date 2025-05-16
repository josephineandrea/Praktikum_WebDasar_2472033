let answers = ["PYTHON", "JAVASCRIPT", "TAILWIND", "REACT", "LARAVEL"];
let clues = [
    "A versatile programming language named after a snake, loved for its simplicity.",
    "The language that brings interactivity to websites, often abbreviated as JS.",
    "A utility-first CSS framework for rapidly building custom designs.",
    "A JavaScript library for building dynamic user interfaces, created by Facebook.",
    "A PHP framework known for elegant syntax and robust web development tools."
];

var answer = "";
var answer_ = "";
var lives = 10;

let wordDiv = document.querySelector(".word");
let clueDiv = document.querySelector(".clue");
let input = document.querySelector(".input");
let checkBtn = document.querySelector(".check-btn");
let livesText = document.querySelector(".lives");
let img = document.querySelector(".gambar");
let keterangan = document.querySelector(".keterangan");
let bottom = document.querySelector(".bottom-section");

function generate() {
    let i = Math.floor(Math.random() * answers.length);
    answer = answers[i];
    answer_ = "_".repeat(answer.length);
    wordDiv.innerHTML = answer_.split("").join(" ");
    clueDiv.innerHTML = clues[i];
    lives = 10;
    updateLives();
    updateImage();
    keterangan.innerHTML = "";
}

function updateLives() {
    livesText.innerHTML = "Lives : " + lives;
}

function updateImage() {
    img.src = `img/${lives}.jpg`;
}

function checkAnswer() {
    let guess = input.value.toUpperCase();
    input.value = "";

    let found = false;
    let answerArray = answer_.split("");

    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === guess && answerArray[i] === "_") {
            answerArray[i] = guess;
            found = true;
        }
    }

    if (!found) {
        lives--;
        updateImage();
    }

    answer_ = answerArray.join("");
    wordDiv.textContent = answer_.split("").join(" ");
    updateLives();

    checkWin();
}

function checkWin() {
    if (!answer_.includes("_")) {
        keterangan.innerHTML = "Kamu Menang!";
        keterangan.style.color = "green";
        bottom.style.display = "none";
    } else if (lives === 0) {
        wordDiv.innerHTML = answer.split("").join(" ");
        keterangan.innerHTML = "Kamu Kalah!";
        keterangan.style.color = "red";
        bottom.style.display = "none";
    }
}

window.onload = () => {
    generate();
};

checkBtn.addEventListener("click", () => {
    checkAnswer();
});