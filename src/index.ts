/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import http from 'http';
import number from 'inquirer/lib/prompts/number.js';
import url from 'url';
import { calculadora } from './calculator.js';

const PORT = process.env.PORT || '4300';

const server = http.createServer((req, resp) => {
  if (!req.url) {
    server.emit('error', new Error('Error 404'));
    return;
  }

  const { search, pathname } = url.parse(req.url);
  const urlParams = new URLSearchParams(search!);

  if (pathname !== '/calculator') {
    server.emit('error', new Error('Error - path not found'));
    resp.write(`<p>Error - path not found</p>`);
    return;
  }

  /* If (isNaN(num1+1) || isNaN(num2+1)) {
    server.emit(
      'error',
      new Error('Error - el dato introducido no es un número')
    );
    resp.write(`<p>Error - el dato introducido no es un número</p>`);
    return;
  } */

  const num1 = urlParams.get('a');
  const num2 = urlParams.get('b');

  const answers = calculadora(num1, num2);

  resp.writeHead(200, { 'Content-Type': 'text/html' });
  resp.write(`<h1>Calculadora</h1>
  <h3>Resultados:</h2>
   <p>${num1} + ${num2} = ${answers.sum}</p>
   <p>${num1} - ${num2} = ${answers.rest}</p>
    <p>${num1} * ${num2} = ${answers.mult}</p>
      <p>${num1} / ${num2} = ${answers.div}</p>
   `);

  resp.end();
});

server.on('listening', () => {
  console.log('Listening in http://localhost:' + PORT);
});

server.listen(PORT);
