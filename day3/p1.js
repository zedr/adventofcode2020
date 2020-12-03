const fs = require('fs');

fs.readFile('input.txt', 'ascii', (err, data) => {
  let count = 0;
  let offset = 0;
  data.split('\n').slice(1).forEach((line) => {
    offset = (offset + 3) % line.length;
    if (line[offset] === '#') {
      count++;
    }
  });
  console.log(count);
});