'use strict';
//teste de roll
function try_random(range, target) {
  let dice_roll = Math.trunc(Math.random() * range) + 1;
  dice_roll == target
    ? console.log(dice_roll)
    : console.log(dice_roll, try_random(range, target));
}
//encontre a imagem dado
const dice_image = document.querySelector('body > main > img');
console.log(dice_image);
//encontre o botao de roll
const roll_buttom = document.querySelector(
  'body > main > button.btn.btn--roll'
);
console.log(roll_buttom);
//encontre o valor dos jogador 1
const upper_value1 = document.querySelector('#score--0');
console.log(upper_value1);
//encontre o valor dos jogador 2
const upper_value2 = document.querySelector('#score--1');
console.log(upper_value2);
// encontre a soma do jogador 1

const lower_value1 = document.querySelector('#current--0');
console.log(lower_value1);
// encontre a soma do jogador 2

const lower_value2 = document.querySelector('#current--1');
console.log(lower_value2);

//encontre a background do jogador 1

const background1 = document.querySelector(
  'body > main > section.player.player--0.player--active'
);
console.log(background1);

//encontre a background do jogador 2

const background2 = document.querySelector(
  'body > main > section.player.player--1'
);
console.log(background2);
//encontre o botao de jogo novo

const new_game = document.querySelector('body > main > button.btn.btn--new');
console.log(new_game);

//teste para o log
try_random(5, 1);
//quando clicar, roll um dado , muda a imagem e retorna o valor do dado
roll_buttom.addEventListener('click', function () {
  let new_dice = Math.trunc(Math.random() * 6) + 1;
  //TODO mudar imagem
  //retorna dado
  return new_dice;
  console.log(new_dice);
});
//TODO identificar jogador atual com if '?'
//TODO confirmar que roll nao é 1, caso seja, zerar lower_value e mudar jogador
//TODO se roll não é um adcionar roll ao lower value
//TODO caso de botao hold adcionar lower_value ao upper_value, zerar lower_value e mudar de player
//TODO cao clique botao new game, reset upper e lower values, marcar player 1 como ativo
