const fs = require('fs');

fs.readFile('input.txt', 'ascii', (err, data) => {
  const lineRxp = /(\d+)\-(\d+) (\w+): (.*)/;
  let count = 0;
  data.split('\n').forEach((line) => {
    let [lower, upper, char, str] = lineRxp.exec(line).slice(1, 5);
    let found = str.match(RegExp(char, 'g'));
    if (found) {
      let nChars = found.length;
      if (nChars >= parseInt(lower) && nChars <= parseInt(upper)) {
        count += 1;
      } 
    }
  });

  console.log(count);
});