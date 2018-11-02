const questions = [{
    type: 'text',
    name: 'input1',
    message: 'What in the first input?',
    validate: (value) => value === 'invalid' ? false : true,
    initial: 'what is this?',
  }];

module.exports = questions;
