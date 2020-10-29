function randomWords(arrayOfWords) {
  let words = arrayOfWords;
  let randomWord = Math.floor(Math.random() * words.length);
  console.log(/* randomWord */ words[randomWord]);
}

console.log(
  randomWords(["pony", "monkey", "banana", "yellow", "brown", "poop", "dogs"])
);
