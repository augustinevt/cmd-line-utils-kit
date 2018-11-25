const fs = require('fs');
const inquirer = require('inquirer');
const rootDirectory = require('./sets/index');
const prompts = inquirer.prompt;

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

// flowchart with output
const outputFlowchart = async (flowchart) => {
  const output = {};
  let flag = true;
  let current = flowchart["0"];

  console.log(current)


  while (flag) {
    const choices = current.choices ? Object.keys(current.choices) : [];
    const type = current.type ? current.type : 'input';
    const results = await prompts([
      {
        type,
        name: 'answer',
        message: current.message,
        choices,
      },
    ]);

    const answer = type === "list" ?
      current.choices[results.answer]:
      results.answer;

    if (answer === "done") {
      flag = false;
      break;
    }

    output[current.id] = results.answer;

    const next = current.links[results.answer] ?
      current.links[results.answer]:
      current.links.default;

    current = flowchart[next];
  }

  return output;
}

// SELECT FLOWCHART
const selectFlowchart = async (root) => {
  let isDirectory = true;
  let path = '';
  let currentSelection = root;
  let flowchart;

  while (isDirectory) {
    // console.log(currentSelection)
    let choices = Object.keys(currentSelection);

    const foo = await prompts([
      {
        name: 'selection',
        type: 'list',
        message: 'Select',
        choices,
      },
    ]);
    currentSelection = currentSelection[foo.selection];

    if (!currentSelection.isDirectory) {
      isDirectory = false;
      flowchart = currentSelection;
    } else {
      path += `${foo.selection}`;
    }
  }

  return flowchart;
}

// MAIN
const main = async () => {
  while (true) {
    const flowchart = await selectFlowchart(rootDirectory);
    if (flowchart.type === "output") {
      const results = await outputFlowchart(flowchart);
      console.log(results);
    } else {
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
      }
    }
  }
}

main();
