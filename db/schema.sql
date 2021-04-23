CREATE TABLE Employee (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id)
);