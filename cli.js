const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// Read schema.sql
const schemaPath = path.join(__dirname, 'db', 'schema.sql');
const schemaSql = fs.readFileSync(schemaPath, 'utf8');

// Read seeds.sql
const seedsPath = path.join(__dirname, 'db', 'seeds.sql');
const seedsSql = fs.readFileSync(seedsPath, 'utf8');

// Read queries.sql
const queriesPath = path.join(__dirname, 'db', 'queries.sql');
const queriesSql = fs.readFileSync(queriesPath, 'utf8');

// Prompt user for actions
function promptAction() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit'
      ]
    }
  ]).then(answer => {
    switch (answer.action) {
      case 'View all departments':
        // Code to handle view all departments
        break;
      case 'View all roles':
        // Code to handle view all roles
        break;
      case 'View all employees':
        // Code to handle view all employees
        break;
      case 'Add a department':
        // Code to handle add a department
        break;
      case 'Add a role':
        // Code to handle add a role
        break;
      case 'Add an employee':
        // Code to handle add an employee
        break;
      case 'Update an employee role':
        // Code to handle update an employee role
        break;
      case 'Exit':
        console.log('Exiting...');
        process.exit(0);
        break;
      default:
        console.log('Invalid choice');
        break;
    }
  });
}

// Start the CLI
promptAction();