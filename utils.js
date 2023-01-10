const fs = require('fs');

function readFileSync(fileName){
    try {
        return fs.readFileSync(fileName, 'utf8').toString();
      } catch (err) {
        console.error(err);
      }
}

module.exports = { readFileSync };