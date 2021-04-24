const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3004;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
//Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employee_tracker'
    },
    console.log('Connected to the employee_tracker database')
)
// Get all the Employee
// db.query(`SELECT * FROM Employee`, (err, rows) => {
//     console.log(rows);
// });

// GET a single Employee
// db.query(`SELECT * FROM Employee WHERE id = 1`, (err, row) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(row);
//   });

//Delete a Employee
// db.query(`DELETE FROM Employee WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(result);
//   });

// Create a candidate
const sql = `INSERT INTO Employee (id, first_name, last_name, role_id, manager_id) 
              VALUES (?,?,?,?,?)`;
const params = [1, 'John', 'Doe', 1, 1];

db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

//Default response for any other request (NOT Found) this should be last placement or it will ove ride all others
app.use((req, res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});