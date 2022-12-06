const fs = require('fs');
const { listeners } = require('process');
const data = fs.readFileSync('./data.txt', 'utf8')

let index
for (let i = 0; i < data.length; i++) {
  let chunk = data.substring(i+1, i+4)
  
  if (chunk.includes(data[i])) {
    continue
  } else {
    chunk = data.substring(i+2, i+4)
    if (chunk.includes(data[i+1])) {
      continue
    } else {
      chunk = data.substring(i+3, i+4) 
        if (chunk.includes(data[i+2])) {
          continue
        } else {
          index = i + 4
          break
        }
      }
    }
  }

  console.log(index)
