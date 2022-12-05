const fs = require('fs');
const { listeners } = require('process');
const instructions = fs.readFileSync('./data.txt', 'utf8').split(/\r?\n/)

let stacks = instructions.slice(0, instructions.findIndex(line => line.search(/[0-9]/) !== -1))

let stackArr = []
for (let i = 1; i < stacks[0].length; i += 4) {
  let column = ''
  stacks.forEach(row => {
    column += row[i]
  })
  stackArr.push(column.trim())
}

let moves = instructions.slice(instructions.findIndex(line => line.includes('move')))

moves.forEach(line => {
  let move = line.match(/(\d[\d\.]*)/g)

  let size = parseInt(move[0])
  let start = move[1] - 1
  let end = move[2] - 1

  let load = stackArr[start].substring(0, size).split('').reverse().join('')
  stackArr[end] = load += stackArr[end]
  stackArr[start] = stackArr[start].substring(size)
})

let top = ''
stackArr.forEach(column => top+= column[0])

console.log(stackArr)

console.log(top)