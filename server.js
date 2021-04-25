const mysql = require("mysql2");
const express = require("express");
//const inputCheck = require("./utils/inputCheck");
od
const PORT = process.env.PORT || 3006;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    port: "3306",
    user: "root",
    password: "shimshim",
    database: "employee_tracker",
  },
  console.log("Connected to the employee_tracker database")
);
// Get all the Employee
app.get("/api/Employee", (req, res) => {
  const sql = `SELECT Employee.*, department.name
  AS department_name
  FROM Employee
  LEFT JOIN department
  ON Employee.department_id = department.id`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// GET a single Employee
app.get("/api/Employee/:id", (req, res) => {
  const sql = `SELECT Employee.*, department.name 
  AS department_name 
  FROM Employee 
  LEFT JOIN department 
  ON Employee.department_id = department.id 
  WHERE Employee.id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

//Delete a Employee
app.delete("/api/Employee/:id", (req, res) => {
  const sql = `DELETE FROM Employee WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.statusMessage(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: "Employee not found",
      });
    } else {
      res.json({
        message: "deleted",
        changes: result.affectedRows,
        id: req.params.id,
      });
    }
  });
});

// Create a candidate (getting error message)
app.post("/api/Employee", ({ body }, res) => {
  const errors = inputCheck(
    body,
    "first_name",
    "last_name",
    "role_id",
    "manager_id"
  );
  if (errors) {
    res.status(400).json({ error: errors });
  }
  const sql = `INSERT INTO Employee (id, first_name, last_name, role_id, manager_id)
               VALUES (?,?,?,?,?)`;
  const params = [id, first_name, last_name, role_id, manager_id];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: body,
    });
  });
});

//Update a Employee's Department
app.put("/api/Employee/:id", (req, res) => {
  const errors = inputCheck(req.body, "department_id");

  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }
  const sql = `UPDATE Employee SET department_id = ? 
                 WHERE id = ?`;
  const params = [req.body.party_id, req.params.id];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      // check if a record was found
    } else if (!result.affectedRows) {
      res.json({
        message: "Employee not found",
      });
    } else {
      res.json({
        message: "success",
        data: req.body,
        changes: result.affectedRows,
      });
    }
  });
});

//ADDs Route for all Departments
app.get("/api/department", (req, res) => {
  const sql = `SELECT * FROM department`;
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

//Add Route for a single department
app.get("/api/department/:id", (req, res) => {
  const sql = `SELECT * FROM department WHERE id = ?`;
  const params = [req.params.id];
  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

//Deletes a Department
app.delete("/api/department/:id", (req, res) => {
  const sql = `DELETE FROM department WHERE id = ?`;
  const params = [req.params.id];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: res.message });
      // checks if anything was deleted
    } else if (!result.affectedRows) {
      res.json({
        message: "Department not found",
      });
    } else {
      res.json({
        message: "deleted",
        changes: result.affectedRows,
        id: req.params.id,
      });
    }
  });
});

//Default response for any other request (NOT Found) this should be last placement or it will ove ride all others
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
