
const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const util = require("util")
const PORT = process.env.PORT || 3006;

    const connection = mysql.createConnection(
        {
          host: "localhost",
          port: "3306",
          user: "root",
          password: "shimshim",
          database: "employee_tracker",
        },
        console.log("Connected to the employee_tracker database")
      );

const questions = [
    {
    type: "list",
    name: "selection",
    message: "What would you like to do?",
    choices: [
    "View All Employees",
      "View employee",
      "Create employee",
      "Delete employee",
      "View department",
      "Create department",
      "Delete department",
      "View role",
      "Create role",
      "Delete role",
      "Exit"
    ],
}
];

function init() {
  inquirer.prompt(questions).then((answers) => {
    if (answers.selection === "View All Employees") {
        return viewAllEmployee();
      }
    if (answers.selection === "View employee") {
      return viewEmployee();
    }
    if (answers.selection === "Create employee") {
      return createEmployee();
    }
    if (answers.selection === "Delete employee") {
      return deleteEmployee();
    }
    if (answers.selection === "View department") {
      return viewDepartment();
    }
    if (answers.selection === "Create department") {
      return createDepartment();
    }
    if (answers.selection === "Delete department") {
      return deleteDepartment();
    }
    if (answers.selection === "View role") {
      return viewRole();
    }
    if (answers.selection === "Create role") {
      return createRole();
    }
    if (answers.selection === "Delete role") {
      return deleteRole();
    }
    if (answer.selection === "Exit") {
        connection.end();
    }
    console.log(answers)
    
  });
}
//View Employee Function
// function viewEmployee() {
// //   console.log("View Employee");
// //   function viewEmployees() {
//     var query = 'SELECT * FROM Employee';
//     connection.query(query, function(err, res) {
//     if (err) throw err;
//     //console.log(res.length + " employees found!");
//     console.table('All Employees:', res); 
//     init();
//     })
// }
//}
function viewAllEmployees() {
    const query = `SELECT employeeid, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM employee
    LEFT JOIN employee manager on manager.id = employee.manager_id
    INNER JOIN role ON (role.id = employee.role_id)
    INNER JOIN department ON (department.id = role.department_id)
    ORDER BY employee.id;`;
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('\n');
        console.log('VIEW ALL EMPLOYEES');
        console.log('\n');
        console.table(res);
        prompt();
    });
}
function createEmployee() {
  console.log("Create Employee");
}
function deleteEmployee() {
  console.log("Delete Employee");
}
//View Department Function
function viewDepartment() {
  console.log("View Department");
}
function createDepartment() {
  console.log("Create Department");
}
function deleteDepartment() {
  console.log("Delete Department");
}
//View Role Function
function viewRole() {
  console.log("View Role");
}
function createRole() {
  console.log("Create Role");
}
function deleteRole() {
  console.log("Delete Role");
}

// function viewEmployee() {
//     inquirer
//       .prompt({
//         name: "viewEmployee",
//         type: "input",
//         message: "What employee would you like to search for (by last name)?"
//       })
//       .then(function (answer) {
//         var query = "SELECT first_name, last_name, id FROM Employee WHERE ?";
//         connection.query(query, { last_name: answer.viewEmployee }, function (err, res) {
//           for (var i = 0; i < res.length; i++) {
//             console.log("First Name: " + res[i].first_name + " || Last name: " + res[i].last_name + " || Id: " + res[i].id);
//           }
//           runSearch();
//         });
//       });
//   }
//   function viewEmployees() {
//     var query = `SELECT * FROM Employee`;
//     connection.query(query, function(err, res) {
//     if (err) throw err;
//     //console.log(res.length + " employees found!");
//     console.table('All Employees:', res); 
//     init();
//     })
// }

function viewDepartments() {
    var query = "SELECT * FROM department";
    connection.query(query, function(err, res) {
    if(err)throw err;
    console.table('All Departments:', res);
    init();
})
}

function viewRoles() {
    var query = "SELECT * FROM role";
    connection.query(query, function(err, res){
    if (err) throw err;
    console.table('All roles:', res);
    init();
    })
}
init();


//module.exports = sequelize;