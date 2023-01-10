const fs = require('fs');
const readline = require("readline");
const fileName = "./input.txt";

console.log("About to read input");
let calories = [];
let caloriesCounter = 0;

const rl = readline.createInterface({
    input: fs.createReadStream(fileName)
  });

rl.on('line', line => {
  handleLine(line);
}).on('close', line => {
  handleLine(line);
  
  if(calories.length < 3){
    console.log("There are less than 3 elves carrying food.");
  }
  else{
    const sortedCalories = calories.sort((a, b) => {
      return b - a;
    });
    const top3 = sortedCalories.slice(0,3).reduce((a,b) => {
      return a + b;
    });
    console.log(`The 3 elves carrying most calories are carrying ${top3} calories`);
  }
});

function handleLine(line){
  if(!line){
    calories.push(caloriesCounter);
    caloriesCounter = 0;
  }
  else{
    caloriesCounter += parseInt(line);
  }
}