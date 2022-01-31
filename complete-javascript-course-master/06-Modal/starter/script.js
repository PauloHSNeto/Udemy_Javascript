'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeButtom = document.querySelector('.close-modal');
const openButtom = document.querySelectorAll('.show-modal');
console.log(openButtom);

const openModal = function () {
  console.log('Butt-on');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < openButtom.length; i++)
  openButtom[i].addEventListener('click', openModal);

closeButtom.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
