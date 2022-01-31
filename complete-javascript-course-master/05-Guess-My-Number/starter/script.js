'use strict';
/*
console.log(document.querySelector('.message').textContent);
console.log(5 * 5);
document.querySelector('.message').textContent = 'Mudei';
console.log(document.querySelector('.message').textContent);
document.querySelector('.score').textContent = 99;
document.querySelector('.guess').value = 77;
console.log(document.querySelector('.guess').value);
document.querySelector('.check').textContent = `Xáqui!`;*/

let number = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 10;
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener(`click`, function () {
  let guess = Number(document.querySelector('.guess').value);

  //no valid imput//
  if (!guess && score > 0) {
    document.querySelector('.message').textContent = 'Not a number';
  }
  //win condition//
  else if (guess === number) {
    highscore++;
    document.querySelector('.message').textContent = 'Correct!!!';
    document.querySelector('.highscore').textContent = highscore;
    //color change
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = number;
    //number style change
    document.querySelector('.number').style.width = '50rem';
  }

  //guess is diferent, refactoring//
  else if (guess !== number) {
    if (score > 0) {
      guess > number
        ? (document.querySelector('.message').textContent = 'Try lower!!!!')
        : 'Try higher!!!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost!!!!';
    }
  }
});

/*
  //too high
  else if (guess > number) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
    }
  }
  //too low
  else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = ;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost!!!!';
    }
  }
});*/
document.querySelector('.again').addEventListener(`click`, function () {
  score = 10;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '20rem';
});
