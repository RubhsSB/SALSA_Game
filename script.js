// Listas de palabras
const words = [
"CyC (Host cambio posición)", "Daniel y Alma", "CyC (Host círculo Dcha)", "CyT Sensual", "JyE (diagonal Cintura)", "EyG (abro y cierro)", "DyY (abro en 4)", "MARCO ESPEJO", "CyC (lanzo atrás en 3)", "JHERSY - Molino",
 "JHERSY - Preparar pos Cerrada", "SERGIO y KATINA (Círculo y tiro atrás - Bassmnt)", "EyG (Cats giro 2 manos)", "ALBERTO y MARÍA (Giro espalda-Cats)", "JHERSY (preparo sensual + mano Follow)",
 "JHERSY (preparo sensual + lanzo en 4 y salgo)", "DIAGONAL salida", "AyV", "CyC (Segovia)", "Sergio y Katina (Host)", "Sensual +", "GtoyM", "José y Layla (Mymo)", "INTRO Carlos", "INTRO Carlos", "INTRO Carlos", 
 "K_ELDE Intro", "K_ELDE mano en 5",  "TONIO (brazos, cuello+Disoc, Salir)", "JLAB (salir/end)", "K_ELDE brazos Izq", "JHERSY (salir pasos cambio mano)", "JHERSY (Mano en 5 bajar)", 
 "JHERSY (Giro F en 5 + Giro L en 7 más desplazamiento)", "JHERSY pasos", "JHERSY (Giro cambio mano)", "K_ELDE brazos Dcha", "IVAN Y SARAI (Cuadrado Host)", "JHERSY (salir/end)", "CyC (Giro 2 manos)", "Tonio (Codos / Angel / Andar)",
 "70'", "Yowke", "Pasitos Elw Adelante/Atrás", "Pasitos Elw Izq/Dcha", "Cambio posición con mano Izq (Marc/Sra)", "FRANCIA", "Alex y Lais (jóvenes -3+1)", "VyA (Cambio mano + Freno en 6)", "DyY (SanSebastián - Separo en 4 y al hombro)", 
 "JyE (preparo salida en 8)", "CyC (Mambo Manos Hombro)", "70'", "CyC (70´ + mano hombro para sombra)", "M y Gta", "DyY (Bajo cabeza - Cats)", "DyY (Giro mano escápula - Bassment)", "ENGAÑO", "PyL", "Yowke", 
 "DyY (Freno + contra + brazo Izq al hombro)", "ENGAÑO", "MOLINO juego", "TONIO (enrrollo + saco/peinado)", "SENSUAL Lados", "PATADA", "MATI y SOFI (Lanzo brazo atrás)", "MOLINO insta", "EyG (Giro LED cintura)", "CvT", 
 "CyC Freno en 2 y alargo 3-4", "GOLPE Elw", "JyE Diagonal + Giro", "INTRO", "EyG (Lanzo y Diagonal)", "VALENT", "VyA (Freno hombro en 2)", "FLECHA", "CyC (Giro en Diagonal + abrazo cuello)", "CyC (Olas Izq + Molino Follow)", 
 "CyC (Giro en diagonal)", "CyC (Diagonal + paseo)", "GERO y MIGLE (cambio pos 360º)", "Cuello (en 6)", "CyT (3 giros con Cuello)", "EyG (SanSebastián - Rompo y abajo)", "BRAZOS frame", "JOVENES 70'+ Cuello", "5 cintura abajo", 
 "VyA", "David", "CyT sens Péndulo", "CyT sens Onda", "DISOCIACION de PECHO (Enrollada)", "EyG", "CyC en 4 de espaldas", "GAB", "CyC (andar atrás)", "CyT (Cambio + 70´)", "KENZ y JULY Lanzo brazo atrás", "JyE Ando atrás", "Básico + Salto", 
 "CyC (Giro en diagonal + peino + abajo)", "EyG (5 gira Foll + 7 gira Led)", "PABLO y NAT (jóvenes)", "OTTO", "CyC (½ Diagonal + Lanzo en sombra Led)", "ASCENSOR", "JLAB Muñeco brazos", "JAVI y BELÉN (Host)", "JORGE y SANDRA", 
 "JyE Enrollo x 2", "COLOMBIAN", "DISOCIACION de PECHO (en SOMBRA)", "CyC", "CyT (GIRO 70 Cambio Posición)", "CyC (1/2 Diagonal + giro atrás + paseo)", "CyC", "CyC", "JLAB Doble giro + 70´", "CyC", "YEIFREN", "CyC (Brazos Izq y Dcho hombros)", 
 "DyY (Onda + Círculo)", "SENSUAL +", "DyY (Giro + Freno en 6)", "70´Adelante", "JyE", "AyYUR Palanca", "Lado MAMBO", "GAB", "JyE Giro CUELLO", "DISOCIACION de PECHO (pos CERRADA)", "D e Inés", "INTRO", 
 "CyT (mano cuello LED en 8)", "Brazo Lanzo DEBAJO", "JLAB (Sensual/Giros)", "DOTORE (Mym)", "ARGETIN", "CANGURO", "PyL Pasos", "ENGAÑO", "CyC", "JyE", "GUITARRA", "SINCOPADO", "Pasos CARLOS", "STEPHAN y NEVI (freno en 3 y horiz)", 
 "SERGIO y KATINA (molino en 1 Casa Campo)", "EyG Giro Espalda con Espalda", "DyY (Giro en 8 + Lanzo izq)", "CyT (Balanceo)", "CyT (Péndulo)", "CyT (sensual meter pierna)", "CyT (Tumbar Follow)", "DyY (Cats - Giro en 5 + juego de Brazos)", 
 "IVAN Y SARAI (3 sensual + Cadera)", "Diagonal JHersey", "Diagonal JHersey", "CyC (Giro en Diagonal + abrazo cuello)", "EyG (5 gira Foll + 7 gira Led)", "EyG (1/2 Sensual + disoc Follow)", "Básico (Grande + Pequeño)", 
 "Básico (Grande/Pequeño + Hombros + Caderas)", "Cuellar Bachatero (Giro + Camb Pos + Sombra + peino)", "CyC (Host - Peino Follow + Me peino)", "CyC (Mymo)", "Giros", "Giros"
];
const wordsCustom = [
"CyC (Host cambio posición)", "Daniel y Alma", "JyE (diagonal Cintura)", "EyG (abro y cierro)", "DyY (abro en 4)", "MARCO ESPEJO", "CyC (lanzo atrás en 3)","JHERSY - Preparar pos Cerrada", 
 "SERGIO y KATINA (Círculo y tiro atrás - Bassmnt)", "EyG (Cats giro 2 manos)", "ALBERTO y MARÍA (Giro espalda-Cats)", "JHERSY (preparo sensual + mano Follow)", "JHERSY (preparo sensual + lanzo en 4 y salgo)", 
 "GtoyM", "K_ELDE Intro", "K_ELDE mano en 5", "JLAB (salir/end)", "IVAN y SARAI (Cuadrado Host)", "JHERSY (salir pasos cambio mano)", "JHERSY (Mano en 5 bajar)", "JHERSY (Giro F en 5 + Giro L en 7 más desplazamiento)", 
 "JHERSY pasos", "JHERSY (Giro cambio mano)", "JHERSY (salir/end)", "Cambio posición con mano Izq (Marc/Sra)", "FRANCIA", "Alex y Lais (jóvenes -3+1)", "DyY (SanSebastián - Separo en 4 y al hombro)", "JyE (preparo salida en 8)", 
 "CyC (Mambo Manos Hombro)", "70'", "DyY (Bajo cabeza - Cats)", "DyY (Giro mano escápula - Bassment)", "ENGAÑO", "DyY (Freno + contra + brazo Izq al hombro)", "ENGAÑO", "GERO y MIGLE (cambio pos 360º)", "Cuello (en 6)", "CyT (3 giros con Cuello)", 
 "5 cintura abajo", "CyT sens Péndulo", "DISOCIACION de PECHO (Enrollada)", "CyT (Cambio + 70´)", "JyE Ando atrás", "PABLO y NAT (jóvenes)", "OTTO", "ASCENSOR", "JLAB Muñeco brazos", "JORGE y SANDRA", "JyE Enrollo x 2", "COLOMBIAN", 
 "DISOCIACION de PECHO (en SOMBRA)", "JLAB Doble giro + 70´", "DyY (Onda + Círculo)", "SENSUAL +", "70´Adelante", "JyE", "AyYUR Palanca", "Lado MAMBO", "GAB", "JyE Giro CUELLO", "DISOCIACION de PECHO (pos CERRADA)", "CANGURO", "GUITARRA", 
 "SINCOPADO", "Pasos CARLOS", "STEPHAN y NEVI (freno en 3 y horiz)", "CyC (Diagonal + paseo)", "Diagonal JHersey", "CyT (Tumbar Follow)", "DyY (Cats - Giro en 5 + juego de Brazos)", "IVAN Y SARAI (3 sensual + Cadera)", "EyG (1/2 Sensual + disoc Follow)", 
 "Básico (Grande/Pequeño + Hombros + Caderas)", "D e Inés", "Brazo Lanzo DEBAJO", "Cuellar Bachatero (Giro + Camb Pos + Sombra + peino)", "CyC (Host - Peino Follow + Me peino)", "Giros", "Giros"
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
