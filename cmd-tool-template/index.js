const prompts = require('prompts');
const fs = require('fs');
// const questions = require('./questions');
const questions = require('./questions.json');
const format = (data) => {
  return JSON.stringify(data);
};

const main = async () => {
  const results = await prompts(questions);
  const formattedData = format(results);

  fs.writeFile('bank.json', formattedData, 'utf8', (err) => {
    if (err) {
      return console.log('choo');
    }
  });
}

main();
