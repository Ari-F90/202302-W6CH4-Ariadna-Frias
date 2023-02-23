/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/no-floating-promises */
import fs from 'fs/promises';

fs.writeFile('sample.txt', 'Promesa de nueva línea', {
  encoding: 'utf-8',
})
  .then(async () => fs.readFile('sample.txt', { encoding: 'utf-8' }))
  .then((data) => {
    console.log(data);
  });
