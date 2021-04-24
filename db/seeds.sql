USE employee_tracker;

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


