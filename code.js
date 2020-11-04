const words = ["pony", "monkey", "banana", "yellow", "brown", "poop", "dogs"];
const lineElements = document.querySelector("#line-container").childNodes;

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

const letterContainerElement = document.querySelector(".letter-container");
letterContainerElement.addEventListener("click", (event) => {
  const idLetter = event.target.id;
  if (generatedWord.includes(idLetter)) {
    Array.from(generatedWord).forEach((letter, index) => {
      if (letter === idLetter) {
        lineElements[index].textContent = idLetter;
      }
    });
  }
  event.target.classList.add("clicked-letter");
});

makeEmptyLines();

console.log("what is this", lineElements);
console.log("this is the generated word", generatedWord);
