const Inquirer = require('inquirer');

const types = require('./types/types');

function teste() {
  Inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: 'Que tipo de commit você gostaria de fazer?',
      choices: types,
    },
  ]).then(answers => {
    console.log(answers);
  });
}

module.exports = teste;
