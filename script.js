// Lista de palabras
const words = [
 "NICO (Led giro atrás en 5)", "Deyfron (Cross + 70`+ Titanic)", "NICO (Led giro en 1 con camb de mano)", "Deyfron (Cross + 70)", "SUZIE Q 1", "SUZIE Q 2", "SUZIE Q 3", "SUZIE Q 4", "TRAVEL 1", "TRAVEL 2", "TRAVEL 3", 
 "MAMBO", "ATRÁS", "LATERAL", "NICO (Doble giro Follow + Gito Led en 5)", "Deyfron (Cross + Doble Giro Follow)"
];

// Variables
let wordsCopy = [];
let currentWord = "";
let startTime = 0;
let totalTime = 0;
let wordCount = 0;
let timerInterval;

// Elementos del DOM
const wordElement = document.getElementById("word");
const playButton = document.getElementById("play");
const nextButton = document.getElementById("next");
const finishButton = document.getElementById("finish");
const resultElement = document.getElementById("result");
const counterElement = document.getElementById("counter");
const timerElement = document.getElementById("timer");

// Función para reiniciar las palabras al iniciar el juego
function resetWords() {
  wordsCopy = [...words];
}

// Función para obtener una palabra aleatoria
function getRandomWord() {
  if (wordsCopy.length === 0) {
    wordElement.textContent = "¡Fin del juego! No hay más palabras.";
    nextButton.disabled = true;
    finishButton.disabled = true;
    return null;
  }
  const randomIndex = Math.floor(Math.random() * wordsCopy.length);
  return wordsCopy.splice(randomIndex, 1)[0];
}

// Función para guardar los puntajes
function saveHighScore(averageTime, wordCount) {
  const key = "easyHighScores";
  let highScores = JSON.parse(localStorage.getItem(key)) || [];
  highScores.push({ averageTime, wordCount });
  highScores.sort((a, b) => a.averageTime - b.averageTime);
  highScores = highScores.slice(0, 10);
  localStorage.setItem(key, JSON.stringify(highScores));
}

// Temporizador
function startTimer() {
  timerInterval = setInterval(() => {
    const currentTime = ((Date.now() - startTime) / 1000).toFixed(1);
    timerElement.textContent = `Tiempo: ${currentTime} segundos`;
  }, 100);
}

function stopTimer() {
  clearInterval(timerInterval);
}

// Eventos del juego
playButton.addEventListener("click", () => {
  resetWords();
  currentWord = getRandomWord();
  wordElement.textContent = currentWord;
  startTime = Date.now();
  wordCount = 0;
  totalTime = 0;
  counterElement.textContent = `Palabras jugadas: ${wordCount}`;
  timerElement.textContent = `Tiempo: 0 segundos`;
  playButton.disabled = true;
  nextButton.disabled = false;
  finishButton.disabled = false;
  startTimer();
});

nextButton.addEventListener("click", () => {
  const endTime = Date.now();
  totalTime += (endTime - startTime) / 1000;
  wordCount++;
  counterElement.textContent = `Palabras jugadas: ${wordCount}`;
  stopTimer();
  currentWord = getRandomWord();
  if (currentWord) {
    wordElement.textContent = currentWord;
    startTime = Date.now();
    startTimer();
  } else {
    wordElement.textContent = "¡Fin del juego! No hay más palabras.";
    nextButton.disabled = true;
    finishButton.disabled = true;
  }
});

finishButton.addEventListener("click", () => {
  stopTimer();
  if (wordCount > 0) {
    const averageTime = totalTime / wordCount;
    resultElement.textContent = `Promedio: ${averageTime.toFixed(2)} segundos por palabra.`;
    saveHighScore(averageTime, wordCount);
  } else {
    resultElement.textContent = "No has jugado todavía.";
  }
  playButton.disabled = false;
  nextButton.disabled = true;
  finishButton.disabled = true;
  wordElement.textContent = "Presiona 'Play' para comenzar de nuevo.";
  counterElement.textContent = `Palabras jugadas: 0`;
  timerElement.textContent = `Tiempo: 0 segundos`;
});
