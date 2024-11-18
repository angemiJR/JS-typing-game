// Array of words
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];


let currentWord;
let score = 0;
const typingWords = document.getElementById("word"); // Element displaying the word
const scoreElement = document.getElementById("score"); // Score display element
const input = document.getElementById("text"); // Input field
let timeLeft = 10;
const timerElement = document.getElementById("time"); // Timer display element
const settingsButton = document.getElementById("settings-btn"); // Settings button tag
const difficultyDropdown = document.getElementById("difficulty"); // Difficulty dropdown
let TimerInterval;
const restartButton = document.createElement('button');

function addWordToDOM() {
  currentWord = words[Math.floor(Math.random() * words.length)];  // Adding random word
  typingWords.textContent = currentWord;

}


function updateScore() {

  settingsButton.style.visibility = "hidden";

  input.addEventListener("input", function (e) {
    const typedWords = e.target.value.trim();

    // Check if typed word matches the current word
    if (typedWords === currentWord) {
      score++;
      scoreElement.textContent = score;
      addWordToDOM();
      input.value = "";
      const difficulty = difficultyDropdown.value;

      if (difficulty == "easy") {
        timeLeft = timeLeft + 5;
      } else if (difficulty == "medium") {
        timeLeft = timeLeft + 3;
      } else if (difficulty == "hard") {
        timeLeft = timeLeft + 2;
      }


    } else if (!currentWord.startsWith(typedWords)) {
      gameOver();

    }
  }

  );

}

function updateTime() {
  const timeInterval = setInterval(function () {
    if (timeLeft <= 0) {
      gameOver();
    } else {
      timeLeft = timeLeft - 1;
      timerElement.textContent = `${timeLeft} s`;
    }
  }, 1000);


}


function gameOver() {
  clearInterval(updateTime.timeInterval);
  typingWords.textContent = "Game over!";
  // score = 0;
  scoreElement.textContent = score;
  input.value = "";
  timeLeft = 0;
  timerElement.textContent = `${timeLeft} s`;
  settingsButton.style.visibility = "visible";
  // createRestartButton();
}


function createRestartButton() {

  restartButton.textContent = 'Restart game';
  // document.body.appendChild(restartButton);
  restartButton.id = "restart-btn";

  restartButton.setAttribute("onclick", "location.reload()");
  restartButton.addEventListener("click", function () {
    location.reload();
  });

  const endGameContainer = document.getElementById("end-game-container");
  endGameContainer.innerHTML = ""; 
  endGameContainer.appendChild(restartButton);


}


createRestartButton();
updateTime();
updateScore();
addWordToDOM();
