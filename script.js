'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '👀 Start guessing... ';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 13;

document.querySelector('.guess').value = 13;
console.log(document.querySelector('.guess').value);
*/

let number = Math.floor(Math.random() * 100);
console.log(number);
let fails = 0;
let highscore = Number(document.querySelector('.highscore').textContent);
console.log(highscore);
let score = Number(document.querySelector('.score').textContent);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent =
      '⛔Your guess is not a number!';
  } else if (guess === number) {
    highscore = highscore + 20;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.message').textContent = 'Your guess is correct ✅';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    document.querySelector('.highscore').textContent = highscore;
  } else if (guess < number) {
    if (score >= 1) {
      document.querySelector('.message').textContent = 'Guess is too low ⬆⬆⬆⬆';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (score < 1) {
      document.querySelector('.message').textContent = 'You lost';
      highscore = highscore - 10;
    }
  } else if (guess > number) {
    if (score >= 1) {
      document.querySelector('.message').textContent =
        'Guess is too high ⬇⬇⬇⬇⬇';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (score < 1) {
      document.querySelector('.message').textContent = 'You lost';
      highscore = highscore - 10;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  number = Math.floor(Math.random() * 100);
  console.log(number);
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
