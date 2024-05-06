/* insert data to the department table */
INSERT INTO department (name) VALUES ('Sales'),('Engineering'), ('Finance'), ('Legal');

/* Inserting data into the role table */
INSERT INTO role (title, salary, department_id) VALUES
('Sales Lead', 100000, 1),
('Salesperson', 80000, 1),
('Lead Engineer', 150000, 2),
('Software Engineer', 120000, 2),
('Account Manager', 160000, 3),
('Accountant', 125000, 3),
('Legal Team Lead', 250000, 4),
('Lawyer', 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Jonh', 'Doe', 1, NULL), --Jonh has no manager that is why we call NULL
('Jane', 'Doe', 2, 1), -- Jane work under Jonh that is why we set her to 2 and report to 1 with is John
('Johana', 'Smith', 3, NULL), -- here we continue fallowing the path
('Bob', 'Johnson', 4, 3),
('Alice', 'Hill', 5, NULL),
('Matt', 'Hill', 6, 5),
('Angie', 'Barron', 7, NULL),
('Dock', 'Barron', 8, 7);

