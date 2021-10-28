



for (let position = 0; position < 4; ++position) {
  document.getElementById(
    "guessTheWord"
  ).innerHTML += `<span id="${position}" class="material-icons"> close </span>`;
}


document.getElementById(
  "guessTheWord"
).innerHTML += `<p id="${position}" class="${storeWord[position]}"><span class="material-icons"> close </span></p>`;

document.getElementById("message").innerHTML = `<div id="message"></div>`;

document.getElementById(
  "message"
).innerHTML = `<br><p>You got the wrong letter</p>`;