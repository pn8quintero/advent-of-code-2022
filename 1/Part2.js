const u = require('../utils');
const fileName = "input.txt";
const fullFileName = `${__dirname}/${fileName}`;const fs = require('fs');

const elfCalories = u.readFileSync(fullFileName).split("\r\n\r\n");
const elfTotalCalories = elfCalories.map(c => c.split("\r\n").map(s => parseInt(s)).reduce((a,b) => {
  return a + b;
}));

const sortedCalories = elfTotalCalories.sort((a, b) => {
  return b - a;
});
const top3 = sortedCalories.slice(0,3).reduce((a,b) => {
  return a + b;
});

console.log(`The 3 elves carrying most calories are carrying ${top3} calories`);