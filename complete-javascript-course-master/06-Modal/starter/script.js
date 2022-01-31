'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeButtom = document.querySelector('.close-modal');
const openButtom = document.querySelectorAll('.show-modal');
console.log(openButtom);

for (let i = 0; i < openButtom.length; i++) {
  openButtom[i].addEventListener('click', function () {
    console.log('Butt-on');
    modal.classList.remove('hidden');
  });
}
