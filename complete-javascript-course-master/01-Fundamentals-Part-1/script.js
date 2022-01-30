

let js = 'fun';
let sum = 1 + 2 + 3 + 4 + 5 + 6;
if (js == 'fun') alert('Javascript is ' + js + " " + sum);
//console.log(sum);

let age = 32;
age = 33;
console.log(sum + age);
verdade = (age > sum);
console.log(typeof (verdade) == "boolean")

const markMass = 78;
const markHeight = 1.69;
const johnMass = 95;
const johnHeight = 1.76;

const markBmi = (markMass) / (markHeight ** 2);
const johnBmi = johnMass / (johnHeight * johnHeight);

const markHigherBMI = markBmi > johnBmi;
const johnHigherBMI = johnBmi > markBmi;
console.log('mark bmi = ' + markBmi)
console.log('john bmi = ' + johnBmi)
console.log(markHigherBMI);

console.log(johnHigherBMI);