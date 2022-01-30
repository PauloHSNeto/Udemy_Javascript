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



const jonas = {
    'name': "Jonas",
    'friends': 3,
    'bestFriend': 'Michael'
};

console.log(`${jonas.name} has ${jonas.friends} friends, and his best friend is called ${jonas.bestFriend}`);


let bmi = (mass, heigth) => mass / ((heigth) * 2);
console.log('bmi= ' + bmi(50000000, 500));
const mark = {
    name: 'Mark Miller',
    weight: 78,
    heigth: 1.69,
    calcBMI: function () { this.bmi = (this.weight) / (this.heigth ** 2); return this.bmi },
}
mark.calcBMI()
console.log(mark)
const john = {
    name: 'John Smith',
    weight: 92,
    heigth: 1.95,
    calcBmi: function () { this.bmi = (this.weight) / (this.heigth ** 2); return this.bmi }
}
john.calcBmi();
console.log(john)

console.log(`${(mark.bmi > john.bmi) ? mark.name : john.name}'s bmi BMI ${(mark.bmi > john.bmi) ? mark.bmi : john.bmi} is higher than ${(mark.bmi > john.bmi) ? john.name : mark.name}'s BMI ${(mark.bmi > john.bmi) ? john.bmi : mark.bmi}`)


