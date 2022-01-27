'use strict';
/*
Code written by me, following Udemy course on JavaScript by Jonas Schmedtmann.
*/

let secretNumber = document.querySelector(`.number`).value = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(`.check`).addEventListener(`click`, function() {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess);

  if (!guess) {
    // When there's no input
    document.querySelector('.message').textContent = '⛔ No guess made ⛔';
  } else if (guess === secretNumber) {
    // When the player wins
    document.querySelector('.message').textContent = '🎉 You Win 🎉';
    document.querySelector(`.number`).textContent = secretNumber;

    document.querySelector(`body`).style.backgroundColor = `#1145CF`;
    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }

    // When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = guess > secretNumber ? 'Guess to high ☝' : 'Guess to low 👇';
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lose 💥';
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(`body`).style.backgroundColor = `#880808`;
  }
}

document.querySelector(`.again`).addEventListener(`click`, function() {
  score = 20;
  secretNumber = document.querySelector(`.number`).value = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector('.message').textContent = `Start guessing...`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
})})
