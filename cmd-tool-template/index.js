const fs = require('fs');
const inquirer = require('inquirer');
const { motivation, weirdRoom } = require('./sets/index');
const prompts = inquirer.prompt;

const flowchartMap = { motivation, weirdRoom };

// EXECUTE FLOWCHART
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

// SELECT FLOWCHART
const selectFlowchart = async () => {
  const foo = await prompts([
    {
      name: 'selectFlowchart',
      type: 'list',
      message: 'Choose a flowchart',
      choices: ['motivation', 'weirdRoom']
    },
  ]);

  return foo.selectFlowchart;
}

// MAIN
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
