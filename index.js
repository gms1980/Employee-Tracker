const inquirer = require("inquirer");
const express = require("express");
const router = express.Router();

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
    ],
  },
];

function init() {
  inquirer.prompt(questions).then((answers) => {
    if (answers.selection === "View employee") {
      return viewEmployee();
    }
    if (answers.selection === "Create employee") {
      return viewEmployee();
    }
    if (answers.selection === "Delete employee") {
      return viewEmployee();
    }
    if (answers.selection === "View department") {
      return viewEmployee();
    }
    if (answers.selection === "Create department") {
      return viewEmployee();
    }
    if (answers.selection === "Delete department") {
      return viewEmployee();
    }
    if (answers.selection === "View role") {
      return viewEmployee();
    }
    if (answers.selection === "Create role") {
      return viewEmployee();
    }
    if (answers.selection === "Delete role") {
      return viewEmployee();
    }
    //console.log(answers)
  });
}
//View Employee Function
function viewEmployee() {
  console.log("View Employee");
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
init();
