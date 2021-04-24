const mysql = require("mysql2");
const express = require("express");
const inputCheck = require("./utils/inputCheck");

const PORT = process.env.PORT || 3004;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "employee_tracker",
  },
  console.log("Connected to the employee_tracker database")
);
// Get all the Employee
app.get("/api/Employee", (req, res) => {
  const sql = `SELECT * FROM Employee`;

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
  const sql = `SELECT * FROM Employee WHERE id = ?`;
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

// Create a candidate
app.post("/api/candidate", ({ body }, res) => {
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
});
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
    data: body
  });
});

//Default response for any other request (NOT Found) this should be last placement or it will ove ride all others
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
