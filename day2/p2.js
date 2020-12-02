const fs = require('fs');

fs.readFile('input.txt', 'ascii', (err, data) => {
  const lineRxp = /(\d+)\-(\d+) (\w+): (.*)/;
  let count = 0;
  data.split('\n').forEach((line) => {
    let [lower, upper, char, str] = lineRxp.exec(line).slice(1, 5);

    if ((str[parseInt(lower) - 1] === char) ^ (str[parseInt(upper) - 1] === char)) {
      count += 1;
    }
  });

  console.log(count);
});