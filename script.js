// Listas de palabras
const words = [
"CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)",
 "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)"
];
const wordsCustom = [
"CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)",
 "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)", "CyC (Blablabla)"
];

// Variables
let wordsCopy = [];
let recentWordsCustom = []; // Últimas 15 palabras en modo Custom
let currentWord = "";
let startTime = 0;
let totalTime = 0;
let wordCount = 0;
let timerInterval;
let gameMode = "easy"; // Nivel predeterminado

// Elementos del DOM
const wordElement = document.getElementById("word");
const playButton = document.getElementById("play");
const nextButton = document.getElementById("next");
const finishButton = document.getElementById("finish");
const resultElement = document.getElementById("result");
const counterElement = document.getElementById("counter");
const timerElement = document.getElementById("timer");
const easyButton = document.getElementById("easy");
const hardButton = document.getElementById("hard");
const customButton = document.getElementById("custom");

// Configurar el nivel del juego
easyButton.addEventListener("click", () => {
  gameMode = "easy";
  updateLevelButtons();
});
hardButton.addEventListener("click", () => {
  gameMode = "hard";
  updateLevelButtons();
});
customButton.addEventListener("click", () => {
  gameMode = "custom";
  updateLevelButtons();
});

// Función para inicializar los botones de nivel
function initializeLevelButtons() {
  easyButton.classList.add("active"); // Nivel predeterminado: Easy
  hardButton.classList.remove("active");
  customButton.classList.remove("active");
}

// Llamada inicial para configurar los botones
initializeLevelButtons();

// Función para actualizar el estilo de los botones
function updateLevelButtons() {
  easyButton.classList.remove("active");
  hardButton.classList.remove("active");
  customButton.classList.remove("active");

  if (gameMode === "easy") {
    easyButton.classList.add("active");
  } else if (gameMode === "hard") {
    hardButton.classList.add("active");
  } else if (gameMode === "custom") {
    customButton.classList.add("active");
  }
}

// Función para iniciar el modo desafío
function resetWords() {
  wordsCopy = gameMode === "custom" ? [...wordsCustom] : [...words];
  recentWordsCustom = []; // Reiniciar lista de últimas palabras en Custom
}

// Función para obtener una palabra aleatoria según el nivel
function getRandomWord() {
  if (gameMode === "easy") {
    if (wordsCopy.length === 0) {
      wordElement.textContent = "¡Fin del juego! No hay más palabras.";
      nextButton.disabled = true;
      finishButton.disabled = true;
      return null;
    }
    const randomIndex = Math.floor(Math.random() * wordsCopy.length);
    return wordsCopy.splice(randomIndex, 1)[0];
  } else if (gameMode === "hard") {
    return words[Math.floor(Math.random() * words.length)];
  } else if (gameMode === "custom") {
    // Nivel Custom: Evitar repeticiones en las últimas 15 palabras
    let validWords = wordsCustom.filter(word => !recentWordsCustom.includes(word));
   if (validWords.length === 0) {
    recentWordsCustom.shift(); // Elimina la palabra más antigua y vuelve a filtrar
    validWords = wordsCustom.filter(word => !recentWordsCustom.includes(word));
     }
    const randomIndex = Math.floor(Math.random() * validWords.length);
    const selectedWord = validWords[randomIndex];

    // Actualizar recentWordsCustom
    recentWordsCustom.push(selectedWord);
    if (recentWordsCustom.length > 15) {
      recentWordsCustom.shift(); // Mantener solo las últimas 15 palabras
    }

    return selectedWord;
  }
}

// Función para guardar los puntajes
function saveHighScore(averageTime, wordCount) {
  const key =
    gameMode === "easy"
      ? "easyHighScores"
      : gameMode === "hard"
      ? "hardHighScores"
      : "customHighScores";
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
