let storeWord;
let remainedLetterToGuess;
let tracker; // schimba functia in start sau in guess

function start() {
  guessedWord = [];
  if (remainedLetterToGuess === 0 || index == 9) {
    document.getElementById("guessTheWord").innerHTML = `<p></p>`;
    document.getElementById("wrongLetters").innerHTML = `<p></p>`;
    document.getElementById("picture").innerHTML = `<img src="/image/hangman.png">`;
    index = 1;
  }
  storeWord = document.getElementById("insertWord").value;
  remainedLetterToGuess = storeWord.length;

  for (let position = 0; position < storeWord.length; ++position) {
    document.getElementById(
      "guessTheWord"
    ).innerHTML += `<p id="${position}" class="${storeWord[position]}"><span class="material-icons"> close </span></p>`;
  }
  tracker = 0;
  changeToStartOrGuess();
}

let guessedWord = []; //salvam literele ghicie corect ca sa scapam de bug ul cu repetarea literei corecte pana castigi
let contor = 0; // folosim un contor ca sa se declanseze daca litera aleasa este deja ghicita;

function guessTheLetter() {
  let choosedLetter = document.getElementById("insertWord").value;
  let atLeastOneLetterCorrect = 0;
  for (let position = 0; position < storeWord.length; ++position) {
    if (choosedLetter === storeWord[position]) {
      // dupa ce s a gasit o litera corecta verificam daca ea nu a fost deja ghicita
      ++atLeastOneLetterCorrect; // crestem valoarea indiferent daca a fost ghicita sau nu pentru ca e o litera corecta
      for (let i = 0; i < guessedWord.length; ++i) {
        if (choosedLetter === guessedWord[i]) {
          ++contor;
        }
      }
      if (contor === 0) {
        document.getElementById(position).innerHTML = choosedLetter;
        --remainedLetterToGuess;
      }
    }
    contor = 0;
  }
  guessedWord.push(choosedLetter); // adaugam litera corecta in sirul de litere corecte dupa ce citim toto cuvantul ca sa se afiseze o litera de mai multe ori in cuvant
  if (atLeastOneLetterCorrect === 0) {
    document.getElementById("wrongLetters").innerHTML += `${choosedLetter}`;
    wrongLetter();
  }

  if (remainedLetterToGuess === 0) {
    document.getElementById(
      "guessTheWord"
    ).innerHTML += `<span class="material-icons">
          check
          </span>`;
    document.getElementById("guessTheWord").innerHTML += `<br><p class = "winner">You won</p>`;
    index = 1;
    guessedWord = [];
    tracker = 1;
    changeToStartOrGuess();
  }
}

let index = 1;

function wrongLetter() {
  if (index === 1) {
    document.getElementById(
      "picture"
    ).innerHTML = `<img src="/image/hangman new head - Copy.png">`;
  }
  if (index === 2) {
    document.getElementById(
      "picture"
    ).innerHTML = `<img src="/image/hangman new head + face - Copy.png">`;
  }
  if (index === 3) {
    document.getElementById(
      "picture"
    ).innerHTML = `<img src="/image/hangman  face + body - Copy.png">`;
  }
  if (index === 4) {
    document.getElementById(
      "picture"
    ).innerHTML = `<img src="/image/hangman  body + left leg - Copy.png">`;
  }
  if (index === 5) {
    document.getElementById(
      "picture"
    ).innerHTML = `<img src="/image/hangman  left leg + right leg - Copy.png">`;
  }
  if (index === 6) {
    document.getElementById(
      "picture"
    ).innerHTML = `<img src="/image/hangman  right leg + left hand - Copy.png">`;
  }
  if (index === 7) {
    document.getElementById(
      "picture"
    ).innerHTML = `<img src="/image/hangman  left hand + right hand - Copy.png">`;
  }
  if (index === 8) {
    document.getElementById(
      "picture"
    ).innerHTML = `<img src="/image/hangman  dead hang man.png">`;
    document.getElementById("guessTheWord").innerHTML += `<br><p class = "lost">Game over</p>`;
    tracker = 1;
    changeToStartOrGuess();
  }

  ++index;
}

function restartGame() {
  guessedWord = [];
  index = 1;
  document.getElementById(
    "startOrGuess"
  ).innerHTML = `<button class="button" type="button" onclick="return start();">Start</button>`;
  document.getElementById("guessTheWord").innerHTML = `<p></p>`;
  document.getElementById("picture").innerHTML = `<img src="/image/hangman.png">`;
  document.getElementById("instruction").innerHTML =
    "Insert one word to start the game";
  document.getElementById("wrongLetters").innerHTML = `<p></p>`;
}

function changeToStartOrGuess() {
  if (tracker === 1) {
    document.getElementById(
      "startOrGuess"
    ).innerHTML = `<button class="button" type="button" onclick="return start();">Start</button>`;
    document.getElementById("instruction").innerHTML =
      "Insert one word to start the game";
  }
  if (tracker === 0) {
    document.getElementById("instruction").innerHTML = "Guess the letters:";
    document.getElementById(
      "startOrGuess"
    ).innerHTML = `<button class="button" type="button" onclick="return guessTheLetter();">Guess</button>`;
  }
}
