const fs = require('fs');

const readFile = (filename) => new Promise((res, rej) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        rej(err);
      }

      res(data);
    })
  })

const writeFile = (filename, data) => new Promise((res, rej) => {
    fs.writeFile(filename, data, 'utf8', (err) => {
      if (err) {
        rej(err);
      }

      res();
    })
  })

  const appendFile = (filename, data) => new Promise((res, rej) => {
    fs.appendFile(filename, data, 'utf8', (err) => {
      if (err) {
        rej(err);
      }

      res();
    })
  })

module.exports = {
  readFile,
  writeFile,
  appendFile,
}
