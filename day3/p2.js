const fs = require('fs');

fs.readFile('input.txt', 'ascii', (err, data) => {
  const slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2]
  ];
  let result = 1;

  slopes.forEach(xy => {
    let count = 0;
    let offset = 0;
    let [xStep, yStep] = xy;
    data.split('\n').slice(1).forEach((line, idx) => {
      if (!((idx + 1) % yStep)) {
        offset = (offset + xStep) % line.length;
        if (line[offset] === '#') {
          count++;
        }
      }
    });
    result *= count;
  });
  
  console.log(result);
});