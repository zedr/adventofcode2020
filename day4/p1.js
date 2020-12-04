const fs = require('fs');

fs.readFile('input.txt', 'ascii', (err, data) => {
  let count = 0;

  data.split('\n\n').forEach(entry => {
    let requiredFields = [
      'byr',
      'iyr',
      'eyr',
      'hgt',
      'hcl',
      'ecl',
      'pid'
    ];
    entry.split(RegExp('[\n ]')).forEach(pair => {
      let [key, _] = pair.split(':');
      requiredFields = requiredFields.filter(k => k !== key);
    });
    if (requiredFields.length === 0) {
      count++;
    }
  });

  console.log(count);
});