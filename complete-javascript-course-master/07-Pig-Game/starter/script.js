'use strict';
/*//teste de roll
function try_random(range, target) {
  let dice_roll = Math.trunc(Math.random() * range) + 1;
  dice_roll == target
    ? console.log(dice_roll)
    : console.log(dice_roll, try_random(range, target));
}

//is player 1 active?
let active = true;
//encontre a imagem dado
const dice_image = document.querySelector('body > main > img');
console.log(dice_image.src);
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

//encontre a background do jogo

const background = document.querySelector('body > main');
console.log(background.style);
//encontre o botao de jogo novo

const new_game = document.querySelector('body > main > button.btn.btn--new');
console.log(new_game);
//encontre o botao hold
const hold = document.querySelector('body > main > button.btn.btn--hold');
console.log(hold);

//teste de random para o log
try_random(5, 1);
//funcao de roll e mudanca de imagem, retorna valor do dado
function roll_and_change() {
  let new_dice = Math.trunc(Math.random() * 6) + 1;
  //TODO mudar imagem
  dice_image.src = `http://127.0.0.1:5500/complete-javascript-course-master/07-Pig-Game/starter/dice-${new_dice}.png`;
  console.log('mudei imagem', new_dice);
  //retorna dado
  return new_dice;
}
//quando clicar, roll um dado , muda a imagem e retorna o valor do dado
roll_buttom.addEventListener('click', roll_and_change);
//TODO identificar jogador atual com if '?' se player1 esta ativo (active = true)
function mudar_jogador(active) {
  active = active ? false : true;
  console.log('mudei jogador para ' + active);
  return active;
}

//TODO confirmar que roll nao é 1, caso seja, zerar lower_value e mudar jogador

//TODO se roll não é um adcionar roll ao lower value

//TODO caso de botao hold adcionar lower_value ao upper_value, zerar lower_value e mudar de player
hold.addEventListener('click', function () {
  active
    ? (upper_value1.value += lower_value1.value)
    : (upper_value2.value += lower_value2.value);
  active ? (lower_value1.value = 0) : (lower_value2.value = 0);

  active = mudar_jogador(active);
});

//TODO cao clique botao new game, reset upper e lower values, marcar player 1 como ativo

*/
