const u = require('../utils');
const fileName = "input.txt";
const fullFileName = `${__dirname}/${fileName}`;

const rounds = u.readFileSync(fullFileName).split("\r\n");

const selection = {
  Rock : 0,
  Paper : 1,
  Scissors : 3
};

let score = 0;
rounds.forEach(r => {
  let [oponent, my] = r.split(' ');
  let oponentSelection = getSelection(oponent);
  let mySelection = getSelection(my);
  score += getPointsBasedOnSelection(mySelection);
  score += getPointsBasedOnResult(oponentSelection, mySelection);
});

console.log(`My score is ${score}`);

function getPointsBasedOnSelection(s){
  switch(s){
    case selection.Rock:
      return 1;
    case selection.Paper:
      return 2;
    case selection.Scissors:
      return 3;
    default:
      return 0;
  }
}

function getPointsBasedOnResult(oponent, my){
  if(oponent === my){
    return 3;
  }

  if((oponent === selection.Rock && my === selection.Paper)
    || (oponent === selection.Paper && my === selection.Scissors)
    || (oponent === selection.Scissors && my === selection.Rock)){
      return 6;
  }else{
    return 0;
  }
}

function getSelection(s){
  if (s === 'A' || s === 'X')
    return selection.Rock;

  if (s === 'B' || s === 'Y')
    return selection.Paper;

  if (s === 'C' || s === 'Z')
    return selection.Scissors;
}

