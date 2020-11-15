const words = [
  "tail",
  "claw",
  "banana",
  "yellow",
  "brown",
  "dogs",
  "spotted",
  "water",
  "ear",
  "floofy",
  "goofy",
];
const lineContainer = document.querySelector("#line-container");
const lineElements = document.querySelector("#line-container").childNodes;
const letterContainerElement = document.querySelector(".letter-container");
const imageElement = document.querySelector("#image");

let guesses = 0;
let badGuesses = 0;
let counter = 0;

function randomWord(words) {
  let randomWord = Math.floor(Math.random() * (words.length - 1));
  return words[randomWord];
}
let generatedWord = randomWord(words);

function makeEmptyLines() {
  for (let letter of generatedWord) {
    let lineElement = document.createElement("div");
    lineElement.textContent = "_";
    document.querySelector("#line-container").appendChild(lineElement);
  }
}

function playAgain() {
  let playAgainButton = document.createElement("button");
  playAgainButton.textContent = "Click here to play again";
  document.querySelector(".btn-container").appendChild(playAgainButton);
  playAgainButton.setAttribute("id", "again-button");
  playAgainButton.addEventListener("click", reset);
}

function wonGame() {
  document.querySelector(".win-box").textContent = " YOU WIN!";
  playAgain();
}

function lostGame() {
  document.querySelector(".info-box").textContent = " YOU LOSE!";
  imageElement.src = "images/n7.jpg";
}

function removeLines() {
  while (lineContainer.lastChild) {
    lineContainer.removeChild(lineContainer.lastChild);
  }
}

function removeClassFromElementChildren(className) {
  const letterChildren = letterContainerElement.children;
  for (let i = 0; i < letterChildren.length; i++) {
    letterChildren[i].classList.remove(className);
  }
}

function reset() {
  document.querySelector(".info-box").textContent = "";
  document.querySelector(".win-box").textContent = "";
  document.querySelector(".btn-container").children[0].remove();
  imageElement.src = `images/n1.jpg`;
  guesses = 0;
  badGuesses = 0;
  counter = 0;
  removeLines();
  removeClassFromElementChildren("clicked-letter");
  generatedWord = randomWord(words);
  makeEmptyLines(generatedWord);

  /* document.querySelector(".generated-word").textContent = generatedWord; */
}

function handleClick(event) {
  const idLetter = event.target.id;

  if (!event.target.classList.contains("letter")) {
    return;
  }
  if (guesses < 6) {
    if (!event.target.classList.contains("clicked-letter")) {
      let matches = false;
       for (let i = 0; i < generatedWord.length; i++) {
         if (generatedWord[i] === idLetter) {
          lineElements[i].textContent = idLetter;
          matches = true;
          counter += 1;

          if (counter == generatedWord.length) {
            wonGame();
          } 
       }

      if (matches === false && badGuesses < 6) {
        badGuesses += 1;
        let image = "n" + badGuesses + ".jpg";
        imageElement.src = `images/${image}`;
      }

      event.target.classList.add("clicked-letter");
      guesses = guesses + 1;
    }
  } else {
    lostGame();
    playAgain();
  }
}

letterContainerElement.addEventListener("click", handleClick);

makeEmptyLines();
