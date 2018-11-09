const fs = require('fs');
const inquirer = require('inquirer');

const prompts = inquirer.prompt;

const bank = require('./bank.json');
const questions = require('./questions.js');

Array.prototype.shuffle = function() {
  let input = this;

  input.forEach((item, i) => {
    const randomIndex = Math.floor(Math.random() * (i +1));

    input[randomIndex] = input[i];
    input[i] = item;
  });

  return input;
}

const format = (data) => {
  return data.questions.shuffle().map((datum) => {
    // console.log(data.formulas[datum.formula])
    return {
      type: 'input',
      name: datum.text,
      message: datum.text,
      validate: (value) => value !== data.formulas[datum.formula] ? "incorrect" : true,
    };
  });
};

const main = async () => {
  const parsedData = format(bank);
  const results = prompts(parsedData);
}

main();

// const data = [];
// for( let i = 1; i < 13; i++) {
//   for( let j = 1; j < 13; j++) {
//     data.push(
//       {
//         prompt: `${i} x ${j}`,
//         answer: `${i*j}`
//       }
//     )
//   }
// }
