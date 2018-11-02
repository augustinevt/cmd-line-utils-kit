const prompts = require('prompts');

const questions = [
  {
    type: 'text',
    name: 'input1',
    message: 'What in the first input?',
    validate: (value) => value === 'invalid' ? false : true,
    initial: 'what is this?',
  }
];

const main = async () => {
  const results = await prompts(questions);
  console.log(results)
}

main();
