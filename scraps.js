const words = ["pony", "monkey", "banana", "yellow", "brown", "poop", "dogs"];

function randomWord(words) {
  let randomWord = Math.floor(Math.random() * (words.length - 1));
  /* console.log(randomWord, words[randomWord]); */
  return words[randomWord];
}

let generatedWord = randomWord(words);

function makeEmptyLines() {
  let word = randomWord(words);
  /*  console.log(word); */
  for (let letter of word) {
    let lineElement = document.createElement("div");
    lineElement.textContent = "_";
    document.querySelector("#line-container").appendChild(lineElement);
    console.log(lineElement);
  }
}

console.log(makeEmptyLines());
console.log("this is the generated word", generatedWord);

/* let allLetterButtons = document.querySelectorAll(".letter");

function clickedLetterMatchesWord(generatedWord, letter) {
  let matchedLettersPosition = [];
  for (let i = 0; i > generatedWord.length; i++) {
    if (generatedWord.includes(i)) {
      matchedLetters.push(i);
      return matchedLettersPosition;
    }
  }
}

console.log(
  "if the lettres are in the word",
  matchedLettersPosition(generatedWord, "a")
); */

const letterContainerElement = document.querySelector(".letter-container");
letterContainerElement.addEventListener("click", (event) => {
  if (generatedWord.includes(event.target.id)) {
    clickedLetterMatchesWord();

    document.querySelector("#line-container").textContent = ;
  }
});

// check if letter corresponds to word
// hämta id på element och jämföra med ordet
function checkLetter(word) {
  if (word.includes()) {
    return true;
  }
}
console.log(checkLetter("bobbo"));


// compare if the clicked letter matches a letter in the word

/* let letter = document.querySelector(".letter");
for (let )
letter.addEventListener("click", () => {
  letter.classList.add(".clicked");
  // add class to make red
}); */
