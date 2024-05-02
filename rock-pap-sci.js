
// in this game ROCK beats SCISSORS
//  and PAPER beats ROCK
// while SCISSORS beats PAPER

var yourNumber = 0;
var compNumber = 0;
var percentage1 = '';
var percentage2 = '';

function rock() {
 let computerMove = '';
 const randomNumber = Math.random();

 if (randomNumber >= 0 && randomNumber < 1 / 3) {
  computerMove = 'ROCK';
 } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
  computerMove = 'PAPER';
 } else {
  computerMove = 'SCISSORS';
 }
 console.log(computerMove);

 let result = '';
 if (computerMove === 'ROCK') {
  result = 'IT\'S A TIE';
 } else if (computerMove === 'PAPER') {
  result = 'YOU LOSE.';
  compNumber += 1;
 } else if (computerMove === 'SCISSORS') {
  result = 'YOU WIN.';
  yourNumber += 1;
 }
 let result1 = `You picked Rock. Computer picked ${computerMove}. ${result}.`;
 document.getElementById("results").textContent = result1;
 document.getElementById("your-actual-score").textContent = yourNumber;
 document.getElementById("actual-comp-score").textContent = compNumber;
 let total = yourNumber + compNumber;
 percentage2 = Math.round((compNumber / total) * 100);
 percentage1 = Math.round((yourNumber / total) * 100);
 document.getElementById("percentage1").textContent = percentage1;
 document.getElementById("percentage2").textContent = percentage2;

}

function paper() {
 let computerMove = '';
 const randomNumber = Math.random();
 if (randomNumber >= 0 && randomNumber < 1 / 3) {
  computerMove = 'ROCK';
 } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
  computerMove = 'PAPER';
 } else {
  computerMove = 'SCISSORS';
 }
 console.log(computerMove);

 let result = '';
 if (computerMove === 'ROCK') {
  result = 'YOU WIN';
  yourNumber += 1;
 } else if (computerMove === 'PAPER') {
  result = 'IT\'S A TIE.';
 } else if (computerMove === 'SCISSORS') {
  result = 'YOU LOSE';
  compNumber += 1;
 }
 let result1 = `You picked Paper. Computer picked ${computerMove}. ${result}.`;
 document.getElementById("results").textContent = result1;
 document.getElementById("your-actual-score").textContent = yourNumber;
 document.getElementById("actual-comp-score").textContent = compNumber;
 let total = yourNumber + compNumber;
 percentage2 = Math.round((compNumber / total) * 100);
 percentage1 = Math.round((yourNumber / total) * 100);
 document.getElementById("percentage1").textContent = percentage1;
 document.getElementById("percentage2").textContent = percentage2;

}


function scissors() {
 let computerMove = '';
 const randomNumber = Math.random();
 if (randomNumber >= 0 && randomNumber < 1 / 3) {
  computerMove = 'ROCK';
 } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
  computerMove = 'PAPER';
 } else {
  computerMove = 'SCISSORS';
 }
 console.log(computerMove);

 let result = '';
 if (computerMove === 'ROCK') {
  result = 'YOU LOSE';
  compNumber += 1;
 } else if (computerMove === 'PAPER') {
  result = 'YOU WIN.';
  yourNumber += 1;
 } else if (computerMove === 'SCISSORS') {
  result = 'IT\'S A TIE.';
 }
 let result1 = `You picked Scissors. Computer picked ${computerMove}. ${result}.`;
 document.getElementById("results").textContent = result1;
 document.getElementById("your-actual-score").textContent = yourNumber;
 document.getElementById("actual-comp-score").textContent = compNumber;
 let total = yourNumber + compNumber;
 percentage1 = Math.round((yourNumber / total) * 100);
 percentage2 = Math.round((compNumber / total) * 100);
 document.getElementById("percentage1").textContent = percentage1;
 document.getElementById("percentage2").textContent = percentage2;
}

