"use strict";

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct number'


document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 12;

document.querySelector('.guess').value  = 100

console.log((document.querySelector(".guess").value = 100));*/

// document.querySelector(".highscore").textContent = 30;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message
}

function checkMe() {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector(".message").textContent = "⛔️ No number";
    displayMessage("⛔️ No number");
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "🎉 correct number";
    displayMessage("🎉 correct number");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage (guess > secretNumber ? '📈 Too high!!!' : '📉 Too low!!!');

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "😭 You lost the game";
      displayMessage("😭 You lost the game");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#FF0000";
      document.querySelector(".number").style.width = "30rem";
    }
  }
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Too high!!!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "😭 You lost the game";
  //     document.querySelector(".score").textContent = 0;
  //     document.querySelector("body").style.backgroundColor = "#FF0000";
  //     document.querySelector(".number").style.width = "30rem";
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📉 Too low!!!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "😭 You lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
}

function againStart() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
}

document.querySelector(".check").addEventListener("click", checkMe);
document.querySelector(".again").addEventListener("click", againStart);
