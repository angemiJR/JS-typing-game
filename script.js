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


function addWordToDOM() {
  currentWord = words[Math.floor(Math.random() * words.length)];  // Adding random word
  typingWords.textContent = currentWord;

}


function updateScore() {

  input.addEventListener("input", function (e) {
    const typedWords = e.target.value.trim(); 

    // Check if typed word matches the current word
    if (typedWords === currentWord) {
      score++; 
      scoreElement.textContent = score;
      addWordToDOM(); 
      input.value = ""; 
      timeLeft = timeLeft + 5;

    } else if (!currentWord.startsWith(typedWords)) {
     
      typingWords.textContent = "Game over!";
      // score = 0;
      scoreElement.textContent = score; 
      input.value = "";  
      timeLeft = "0";
    }
  }

 );

}

function updateTime () {
const timeInterval = setInterval (function (){
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

}


updateTime();
updateScore();
addWordToDOM();
