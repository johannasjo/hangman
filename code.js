const words = ["pony", "monkey", "banana", "yellow", "brown", "poop", "dogs"];
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

function handleClick(event) {
  const idLetter = event.target.id;
  if (guesses < 7) {
    if (!event.target.classList.contains("clicked-letter")) {
      console.log("Kom inte hit om det stämmer");
      let matches = false;
      Array.from(generatedWord).forEach((letter, index) => {
        if (letter === idLetter) {
          lineElements[index].textContent = idLetter;
          matches = true;
        }
      });
      if (matches === false) {
        badGuesses += 1;
        let image = "h" + badGuesses + ".png";
        imageElement.src = `images/${image}`;
      }
      console.log("If it's not the correct char", matches);
      event.target.classList.add("clicked-letter");
      guesses = guesses + 1;
    }
  }
}

letterContainerElement.addEventListener("click", handleClick);

makeEmptyLines();

console.log("what is this", lineElements);
console.log("this is the generated word", generatedWord);
console.log("This is the amount of guesses: ", guesses);
