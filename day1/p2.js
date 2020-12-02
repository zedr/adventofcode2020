const fs = require('fs');

fs.readFile('input.txt', 'ascii', (err, data) => {
  const numbers = Array.from(data.split('\n'), n => parseInt(n));
  
  numbers.forEach((num1, idx) => {
    numbers.slice(idx + 1).forEach((num2, ldx) => {
      numbers.slice(ldx + 1).forEach((num3) => {
        if (num1 + num2 + num3 === 2020) {
          console.log([num1, num2, num3]);
          console.log(num1 * num2 * num3);
          return;
        }
      });
    });
  });
});
