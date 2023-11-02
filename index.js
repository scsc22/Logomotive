const inquirer = require('inquirer');
const { createLogo } = require('./lib/logoGenerator');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: (input) => {
      if (input.length <= 3) {
        return true;
      }
      return 'Please enter up to three characters.';
    },
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (keyword or hex):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (keyword or hex):',
  },
];

inquirer.prompt(questions).then((answers) => {
  createLogo(answers);
});
