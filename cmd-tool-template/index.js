const fs = require('fs');
const inquirer = require('inquirer');

const prompts = inquirer.prompt;

const possesivePronouns = require('./bank');

const main = async () => {
    console.log(possesivePronouns['dein']['neuter']['akkusative'])

}

main();
