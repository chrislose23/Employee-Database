const inquirer = require('inquirer');
const http = require('http');
// const { app, pool } = require('./server'); // Import the app and pool instances from server.js

// Options for HTTP requests
const options = {
  hostname: 'localhost',
  port: 3001, // Assuming your server is running on port 3001
  headers: {
    'Content-Type': 'application/json'
  }
};

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
        // Handle viewing all departments
        viewDepartments();
        break;
      case 'View all roles':
        // Handle viewing all roles
        break;
      case 'View all employees':
        // Handle viewing all employees
        break;
      case 'Add a department':
        // Handle adding a department
        break;
      case 'Add a role':
        // Handle adding a role
        break;
      case 'Add an employee':
        // Handle adding an employee
        break;
      case 'Update an employee role':
        // Handle updating an employee role
        break;
      case 'Exit':
        console.log('Exiting...');
        break;
      default:
        console.log('Invalid choice');
        break;
    }
  });
}

function viewDepartments() {
  makeGetRequest('/departments', data => {
    console.table(data.data);
    promptAction(); // Prompt for next action
  });
}

function viewRoles() {
  makeGetRequest('/roles', data => {
    console.table(data.data);
    promptAction(); // Prompt for next action
  });
}

function viewEmployees() {
  makeGetRequest('/employees', data => {
    console.table(data.data);
    promptAction(); // Prompt for next action
  });
}

function addDepartment() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'dpt_name',
      message: 'Enter the department name:'
    }
  ]).then(answer => {
    makePostRequest('/departments', answer, () => {
      console.log('Department added successfully');
      promptAction(); // Prompt for next action
    });
  });
}

function addRole() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the role title:'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Enter the role salary:'
    },
    {
      type: 'input',
      name: 'department_id',
      message: 'Enter the department ID for the role:'
    }
  ]).then(answer => {
    makePostRequest('/roles', answer, () => {
      console.log('Role added successfully');
      promptAction(); // Prompt for next action
    });
  });
}

function addEmployee() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'Enter the employee\'s first name:'
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'Enter the employee\'s last name:'
    },
    {
      type: 'input',
      name: 'role_id',
      message: 'Enter the role ID for the employee:'
    },
    {
      type: 'input',
      name: 'manager_id',
      message: 'Enter the manager ID for the employee:'
    }
  ]).then(answer => {
    makePostRequest('/employees', answer, () => {
      console.log('Employee added successfully');
      promptAction(); // Prompt for next action
    });
  });
}

// Helper function to make HTTP GET requests
function makeGetRequest(path, callback) {
  const req = http.request({ ...options, path, method: 'GET' }, res => {
    let data = '';
    res.on('data', chunk => {
      data += chunk;
    });
    res.on('end', () => {
      callback(JSON.parse(data));
    });
  });

  req.on('error', error => {
    console.error('Error:', error.message);
  });

  req.end();
}

// Start the CLI
promptAction();