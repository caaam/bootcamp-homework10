const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager');

const employeeList = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the manager\'s name?'
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'What is the manager\'s employee ID?',
        validate(value) {
            const numeric = parseInt(value);
            if (!isNaN(numeric)) {
                return true;
            }
        
            return 'Please enter a valid integer value instead of: <' + value + '>';     
        },
    },
    {
        type: 'input', // TODO: validation
        name: 'managerEmail',
        message: 'What is the manager\'s email address?'
    },
    {
        type: 'input',
        name: 'managerOfficeNum',
        message: 'What is the manager\'s office number?',
        validate(value) {
            const numeric = parseInt(value);
            if (!isNaN(numeric)) {
                return true;
            }
        
            return 'Please enter a valid integer value instead of: <' + value + '>';     
        },
    },
    {
        type: 'list',
        name: 'nextUser',
        message: 'What employee type would you like to add next?',
        choices: [
            'Engineer',
            'Intern',
            new inquirer.Separator(),
            'Finished adding users'
        ],
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the engineer\'s name?'
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'What is the engineer\'s employee ID?',
        validate(value) {
            const numeric = parseInt(value);
            if (!isNaN(numeric)) {
                return true;
            }
        
            return 'Please enter a valid integer value instead of: <' + value + '>';     
        },
    },
    {
        type: 'input', // TODO: validation
        name: 'engineerEmail',
        message: 'What is the engineer\'s email address?'
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: 'What is the engineer\'s GitHub username?'
    },
    {
        type: 'list',
        name: 'nextUser',
        message: 'What employee type would you like to add next?',
        choices: [
            'Engineer',
            'Intern',
            new inquirer.Separator(),
            'Finished adding users'
        ],
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'What is the intern\'s name?'
    },
    {
        type: 'input',
        name: 'internId',
        message: 'What is the intern\'s employee ID?',
        validate(value) {
            const numeric = parseInt(value);
            if (!isNaN(numeric)) {
                return true;
            }
        
            return 'Please enter a valid integer value instead of: <' + value + '>';     
        },
    },
    {
        type: 'input', // TODO: validation
        name: 'internEmail',
        message: 'What is the intern\'s email address?'
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'What is the intern\'s school?'
    },
    {
        type: 'list',
        name: 'nextUser',
        message: 'What employee type would you like to add next?',
        choices: [
            'Engineer',
            'Intern',
            new inquirer.Separator(),
            'Finished adding users'
        ],
    }
];

let manager;
let employees = [];

function addEngineer() {
    inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
        let engineer = new Engineer(engineerAnswers.engineerName, engineerAnswers.engineerId, engineerAnswers.engineerEmail, engineerAnswers.engineerGithub);
        employees.push(engineer);
        if (engineerAnswers.nextUser == 'Engineer') {
            addEngineer();
        } else if (engineerAnswers.nextUser == 'Intern') {
            addIntern();
        } else if (engineerAnswers.nextUser == 'Finished adding users') {
            processHTML(employees);
        }
    })
}

function addIntern() {
    inquirer.prompt(internQuestions).then((internAnswers) => {
        let intern = new Intern(internAnswers.internName, internAnswers.internId, internAnswers.internEmail, internAnswers.internSchool);
        employees.push(intern);
        if (internAnswers.nextUser == 'Engineer') {
            addEngineer();
        } else if (internAnswers.nextUser == 'Intern') {
            addIntern();
        } else if (internAnswers.nextUser == 'Finished adding users') {
            processHTML(employees);
        }
    })
}

function getAdditionalInfo(employee) {
    if (employee.getRole() == "Manager") {
        return `Office number: ${employee.getOfficeNum()}`;
    } else if (employee.getRole() == "Engineer") {
        return `GitHub Username: ${employee.getGithub()}`;
    } else if (employee.getRole() == "Intern") {
        return `School: ${employee.getSchool()}`;
    }
    return "";
}

function processHTML(employees) {
    let outputHTML = "";
    outputHTML += `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <body>
        <div class="container-fluid bg-danger bg-gradient">
            <header class="d-flex justify-content-center py-5 h1 text-white">
                My Team
            </header>
        </div>
        <div class="container-fluid">
            <div class="row justify-content-center">`;
    for (let i = 0; i < employees.length; i++) {
        outputHTML += `<div class="col-sm-4 p-4">
        <div class="card">
            <div class="card-header bg-primary text-white">
                <h2 class="card-title">
                    ${employees[i].getName()}
                </h2>
                <h4>
                    ${employees[i].getRole()}
                </h4>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID Number: ${employees[i].getId()}</li>
                    <li class="list-group-item">Email Address: <a href="mailto:${employees[i].getEmail()}">${employees[i].getEmail()}</a></li>
                    <li class="list-group-item">${getAdditionalInfo(employees[i])}</li>
                </ul>
            </div>
        </div>
    </div>`;
    }

    outputHTML += `</div>
    </div>

</body>
</html>`;

    fs.writeFile('./dist/output.html', outputHTML, err => {
        if (err) {
          console.error(err)
          return
        }
        //file written successfully
      })
      
}

inquirer.prompt(managerQuestions).then((managerAnswers) => {
    manager = new Manager(managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerEmail, managerAnswers.managerOfficeNum);
    employees.push(manager);
    if (managerAnswers.nextUser == 'Engineer') {
        addEngineer();
    } else if (managerAnswers.nextUser == 'Intern') {
        addIntern();
    } else if (managerAnswers.nextUser == 'Finished adding users') {
        processHTML(employees);
    }
});