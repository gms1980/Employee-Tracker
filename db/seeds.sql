USE employee_tracker;

INSERT INTO role (name, salary, department_id) VALUES 
("Sales Lead", 100000, 1),
("Salesperson", 80000, 1),
("Software Engineer", 120000, 2),
("Lead Engineer", 150000, 2),
("Accountant", 125000, 3),
("Lawyer", 190000, 4),
("Legal Team Lead", 250000, 4);

INSERT INTO department (name) VALUES
("Sales"),
("Engineering"),
("Finance"),
("Legal");

INSERT INTO Employee (first_name, last_name, role_id, manager_id, department_id) VALUES
("John", "Doe", 1, 1),
("Mike", "Chan", 1, 2),
("Ashley", "Rodriguez", 7, 5),
("Kevin", "Tupik", 8, null),
("Malia", "Brown", 4, null),
("Sarah", "Lourde", 3, 5),
("Tom", "Allen", 1, 2);


