const words = ["pony", "monkey", "banana", "yellow", "brown", "poop", "dogs"];
const lineElements = document.querySelector("#line-container").childNodes;
const letterContainerElement = document.querySelector(".letter-container");
let guesses = 0;

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
  if (!event.target.classList.contains("clicked-letter")) {
    console.log("Kom inte hit om det stämmer");
    Array.from(generatedWord).forEach((letter, index) => {
      if (letter === idLetter) {
        lineElements[index].textContent = idLetter;
      } else {
        appendImage("h2.png", ".image-container");
      }
    });
    event.target.classList.add("clicked-letter");
  }
}

letterContainerElement.addEventListener("click", handleClick);

function appendImage(imageSrc, selector) {
  let imageElement = document.createElement("img");
  console.log(imageElement);
  imageElement.width = "300";
  imageElement.height = "500";

  imageElement.src = `images/${imageSrc}`;
  document.querySelector(selector).appendChild(imageElement);
}

makeEmptyLines();

console.log("what is this", lineElements);
console.log("this is the generated word", generatedWord);
