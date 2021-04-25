USE employee_tracker;

INSERT INTO department (name) VALUES
("Sales"),
("Engineering"),
("Finance"),
("Legal");

INSERT INTO role (title, salary, department_id) VALUES 
("Sales Lead", 100000, 1),
("Salesperson", 80000, 1),
("Software Engineer", 120000, 2),
("Lead Engineer", 150000, 2),
("Accountant", 125000, 3),
("Lawyer", 190000, 4),
("Legal Team Lead", 250000, 4);

INSERT INTO Employee (first_name, last_name, role_id, manager_id, department_id) VALUES
("John", "Doe", 1, null, 1),
("Mike", "Chan", 1, 1,1),
("Ashley", "Rodriguez", 1, 1,1),
("Kevin", "Tupik", 1, 1,1),
("Malia", "Brown", 1, 1,1),
("Sarah", "Lourde", 1, 1,1),
("Tom", "Allen", 1, 1,1);


