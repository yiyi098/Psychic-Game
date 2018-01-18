var userScore = document.getElementById("userScore");
userScore.textContent = 0;

var computerScore = document.getElementById("computerScore");
computerScore.textContent = 0;
    
var guesses = document.getElementById("guesses");
guesses.textContent = 9;

var userInput = document.getElementById("user-input");
var userInputList = [];

var situation = document.getElementById("situation");

// var wrongInput = document.getElementById("wrong-input");
console.log(userInput)
// Next, we give JavaScript a function to execute when onkeyup event fires.

computerSelections = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var computerRandomSelection = computerSelections[Math.floor(Math.random() * computerSelections.length)];

// var startingSelection = computerRandomSelection();

console.log(computerRandomSelection);

document.onkeyup = function(event) {
// userInput.textContent = event.key;

  //Starting Guesses
  if (event.key == computerRandomSelection) {
    situation.textContent = "You guessed correctly!";
    userScore.textContent++;
    guesses.textContent = 9;
    userInputList = [];
    userInput.textContent = userInputList;
    computerRandomSelection = computerSelections[Math.floor(Math.random() * computerSelections.length)];
    console.log(computerRandomSelection);
  } else {
    situation.textContent = "You guessed wrong...";
    guesses.textContent--;
    userInputList.push(" " + event.key);
    // console.log(userInputList);
    userInput.textContent = userInputList;
  }

  //When out of guesses
  if (guesses.textContent == 0) {
    situation.textContent = "You lost...try again!";
    computerScore.textContent++;
    guesses.textContent = 9;
    userInputList = [];
    userInput.textContent = userInputList;
    computerRandomSelection = computerSelections[Math.floor(Math.random() * computerSelections.length)];
    console.log(computerRandomSelection);
  }
    
};