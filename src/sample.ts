/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { program } from 'commander';
import inquirer from 'inquirer';

program.option('--instal').option('-v,--version');
program.parse();

const options = program.opts();

if (options.version) {
  console.log('Version 1');
}

console.log('Hello sample');

inquirer
  .prompt([
    {
      name: 'userName',
      message: 'Dime tu nombre',
      type: 'input',
    },
    {
      name: 'userAge',
      message: 'Dime tu edad',
      type: 'number',
    },
  ])
  .then((answers) => {
    console.log('Hola ' + answers.userName);
  });
