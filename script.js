// Variables for the DOM elements

// Array
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

function addWordToDOM() {
  const randomWord = words[Math.floor(Math.random() * words.length)];
  let typingWords = document.querySelector("h2");
  typingWords.textContent = randomWord;
}
addWordToDOM(); 


function updateScore() {
  let score = document.getElementById("score");
  score = 0;

}