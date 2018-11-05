const fs = require('fs');
const inquirer = require('inquirer');

const prompts = inquirer.prompt;

const flowOptions = {
  "0": {
    "message": 'Do you know what I did last summer?',
    "choices": {
      "yes": "1",
      "no": "2",
    }
  },
  "1": {
    "message": 'Really?',
    "choices": {
      "yes": "done",
      "no": "done",
    }
  },
  "2": {
    "message": 'Good',
    "choices": {
      "cool, I'm going to go now": "3",
      "no": "done",
    }
  },
  "3": {
    "message": 'Are you sure you don\'t know anything?',
    "choices": {
      "yes": "done",
      "no": "done",
    }
  },
}

const ask = async (name, message="wha?", type='list') => {
  const path = name.split('/');
  const flowOption = flowOptions[path[path.length - 1]];
  const choices = Object.keys(flowOption.choices);
  const results = await prompts([
    {
      type,
      choices,
      name,
      message: flowOption.message,
    },
  ]);

  return flowOption.choices[results[name]];
}

const main = async () => {
  let yosh = true;
  let path = '0';
  let question = 'What?';
  while (yosh) {
    response = await ask(path, question);

    if (response === 'done') {
      yosh = false;
      break;
    }

    path += "/" + response;
    question = response;
    console.log(path, response);
  }
}

main();
