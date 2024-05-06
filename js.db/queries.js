const pool = require('./db'); // Make sure this path is correct

// Function to fetch all departments with error handling
const getAllDepartments = async () => {
    try {
        const res = await pool.query('SELECT * FROM department');
        return res.rows;
    } catch (error) {
        console.error('Failed to retrieve departments:', error);
        throw error; // Rethrow to handle error further up the call stack if necessary
    }
};

// Function to fetch all roles with error handling
const getAllRoles = async () => {
    try {
        const res = await pool.query('SELECT * FROM role');
        return res.rows;
    } catch (error) {
        console.error('Failed to retrieve roles:', error);
        throw error;
    }
};

// Function to fetch all employees with error handling
const getAllEmployees = async () => {
    try {
        const res = await pool.query('SELECT * FROM employee');
        return res.rows;
    } catch (error) {
        console.error('Failed to retrieve employees:', error);
        throw error;
    }
};

// Function to add a department with error handling
const addDepartment = async (departmentName) => {
    try {
        const res = await pool.query('INSERT INTO department (name) VALUES ($1) RETURNING *', [departmentName]);
        return res.rows[0];
    } catch (error) {
        console.error('Failed to add department:', error);
        throw error;
    }
};

// Function to add a role with error handling
const addRole = async (title, salary, departmentId) => {
    try {
        const res = await pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *', [title, salary, departmentId]);
        return res.rows[0];
    } catch (error) {
        console.error('Failed to add role:', error);
        throw error;
    }
};

// Function to add an employee with error handling
const addEmployee = async (firstName, lastName, roleId, managerId) => {
    try {
        const res = await pool.query(
            'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *',
            [firstName, lastName, roleId, managerId]
        );
        return res.rows[0];
    } catch (error) {
        console.error('Failed to add employee:', error);
        throw error;
    }
};

// Function to update an employee's role with error handling
const updateEmployeeRole = async (employeeId, newRoleId) => {
    try {
        const res = await pool.query(
            'UPDATE employee SET role_id = $1 WHERE id = $2 RETURNING *',
            [newRoleId, employeeId]
        );
        return res.rows[0];
    } catch (error) {
        console.error('Failed to update employee role:', error);
        throw error;
    }
};

module.exports = {
    getAllDepartments,
    getAllRoles,
    getAllEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole
};
