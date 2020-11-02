const words = ["pony", "monkey", "banana", "yellow", "brown", "poop", "dogs"];

function randomWord(words) {
  let randomWord = Math.floor(Math.random() * (words.length - 1));
  /* console.log(randomWord, words[randomWord]); */
  return words[randomWord];
}

function makeEmptyLines() {
  let word = randomWord(words);
  console.log(word);
  for (let letter of word) {
    let lineElement = document.createElement("div");
    lineElement.textContent = "_";
    document.querySelector("#line-container").appendChild(lineElement);
    console.log(lineElement);
  }
}

console.log(makeEmptyLines());
