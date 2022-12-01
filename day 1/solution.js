const fs = require('fs');
const foods = fs.readFileSync('./data.txt', 'utf8').split(/\r?\n/)
const backpacks = []
let calories = 0;

foods.forEach((food, i) => {
  if (food.search(/[\d]/) != -1) { //there are numbers
    calories += parseInt(food)
  } else { //new elf
    backpacks.push(calories)
    calories = 0
  }
})
backpacks.push(calories) //final set

const mostCalories = Math.max(...backpacks)

backpacks.sort((a, b) => b - a)
const topThree = backpacks[0] + backpacks[1] + backpacks[2]
console.log(topThree)


