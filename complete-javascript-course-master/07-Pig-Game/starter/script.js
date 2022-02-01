'use strict';

function roll_dice() {
  let dice = Math.trunc(Math.random() * 5) + 1;
  dice == 5 ? console.log(dice) : console.log(dice, roll_dice());
}

roll_dice();
