USE employeeTracker_db;
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