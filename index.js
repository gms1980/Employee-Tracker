const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");
const util = require("util");
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
      // "Delete department",
      "View role",
      // "Create role",
      // "Delete role",
      "End",
    ],
  },
];

function init() {
  inquirer.prompt(questions).then((answers) => {
    if (answers.selection === "View All Employees") {
      return viewAllEmployees();
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
    // if (answers.selection === "Delete department") {
    //   return deleteDepartment();
    // }
    if (answers.selection === "View role") {
      return viewRole();
    }
    // if (answers.selection === "Create role") {
    //   return createRole();
    // }
    // if (answers.selection === "Delete role") {
    //   return deleteRole();
    // } 
    else if (answer.selection === "End") {
      connection.end();
    }
    console.log(answers);
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
// function deleteDepartment() {
//   console.log("Delete Department");
// }
function viewRole() {
  console.log("View Role");
}
// function createRole() {
//   console.log("Create Role");
// }
// function deleteRole() {
//   console.log("Delete Role");
// }
function viewEmployee() {
  console.log("Delete Role");
}

// Employee Functions
function viewAllEmployees() {
  var query = `SELECT employee.id, employee.first_name, employee.last_name, role.id, department.id AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
    FROM Employee
    LEFT JOIN employee manager on manager.id = employee.manager_id
    INNER JOIN role ON (role.id = employee.role_id)
    INNER JOIN department ON (department.id = role.department_id)
    ORDER BY employee.id;`;
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.log("\n");
    console.log("VIEW ALL EMPLOYEES");
    console.log("\n");
    console.table(res);
    init();
  });
}
function viewEmployee() {
  inquirer
    .prompt({
      name: "viewEmployee",
      type: "input",
      message: "What employee would you like to search for?",
    })
    .then(function (answer) {
      var query = "SELECT first_name, last_name, id FROM Employee WHERE ?";
      connection.query(
        query,
        { last_name: answer.viewEmployee },
        function (err, res) {
          for (var i = 0; i < res.length; i++) {
            console.log(
              "First Name: " +
                res[i].first_name +
                " || Last name: " +
                res[i].last_name +
                " || Id: " +
                res[i].id
            );
          }
          init();
        }
      );
    });
}
function createEmployee() {
  console.log("Inserting an employee!");

  var query = `SELECT r.id, r.title, r.salary 
        FROM role r`;

  connection.query(query, function (err, res) {
    if (err) throw err;

    const roleChoices = res.map(({ id, title, salary }) => ({
      value: `${id}`,
      title: `${title}`,
      salary: `${salary}`,
    }));

    console.table(res);
    console.log("RoleToInsert!");

    promptInsert(roleChoices);
  });
}

function promptInsert(roleChoices) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "What is the employee's first name?",
      },
      {
        type: "input",
        name: "last_name",
        message: "What is the employee's last name?",
      },
      {
        type: "list",
        name: "roleId",
        message: "What is the employee's role?",
        choices: roleChoices,
      },
    ])
    .then(function (answer) {
      console.log(answer);

      var query = `INSERT INTO employee SET ?`;

      connection.query(
        query,
        {
          first_name: answer.first_name,
          last_name: answer.last_name,
          role_id: answer.roleId,
          manager_id: answer.managerId,
        },
        function (err, res) {
          if (err) throw err;

          console.table(res);
          console.log(res.insertedRows + "Inserted successfully!\n");

          init();
        }
      );
    });
}
function deleteEmployee() {
  console.log("Deleting an employee");

  var query = `SELECT e.id, e.first_name, e.last_name
        FROM employee e`;

  connection.query(query, function (err, res) {
    if (err) throw err;

    const deleteEmployeeChoices = res.map(({ id, first_name, last_name }) => ({
      value: id,
      name: `${id} ${first_name} ${last_name}`,
    }));

    console.table(res);
    console.log("Pick Employee to Delete!\n");

    promptDelete(deleteEmployeeChoices);
  });
}

function promptDelete(deleteEmployeeChoices) {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeId",
        message: "Which employee do you want to remove?",
        choices: deleteEmployeeChoices,
      },
    ])
    .then(function (answer) {
      var query = `DELETE FROM employee WHERE ?`;
      // when finished prompting, insert a new item into the db with that info
      connection.query(query, { id: answer.employeeId }, function (err, res) {
        if (err) throw err;

        console.table(res);
        console.log(res.affectedRows + "Deleted!\n");

        init();
      });
    });
}
//Department functions
function viewDepartment() {
  var query = "SELECT * FROM department";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table("All Departments:", res);
    init();
  });
}
createDepartment = () => {
  inquirer
    .prompt([
      {
        name: "department",
        type: "input",
        message: "What department would you like to add?",
      },
    ])
    .then(function (answer) {
      connection.query(
        `INSERT INTO department (name) VALUES ('${answer.department}')`,
        (err, res) => {
          if (err) throw err;
          console.log("1 new department added: " + answer.department);
          getDepartments();
          init();
        }
      );
    });
};

function viewRole() {
  var query = "SELECT * FROM role";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table("All roles:", res);
    init();
  });
}


init();


