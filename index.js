const fsp = require('./fsp');

fsp.writeFile('./lorem.txt', 'dudem abidesum').catch(err => console.error(err))

fsp.readFile('./lorem.txt').then(data => console.log(data), err => console.error(err));
