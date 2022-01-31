// Remember, we're gonna use strict mode in all scripts now!
"use strict";

function printforecast(array) {
  let answer = "";
  for (let i = 0; i < array.length; i++) {
    answer += ` ...${array[i]}° in ${i} days... `;
  }
  console.log(answer);
}

printforecast([17, 21, 23]);
