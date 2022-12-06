const fs = require('fs');
const { listeners } = require('process');
const data = fs.readFileSync('./data.txt', 'utf8').split('')

for (let i = 0; i < data.length; i++) {
  const chunk = data.slice(i, i+14)
  const set = new Set(chunk)

  if (set.size === 14) {
    console.log(set)
    console.log(i + 14)
    break
  }

}