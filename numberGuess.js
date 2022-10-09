//This a number guessing javascript application
//It prompts the user to guess a number within a given range , if guessed correctly, the user is moved to the next stage where the range is further increase by 1.

console.log("WELCOME TO THE NUMBER GUESSING GAME!")
let stage = 1;
let points = 0;
const guess = function(range) {
  const correct = Math.floor(Math.random() * range)
  const number = Number(prompt(`Guess a number between 0 and ${range}`));
  if (number === correct) {
    points++
    console.log("Woow, That's correct")
    console.log(`You have ${points} points`)
    stage++
    console.log(`You moved to Stage ${stage}`);
    range++;
    guess(range);
  } else {
    console.log("Wrong! Try again!");
    guess(range)
  }
}

guess(3)