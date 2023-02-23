/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/indent */
import http from 'http';
import url from 'url';
import { addCountry } from './countrys';
import * as dotenv from 'dotenv';

dotenv.config();

// eslint-disable-next-line @typescript-eslint/naming-convention
const PORT = process.env.PORT || '4300';

const server = http.createServer((req, resp) => {
  switch (req.method) {
    case 'GET':
      if (!req.url) {
        server.emit('error', new Error('Invalid URL'));
        return;
      }

      const { pathname } = url.parse(req.url);

      resp.write('hello world: estos son tus datos de' + pathname);
      break;
    case 'POST':
      addCountry({});
      break;
    case 'PATCH':
    case 'DELETE':
      resp.write('Hello world: de momento no está implementado ' + req.method);
      break;
    default:
      resp.write('Hello world: no conozco el método ' + req.method);
      break;
  }

  resp.end();
});

server.on('listening', () => {
  console.log('Listening in http://localhost:' + PORT);
});
server.listen(PORT);
