const fs = require('fs');
const assignments = fs.readFileSync('./data.txt', 'utf8').split(/\r?\n/)

let contains = 0

assignments.forEach(pair => {
  pairs = pair.split(',')
  firstElf = pairs[0].split('-')
  secondElf = pairs[1].split('-')
  if (parseInt(firstElf[0]) >= parseInt(secondElf[0]) && parseInt(firstElf[1]) <= parseInt(secondElf[1])) {
    console.log(secondElf + '(second) contains ' + firstElf)
    contains++
  }
  else if (parseInt(secondElf[0]) >= parseInt(firstElf[0]) && parseInt(secondElf[1]) <= parseInt(firstElf[1])) {
    console.log(firstElf + '(first) contains ' + secondElf)
    contains++
  }
  })

  console.log('There are ' + contains + ' results')