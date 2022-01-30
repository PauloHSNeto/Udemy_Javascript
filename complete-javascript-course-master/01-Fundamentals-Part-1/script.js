

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
console.log('mark bmi = ' + markBmi);
console.log('john bmi = ' + johnBmi);
if (markBmi > johnBmi) console.log("Mark BMI is higher");
else console.log("John BMI is higher");


dolphinsAverage = (97 + 112 + 101) / 3
koalasAverage = (109 + 95 + 106) / 3

if (dolphinsAverage >= 100 || koalasAverage >= 100) {

    if (dolphinsAverage > koalasAverage) { console.log("Dolphins win"); }
    else if (koalasAverage > dolphinsAverage) { console.log("Koalas win"); }
    else { console.log("DRAW"); }
}
else { console.log("NO winners") }


const bill = 275;
const tip = ((bill >= 50) && (bill <= 300)) ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);