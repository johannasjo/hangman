const words = ["pony", "monkey", "banana", "yellow", "brown", "poop", "dogs"];
const lineContainer = document.querySelector("#line-container");
const lineElements = document.querySelector("#line-container").childNodes;
const letterContainerElement = document.querySelector(".letter-container");
const imageElement = document.querySelector("#image");

let guesses = 0;
let badGuesses = 0;

let name = "Carl";
let helloName = "Hello " + name;

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

function reset() {
  console.log("This is linelemenets", lineElements);
  while (lineContainer.lastChild) {
    lineContainer.removeChild(lineContainer.lastChild);
  }
  const letterChildren = letterContainerElement.children;

  for (let i = 0; i < letterChildren.length; i++) {
    letterChildren[i].classList.remove("clicked-letter");
  }
  document.querySelector(".info-box").textContent = "";
  document.querySelector(".btn-container").children[0].remove();
  imageElement.src = `images/h0.png`;
  guesses = 0;
  badGuesses = 0;
}

function handleClick(event) {
  const idLetter = event.target.id;
  if (guesses < 6) {
    if (!event.target.classList.contains("clicked-letter")) {
      console.log("Kom inte hit om det stämmer");
      let matches = false;
      Array.from(generatedWord).forEach((letter, index) => {
        if (letter === idLetter) {
          lineElements[index].textContent = idLetter;
          matches = true;
        }
      });
      console.log({ matches, badGuesses });
      if (matches === false && badGuesses < 6) {
        badGuesses += 1;

        let image = "h" + badGuesses + ".png";
        imageElement.src = `images/${image}`;
      }
      console.log("If it's not the correct char", matches);
      event.target.classList.add("clicked-letter");
      guesses = guesses + 1;
    }
  } else {
    document.querySelector(".info-box").textContent = " YOU LOSE!";
    let playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Click here to play again";
    document.querySelector(".btn-container").appendChild(playAgainButton);
    playAgainButton.setAttribute("id", "again-button");
    playAgainButton.addEventListener("click", reset);
  }
}

document.querySelector("#reset-button").addEventListener("click", reset);

letterContainerElement.addEventListener("click", handleClick);

makeEmptyLines();

console.log("what is this", lineElements);
console.log("this is the generated word", generatedWord);
console.log("This is the amount of guesses: ", guesses);
