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
  
  console.log(`A total of ${calories.length} elves were found`);
  console.log(`The max number of calories being carried is ${Math.max(...calories)}`);
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