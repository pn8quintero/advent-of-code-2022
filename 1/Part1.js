const u = require('../utils');
const fileName = "input.txt";
const fullFileName = `${__dirname}/${fileName}`;

const elfCalories = u.readFileSync(fullFileName).split("\r\n\r\n");
const elfTotalCalories = elfCalories.map(c => c.split("\r\n").map(s => parseInt(s)).reduce((a,b) => {
  return a + b;
}))

console.log(`A total of ${elfCalories.length} elves were found`);
console.log(`The max number of calories being carried is ${Math.max(...elfTotalCalories)}`);
