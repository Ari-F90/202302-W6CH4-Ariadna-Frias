/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/indent */
import http from 'http';
import url from 'url';
import { calculadora } from './calculator.js';

const PORT = process.env.PORT || 4300;

const server = http.createServer((req, resp) => {
  switch (req.method) {
    case 'GET':
      if (!req.url) {
        server.emit('error', new Error('Error 404'));
        resp.write(`<p>Error 404</p>`);
        return;
      }

      const { pathname, search } = url.parse(req.url);

      if (pathname !== '/calculator') {
        server.emit('error', new Error('Error - path not found'));
        resp.write(`<p>Error - path not found</p>`);
        return;
      }

      if (pathname === '/calculator') {
        const urlParams = new URLSearchParams(search!);
        const num1 = urlParams.get('a');
        const num2 = urlParams.get('b');

        if (isNaN(Number(num1)) || isNaN(Number(num2))) {
          server.emit(
            'error',
            new Error('Error - el dato introducido no es un número')
          );
          resp.write(`<p>Error - el dato introducido no es un número</p>`);
        } else {
          const answers = calculadora(num1, num2);
          resp.writeHead(200, { 'Content-Type': 'text/html' });
          resp.write(`<h1>Calculadora</h1>
    <h2>Resultados:</h2>
      <p>${num1} + ${num2} = ${answers.sum}</p>
      <p>${num1} - ${num2} = ${answers.rest}</p>
      <p>${num1} * ${num2} = ${answers.mult}</p>
      <p>${num1} / ${num2} = ${answers.div}</p>
    `);
        }
      }

      break;
    default:
      resp.write('Método desconocido');
      break;
  }

  resp.end();
});

server.on('error', () => {});

server.on('listening', () => {
  console.log('Listening in http://localhost:' + PORT);
});

server.listen(PORT);
