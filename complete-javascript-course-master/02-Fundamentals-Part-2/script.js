'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :DDD")

function logger(name) {
    console.log(`My name is ${name}`);
    return (`Your name is ${name}? How do you pronounce it?`)
}

const nome = 'Paulo';
console.log(logger(nome));

logger('Poulo');
logger(true);
logger(2 < 1);

console.log(logger(5 / 8));

const calcAverage = (a, b, c) => (a + b + c) / 3;

let dolphAverage = calcAverage(4, 5, 8000);
let koalasAverage = calcAverage(4, 5, 600);

console.log(dolphAverage);
console.log(koalasAverage);

function checkWinner(dolphAverage, koalasAverage) {
    return (dolphAverage > koalasAverage) ? "dolph Wins" : "koalas Wins";
}
console.log(checkWinner(dolphAverage, koalasAverage));