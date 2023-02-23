import fs from 'fs';

const data = fs.readFileSync('sample.txt', { encoding: 'utf8' });
console.log(data);
fs.writeFileSync('sample.txt', 'nueva línea', { encoding: 'utf-8' });

fs.appendFile('sample.txt', '\nLínea añadida', { encoding: 'utf-8' }, () => {
  fs.readFile('sample.txt', { encoding: 'utf-8' }, (_error, data) => {
    console.log('Async');
    console.log(data);
  });
});
