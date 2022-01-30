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

function checkWinner(dolphAverage, koalasAverage) {
    return (dolphAverage > koalasAverage) ? "dolph Wins" : "koalas Wins";
}
console.log(checkWinner(dolphAverage, koalasAverage));

const pokemon = ['pikachu', 'abra', 'ratata']


function tip(bill) {

    let calcTip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.2);

    console.log(`The bill is ${bill}, the tip is ${calcTip} and the total is ${bill + calcTip}`)
    return calcTip
}

const dados = [124, 555, 44];
let total = [];
total.push(tip(dados[0]) + dados[0]);
total.push(tip(dados[1]) + dados[1]);
total.push(tip(dados[2]) + dados[2]);

console.log(total);