/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
import http from 'http';
import url from 'url';

const PORT = process.env.PORT || '4300';

const server = http.createServer((req, resp) => {
  switch (req.method) {
    case 'GET':
      if (!req.url) {
        server.emit('error', new Error('Invalid URL'));
        return;
      }

      // eslint-disable-next-line no-case-declarations
      const { pathname } = url.parse(req.url);
      resp.write('Hello world: estos son tus datos de ' + pathname);
      break;
    case 'POST':
      break;
    case 'PATCH':
    case 'DELETE':
      resp.write('Hello world, de momento no esta implementado ' + req.method);
      break;
    default:
      resp.write('Hello world, no conozco el método ' + req.method);
      break;
  }

  resp.end();
});

server.on('listening', () => {
  console.log('Listening in http://localhost:' + PORT);
});

server.listen(PORT);
