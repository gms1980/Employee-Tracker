USE employee_tracker_db;

INSERT INTO department (name) VALUES
("Sales"),
("Engineering"),
("Finance"),
("Legal");
INSERT INTO role (name, salary, department_id) VALUES 
("Sales Lead", 100000, 1),
("Salesperson", 80000, 1),
("Software Engineer", 120000, 2),
("Lead Engineer", 150000, 2),
("Accountant", 125000, 3),
("Lawyer", 190000, 4),
("Legal Team Lead", 250000, 4);

CREATE TABLE role_ (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  salary VARCHAR(50) NOT NULL,
  department_id INT,
)