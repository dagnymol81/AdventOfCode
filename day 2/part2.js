const fs = require('fs');
const rounds = fs.readFileSync('./guide.txt', 'utf8').split(/\r?\n/)

// A: Rock B: Paper C: Scissors
// X: Lose, Y: Draw, Z: Win
// Rock 1, Paper 2, Scissors 3

let sum = 0;

rounds.forEach(round => {
  if (round[2] === 'X') {
    if (round[0] === 'A') {
      sum += 3
    } else if (round[0] === 'B') {
      sum += 1
    } else if (round[0] === 'C') {
      sum += 2
    }
  } else if (round[2] === 'Y') {
    sum += 3
    if (round[0] === 'A') {
      sum += 1
    } else if (round[0] === 'B') {
      sum += 2
    } else if (round[0] === 'C') {
      sum += 3
    }
  } else if (round[2] === 'Z') {
    sum += 6
    if (round[0] === 'A') {
      sum += 2
    } else if (round[0] === 'B') {
      sum += 3
    } else if (round[0] === 'C') {
      sum += 1
    }
  }
})

console.log(sum)