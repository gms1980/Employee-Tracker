DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;
USE employee_tracker;
DROP TABLE IF EXISTS Employee;
DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role_;

CREATE TABLE department (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  description TEXT
);

CREATE TABLE role (
id INTEGER NOT NULL AUTO_INCREMENT,
title VARCHAR (30) NULL,
salary DECIMAL (10,2) NULL,
department_id INT (10) NULL,
PRIMARY KEY (id)
);

CREATE TABLE Employee (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    department_id INT,
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id),
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
);

