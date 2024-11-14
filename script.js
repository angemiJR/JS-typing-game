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
const typingWords = document.querySelector("h2"); // Element displaying the word
const scoreElement = document.getElementById("score"); // Score display element
const input = document.getElementById("text"); // Input field
let timeLeft = 10;
const timerElement = document.getElementById("time)"); // Timer display element

function addWordToDOM() {
  currentWord = words[Math.floor(Math.random() * words.length)]; 
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

    } else if (!currentWord.startsWith(typedWords)) {
     
      typingWords.textContent = "Game over!";
      score = 0;
      scoreElement.textContent = score; 
      input.value = "";  
    }
  });
}


addWordToDOM();
updateScore();
