// index.js - Handles the command-line interface for user interactions

const inquirer = require('inquirer');
const {
    getAllDepartments,
    getAllRoles,
    getAllEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole
 } = require('./js.db/queries'); // Here we are connecting the path files from queries to the main ffile.

const mainMenu = async () => {
    const answer = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do? (Use arrow keys)',
        choices: [
            'View All Employees',
            'Add Employee',
            'Update Employee Role',
            'View All Roles',
            'Add Role',
            'View All Departments',
            'Add Department',
            'Exit'
        ]
    });

    try {
        switch (answer.action) {
            case 'View All Employees':
                // Fetch and display all employees from the database
                const employees = await getAllEmployees();
                console.log(employees);
                break;
            case 'Add Employee':
                // Prompt user to add a new employee and display the result
                const newEmployee = await addEmployee();
                console.log(newEmployee);
                console.log('Employee added successfully!');
                break;
            case 'Update Employee Role':
                // Prompt user to update an existing employee's role and display the updated result
                const updatedRole = await updateEmployeeRole();
                console.log(updatedRole);
                console.log('Employee role updated successfully!');
                break;
            case 'View All Roles':
                // Fetch and display all roles from the database
                const roles = await getAllRoles();
                console.log(roles);
                break;
            case 'Add Role':
                // Prompt user to add a new role and display the result
                const newRole = await addRole();
                console.log(newRole);
                console.log('Role added successfully!');
                break;
            case 'View All Departments':
                // Fetch and display all departments from the database
                const departments = await getAllDepartments();
                console.log(departments);
                break;
            case 'Add Department':
                // Prompt user to add a new department and display the result
                const newDepartment = await addDepartment();
                console.log(newDepartment);
                console.log('Department added successfully!');
                break;
            case 'Exit':
                // Exit the application
                console.log('Exiting application...');
                process.exit();
        }
    } catch (error) {
        // Handle errors that may occur during the operation
        console.error('Error occurred: ', error);
    }

    // Re-run main menu after actions
    setTimeout(mainMenu, 500);
};

mainMenu();
