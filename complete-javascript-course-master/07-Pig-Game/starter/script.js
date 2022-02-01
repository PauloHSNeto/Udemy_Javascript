'use strict';

function try_random(range, target) {
  let dice_roll = Math.trunc(Math.random() * range) + 1;
  dice_roll == target
    ? console.log(dice_roll)
    : console.log(dice_roll, roll_dice(range, target));
}

const dice = document.querySelector('.dice').ima;
const roll_buttom = document.querySelector('.btn--roll');

try_random(10, 5);
roll_buttom.addEventListener('click', function () {
  new_dice = Math.trunc(Math.random() * 6) + 1;
});
