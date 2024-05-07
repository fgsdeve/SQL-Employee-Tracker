const e = require('express');
const pool = require('./db'); // Make sure this path is correct

// Function to fetch all departments with error handling
async function getAllDepartments() {
    try {
        const res = await pool.query('SELECT name, id FROM department'); 
        return res.rows;
    } catch (error) {
        console.error('Failed to retrieve departments:', error);
        throw error;
    }
}

// Function to fetch all roles with error handling
async function getAllRoles() {
    try {
        const res = await pool.query(`
            SELECT r.title, r.id AS role_id, d.name AS department_name, r.salary
            FROM role r
            INNER JOIN department d ON r.department_id = d.id
        `);
        return res.rows;
    } catch (error) {
        console.error('Failed to retrieve roles:', error);
        throw error;
    }
}

// Function to fetch all employees with error handling
async function getAllEmployees() {
    try {
        const res = await pool.query(`
        SELECT 
            e.id AS employee_id,
            e.first_name,
            e.last_name,
            r.title AS job_title,
            d.name AS department,
            r.salary,
            CONCAT(m.first_name, ' ', m.last_name) AS manager_name
        FROM 
            employee e
        LEFT JOIN 
            role r ON e.role_id = r.id
        LEFT JOIN 
            department d ON r.department_id = d.id
        LEFT JOIN 
            employee m ON e.manager_id = m.id
    `);
    
        return res.rows;
    } catch (error) {
        console.error('Failed to retrieve employees:', error);
        throw error;
    }
}

// Function to add a department with error handling
async function addDepartment(name) {
    try {
        const res = await pool.query('INSERT INTO department (name) VALUES ($1) RETURNING *', [name]); // Corrected column name
        return res.rows[0];
    } catch (error) {
        console.error('Failed to add department:', error);
        throw error;
    }
}

// Function to add a role with error handling
async function addRole(title, salary, departmentId) {
    try {
        const res = await pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *', [title, salary, departmentId]); // Corrected column name
        return res.rows[0];
    } catch (error) {
        console.error('Failed to add role:', error);
        throw error;
    }
}

// Function to add an employee with error handling
async function addEmployee(firstName, lastName, roleId, managerId) {
    try {
        const res = await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *', [firstName, lastName, roleId, managerId]);
        return res.rows[0];
    } catch (error) {
        console.error('Failed to add employee:', error);
        throw error;
    }
}

// Function to update an employee's role with error handling
async function updateEmployeeRole(employeeId, newRoleId) {
    try {
        const res = await pool.query('UPDATE employee SET role_id = $1 WHERE id = $2 RETURNING *', [newRoleId, employeeId]); // Corrected parameter order
        return res.rows[0];
    } catch (error) {
        console.error('Failed to update employee role:', error);
        throw error;
    }
}

module.exports = {
    getAllDepartments,
    getAllRoles,
    getAllEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole
};
