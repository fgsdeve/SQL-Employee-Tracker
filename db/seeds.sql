-- Insert data into the department table
INSERT INTO department (name) VALUES 
('Sales'),
('Engineering'), 
('Finance'), 
('Legal')
ON CONFLICT (name) DO NOTHING;

-- Insert data into the role table
-- Insert data into the role table (with ON CONFLICT clause to handle duplicates)
-- Insert data into the role table (with ON CONFLICT clause to handle duplicates)
INSERT INTO role (title, salary, department_id) VALUES
('Sales Lead', 100000, 1),  
('Salesperson', 80000, 1),   
('Lead Engineer', 150000, 2),  
('Software Engineer', 120000, 2),  
('Account Manager', 160000, 3),  
('Accountant', 125000, 3),   
('Legal Team Lead', 250000, 4),  
('Lawyer', 190000, 4)
ON CONFLICT (title) DO NOTHING;

-- Insert data into the employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Jonh', 'Doe', 1, NULL), -- Jonh has no manager that is why we call NULL
('Jane', 'Doe', 2, 1), -- Jane works under Jonh, so her manager is Jonh (ID 1)
('Johana', 'Smith', 3, NULL), -- Johana has no manager that is why we call NULL
('Bob', 'Johnson', 4, 3), -- Bob works under Lead Engineer, so his manager is Lead Engineer (ID 3)
('Alice', 'Hill', 5, NULL), -- Alice has no manager that is why we call NULL
('Matt', 'Hill', 6, 5), -- Matt works under Account Manager, so his manager is Account Manager (ID 5)
('Angie', 'Barron', 7, NULL), -- Angie has no manager that is why we call NULL
('Dock', 'Barron', 8, 7); -- Dock works under Legal Team Lead, so his manager is Legal Team Lead (ID 7)
