// Lista de palabras
const words = [
 "NICO (Led giro atrás en 5)", "Deyfron (Cross + 70`+ Titanic)", "NICO (Led giro en 1 con camb de mano)", "Deyfron (Cross + 70)", "SUZIE Q 1", "SUZIE Q 2", "SUZIE Q 3", "SUZIE Q 4", "TRAVEL 1", "TRAVEL 2", "TRAVEL 3", 
 "MAMBO", "ATRÁS", "LATERAL", "NICO (Doble giro Follow + Gito Led en 5)", "Deyfron (Cross + Doble Giro Follow)", "MAMBO 2",
];


// =======================
// Variables y elementos
// =======================
// Variables
let wordsCopy = [];
let currentWord = "";
let startTime = 0;
let totalTime = 0;
let wordCount = 0;
let timerInterval;

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
const familyButton = document.getElementById("family");
const familySelect = document.getElementById("family-selector");

// =======================
// Inicialización
// =======================
window.addEventListener("load", () => {
  gameMode = "easy";
  updateLevelButtons();
  document.getElementById("family-selector-container").style.display = "none";

  familyPrefixes.forEach(prefix => {
    const option = document.createElement("option");
    option.value = option.textContent = prefix;
    familySelect.appendChild(option);
  });

  // Mostrar solo el botón Play al inicio
  playButton.style.display = "inline-block";
  nextButton.style.display = "none";
  finishButton.style.display = "none";
});

// =======================
// Selección de nivel
// =======================
[easyButton, hardButton, customButton, familyButton].forEach((btn, i) => {
  btn.addEventListener("click", () => {
    gameMode = ["easy", "hard", "custom", "family"][i];
    updateLevelButtons();
    document.getElementById("family-selector-container").style.display = gameMode === "family" ? "block" : "none";
  });
});

function updateLevelButtons() {
  [easyButton, hardButton, customButton, familyButton].forEach(btn => btn.classList.remove("active"));
  if (gameMode === "easy") easyButton.classList.add("active");
  if (gameMode === "hard") hardButton.classList.add("active");
  if (gameMode === "custom") customButton.classList.add("active");
  if (gameMode === "family") familyButton.classList.add("active");
}

// =======================
// Funciones principales
// =======================
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function resetWords() {
  if (gameMode === "easy") wordsCopy = [...words];
  else if (gameMode === "custom") wordsCopy = [...wordsCustom];
  else if (gameMode === "family") {
    const prefix = familySelect.value;
    wordsCopy = words.filter(w => w.startsWith(prefix));
  } else if (gameMode === "hard") wordsCopy = [];

  shuffleArray(wordsCopy);
  recentWords = [];
}

function getRandomWord() {
  let validWords;
  if (gameMode === "hard") return words[Math.floor(Math.random() * words.length)];

  if (gameMode === "family") {
    const selectedPrefix = familySelect.value;
    validWords = words.filter(w => w.startsWith(selectedPrefix) && !recentWords.includes(w));
    if (validWords.length === 0) {
      validWords = words.filter(w => w.startsWith(selectedPrefix));
      recentWords = [];
    }
  } else if (gameMode === "custom") {
    validWords = wordsCustom.filter(w => !recentWords.includes(w));
    if (validWords.length === 0) {
      validWords = [...wordsCustom];
      recentWords = [];
    }
  } else {
    validWords = wordsCopy.filter(w => !recentWords.includes(w));
    if (validWords.length === 0) {
      shuffleArray(wordsCopy);
      validWords = [...wordsCopy];
      recentWords = [];
    }
  }

  const word = validWords[Math.floor(Math.random() * validWords.length)];

  if (gameMode !== "hard") {
    recentWords.push(word);
    if (recentWords.length > 10) recentWords.shift();
  }

  return word;
}

function formatWordDisplay(word) {
  const match = word.match(/^(.*?)\s*(\([^)]+\))?$/);
  const main = match[1];
  const par = match[2] || "";
  return `<span class="main-text">${main.trim()}</span>${par ? `<br><span class="parenthesis">${par}</span>` : ""}`;
}

function saveHighScore(averageTime, wordCount) {
  const key = gameMode === "easy" ? "easyHighScores"
            : gameMode === "hard" ? "hardHighScores"
            : gameMode === "custom" ? "customHighScores"
            : "familyHighScores";
  let scores = JSON.parse(localStorage.getItem(key)) || [];
  scores.push({ averageTime, wordCount });
  scores.sort((a, b) => a.averageTime - b.averageTime);
  localStorage.setItem(key, JSON.stringify(scores.slice(0, 10)));
}

function startTimer() {
  timerInterval = setInterval(() => {
    const currentTime = ((Date.now() - startTime) / 1000).toFixed(1);
    timerElement.textContent = `Tiempo: ${currentTime} segundos`;
  }, 100);
}

function stopTimer() {
  clearInterval(timerInterval);
}

// =======================
// Botón PLAY
// =======================
playButton.addEventListener("click", () => {
  resetWords();
  currentWord = getRandomWord();
  wordElement.innerHTML = formatWordDisplay(currentWord);
  startTime = Date.now();
  wordCount = 0;
  totalTime = 0;
  counterElement.textContent = `Palabras jugadas: ${wordCount}`;
  timerElement.textContent = `Tiempo: 0 segundos`;

  // Mostrar solo los botones de juego
  playButton.disabled = true;
  playButton.style.display = "none";
  nextButton.disabled = false;
  nextButton.style.display = "inline-block";
  finishButton.disabled = false;
  finishButton.style.display = "inline-block";

  startTimer();
});

// =======================
// Botón SIGUIENTE
// =======================
nextButton.addEventListener("click", () => {
  const endTime = Date.now();
  totalTime += (endTime - startTime) / 1000;
  wordCount++;
  counterElement.textContent = `Palabras jugadas: ${wordCount}`;
  stopTimer();
  currentWord = getRandomWord();
  wordElement.innerHTML = formatWordDisplay(currentWord);
  startTime = Date.now();
  startTimer();
});

// =======================
// Botón FINALIZAR
// =======================
finishButton.addEventListener("click", () => {
  stopTimer();
  if (wordCount > 0) {
    const averageTime = totalTime / wordCount;
    resultElement.textContent = `Promedio: ${averageTime.toFixed(2)} segundos por palabra.`;
    saveHighScore(averageTime, wordCount);
  } else {
    resultElement.textContent = "No has jugado todavía.";
  }

  // Volver a estado inicial
  playButton.disabled = false;
  playButton.style.display = "inline-block";
  nextButton.disabled = true;
  nextButton.style.display = "none";
  finishButton.disabled = true;
  finishButton.style.display = "none";

  wordElement.textContent = "Presiona 'Play' para comenzar de nuevo.";
  counterElement.textContent = `Palabras jugadas: 0`;
  timerElement.textContent = `Tiempo: 0 segundos`;
});

// =======================
// Swipe en móviles
// =======================
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", e => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", e => {
  touchEndX = e.changedTouches[0].screenX;
  if (touchEndX < touchStartX - 50 && !nextButton.disabled) {
    nextButton.click();
  }
});

