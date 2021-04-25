const inquirer = require("inquirer");
const express = require("express");
const router = express.Router();
const consoleTable = require("console.table");
//const db = require("db/connection");

//const mysql = require('mysql');

// //const connection = mysql.createConnection({
//     host: 'localhost',

//     // Your port; if not 3306
//     port: 3306,

//     // Your username
//     user: 'root',

//     // Your password
//     password: '',
//     database: 'schema.sql'
// });

// connection.connect(err => {
//     if (err) throw err;
//     prompt();
// });

//function init() {
//inquirer.prompt({
const questions = [
    {
    type: "list",
    name: "selection",
    message: "What would you like to do?",
    choices: [
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
// });
 //}
function init() {
  inquirer.prompt(questions).then((answers) => {
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
function viewEmployee() {
//   console.log("View Employee");
//   function viewEmployees() {
    var query = "SELECT * FROM employees";
    db.query(query, function(err, res) {
    if (err) throw err;
    console.log(res.length + " employees found!");
    console.table('All Employees:', res); 
    startApp();
    })
}
//}
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
  function viewEmployees() {
    var query = "SELECT * FROM employees";
    connection.query(query, function(err, res) {
    if (err) throw err;
    console.log(res.length + " employees found!");
    console.table('All Employees:', res); 
    startApp();
    })
}

function viewDepartments() {
    var query = "SELECT * FROM department";
    connection.query(query, function(err, res) {
    if(err)throw err;
    console.table('All Departments:', res);
    startApp();
    })
}

function viewRoles() {
    var query = "SELECT * FROM role";
    connection.query(query, function(err, res){
    if (err) throw err;
    console.table('All roles:', res);
    startApp();
    })
}
init();


//module.exports = sequelize;