const fs = require('fs');
const inquirer = require('inquirer');

const prompts = inquirer.prompt;

const flowOptions = {
  "0": {
    "message": 'Find the greatest common factor',
    "choices": {
      "ok": "1",
    }
  },
  "1": {
    "message": 'choose type?',
    "choices": {
      "Binomial": "2",
      "Trinomial": "10",
      "Polynomail Greater than three terms": "8",
    }
  },
  "10": {
    "message": 'decern information from the middle and last term signs',
    "choices": {
      "yes, done": "5",
    }
  },
  "2": {
    "message": 'Is the difference between two squares? (a^2 - b^2)',
    "choices": {
      "yes": "answer:0",
      "no": "3",
    }
  },
  "3": {
    "message": 'Is the difference of two cubes? (a^3 - b^3)',
    "choices": {
      "yes": "answer:1",
      "no": "4",
    }
  },
  "4": {
    "message": 'Is the sum of two cubes? (a^3 + b^3)',
    "choices": {
      "yes": "answer:2",
      "no": "done",
    }
  },
  "5": {
    "message": 'Are the first and last terms squares? (x^2 - 12x + 36)',
    "choices": {
      "yes": "9",
      "no": "6",
    }
  },
  "9": {
    "message": 'is the middle term equal to two times the product first and last term? ( ex: 2(6x) = 12x )',
    "choices": {
      "yes": "answer:3",
      "no": "6",
    }
  },
  "6": {
    "message": 'Is the coefficient of the first term equal to one? (x^2 - 14x − 40)',
    "choices": {
      "yes": "answer:4",
      "no": "7",
    }
  },
  "7": {
    "message": 'Is the coefficient of the first term greater than one? (2x^2 - 14x − 40)',
    "choices": {
      "yes": "answer:5",
      "no": "done",
    }
  },
  "8": {
    "message": 'Factor by grouping and return to step two',
    "choices": {
      "m'kay": "2",
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
