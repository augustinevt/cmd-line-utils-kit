const fs = require('fs');
const inquirer = require('inquirer');

const prompts = inquirer.prompt;

const possesivePronouns = {
  "mein": {
    "f": {
      "dative": "meiner",
      "nominative": "meine",
      "akkusative": "meinen"
    },
    "m": {
      "dative": "meiner",
      "nominative": "meine",
      "akkusative": "meinen"
    },
    "n": {
      "dative": "meiner",
      "nominative": "meine",
      "akkusative": "meinen"
    },
  "dein": {
    "f": {
      "dative": "deiner",
      "nominative": "meine",
      "akkusative": "meinen"
    },
    "m": {
      "dative": "meiner",
      "nominative": "meine",
      "akkusative": "meinen"
    },
    "n": {
      "dative": "meiner",
      "nominative": "meine",
      "akkusative": "meinen"
    }
  }
}

const nomitive = {
  "0": {
    "message": 'Do you know what I did last summer?'
    }
  },
}

const ask = async (name, message="wha?", type='input') => {
  const path = name.split('/');
  const flowOption = flowOptions[path[path.length - 1]];
  const choices = Object.keys(flowOption.choices);
  const results = await prompts([
    {
      type,
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
