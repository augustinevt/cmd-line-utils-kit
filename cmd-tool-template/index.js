const fs = require('fs');
const inquirer = require('inquirer');

const prompts = inquirer.prompt;



const flowchartOptions = {
  "0": {
    "message": 'Choose a flowchart',
    "choices": {
      "A": "a",
      "b": "b",
      "c": "c",
    }
  },
}

const a = {
  "0": {
    "message": 'a flowchart?',
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
const b = {
  "0": {
    "message": 'b flowcahrt',
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
const c = {
  "0": {
    "message": 'C flowchart',
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

const flowchartMap = {
  a,
  b,
  c
}

const executeFlowchart = async (name, message="wha?", flowchart, type='list') => {
  const path = name.split('/');
  const flowOption = flowchart[path[path.length - 1]];
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

const selectFlowchart = async () => {
  const foo = await prompts([
    {
      name: 'selectFlowchart',
      type: 'list',
      message: 'Choose a flowchart',
      choices: ["a", "b", "c"]
    },
  ]);

  return foo.selectFlowchart;
}


const main = async () => {
  while (true) {
    const flowChartSelect = await selectFlowchart();
    const flowchart = flowchartMap[flowChartSelect];

    let yosh = true;
    let path = '0';
    let question = 'What?';
    while (yosh) {
      response = await executeFlowchart(path, question, flowchart);

      if (response === 'done') {
        yosh = false;
        break;
      }

      path += "/" + response;
      question = response;
      console.log(path, response);
    }
  }
}

main();
