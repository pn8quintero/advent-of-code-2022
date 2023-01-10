const fs = require('fs');

function readFileSync(fileName){
    try {
        const data = fs.readFileSync(fileName, 'utf8').toString();
        return data;
      } catch (err) {
        console.error(err);
      }
}

module.exports = { readFileSync };