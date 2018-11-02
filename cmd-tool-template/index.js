// const questions = require('./questions');
// const questions = require('./questions.json');
const prompts = require('prompts');
const bank = require('./bank.json');
const fs = require('fs');
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
  return data.shuffle().map((data) => {
    return {
      type: 'text',
      name: data.prompt,
      message: data.prompt,
      validate: (value) => value !== data.answer ? false : true,
      initial: 'what is this?',
    };
  });
};

const main = async () => {
  const  parsedData = format(bank);
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
