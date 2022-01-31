// Remember, we're gonna use strict mode in all scripts now!
"use strict";

function printforecast(array) {
  let answer = "";

  for (let i = 0; i < array.length; i++) {
    answer += ` ... ${array[i]}° in ${i + 1} days ... `;
  }

  console.log(answer);
}

printforecast([99, 25, 17, 21, 23]);
