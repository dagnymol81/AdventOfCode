const fs = require('fs');
const rounds = fs.readFileSync('./guide.txt', 'utf8').split(/\r?\n/)

// X: Rock Y: Paper Z: Scissors
// A: Rock B: Paper C: Scissors

let sum = 0;

rounds.forEach(round => {

  if (round[2] === 'X') {
    sum += 1;
    if (round[0] === 'A') {
      sum += 3;
    } else if (round[0] === 'C') {
      sum += 6;
    }
  } else if (round[2] === 'Y') {
    sum += 2;
    if (round[0] === 'B') {
      sum += 3;
    } else if (round[0] === 'A') {
      sum += 6;
    }
  } else if (round[2] === 'Z') {
    sum += 3;
    if (round[0] === 'C') {
      sum += 3;
    } else if (round[0] === 'B') {
      sum += 6;
    }
  }
})

console.log(sum)