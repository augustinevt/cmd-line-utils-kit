const fs = require('fs');
const inquirer = require('inquirer');

const prompts = inquirer.prompt;

// -------------
//  ELASTICITY OF DEMAND
// -------------

const elasticity = async () => {
  const results = await prompts([
    {
      type: 'input',
      name: 'quantityDemandedOne',
      message: 'Quantity Demanded One'
    },
    {
      type: 'input',
      name: 'quantityDemandedTwo',
      message: 'Quantity Demanded Two'
    },
    {
      type: 'input',
      name: 'priceOne',
      message: 'Price One'
    },
    {
      type: 'input',
      name: 'priceTwo',
      message: 'Price Two'
    },
  ])

  const quantDem1 = parseInt(results.quantityDemandedOne);
  const quantDem2 = parseInt(results.quantityDemandedTwo);
  const price1 = parseInt(results.priceOne);
  const price2 = parseInt(results.priceTwo);

  const changeInQuantity = ((quantDem2 - quantDem1) / (quantDem2 + quantDem1));
  const changeInPrice = ((price2 - price1) / (price2 + price1));

  const result = Math.abs(changeInQuantity / changeInPrice);
  const verdict = result > 1 ? 'Elastic' : 'Inelastic';

  console.log(result, verdict);
}

// -------------
//  MAIN
// -------------

const main = async () => {

  const results1 = await prompts([{
    type: 'list',
    name: 'selectUtil',
    message: 'Choose Function',
    choices: ['elasticity', 'test']
  }]);

  if (results1.selectUtil === 'elasticity') {
    elasticity();
  }
}

main();
