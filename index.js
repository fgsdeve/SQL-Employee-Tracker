require('dotenv').config();
const inquirer = require('inquirer');
const {
    getAllDepartments,
    getAllRoles,
    getAllEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole,
    deleteDepartment,
    deleteRole,
    deleteEmployee,
    updateEmployeeManager,
    viewTotalDepartmentBudget,
    viewEmployeesByManager
} = require('./js.db/queries'); // Ensure the path is correct

async function mainMenu() {
    try {
        const answer = await inquirer.prompt({
            type: 'list',
            name: 'action',
            message: 'How can I help you today? (Use arrow keys)',
            choices: [
                'View All Employees',
                'View All Departments',
                'View All Roles',
                'View Employees By Manager',
                'View Total Department Budget',
                'Add Employee',
                'Add Role',
                'Add Department',
                'Update Employee Role',
                'Update Employer Manager',         
                'Delete Department',
                'Delete Role',
                'Delete Employee',
                'Exit'
            ]
        });

        switch (answer.action) {
            
            case 'View All Departments':
                const departments = await getAllDepartments();
                console.log("All Departments:");
                console.table(departments); // Display data in a table format
                break;

            case 'View All Roles':
                 const roles = await getAllRoles();
                console.log("All Roles:");
                console.table(roles); // Display data in a table format
                break;

            case 'View All Employees':
                const employees = await getAllEmployees();
                console.log("All Employees:");
                console.table(employees); // Display data in a table format
                break;

             case 'View Total Department Budget':
                await promptViewTotalDepartmentBudget();
                break;

            case 'View Employees By Manager':
                await promptViewEmployeesByManager();
                break;

            case 'Add Department':
                    await promptAddDepartment();
                    break;

            case 'Add Role':
                    await promptAddRole();
                    break;

            case 'Add Employee':
                await promptAddEmployee();
                break;

            case 'Update Employee Role':
                await promptUpdateEmployeeRole();
                break;

            case 'Update Employer Manger':
                await promptUpdateEmployeeManager();
                break;

            case 'Delete Department':
                await promptDeleteDepartment();
                break;

            case 'Delete Role':
                await promptDeleteRole();
                break;

            case 'Delete Employee':
                await promptDeleteEmployee();
                break;

            case 'Exit':
                console.log('Exiting application...');
                process.exit();
            default:
                console.log('Invalid action');
        }
    } catch (error) {
        console.error('Error occurred: ', error);
    }

    setTimeout(mainMenu, 500);
}

async function promptAddEmployee() {
    try {
        const employeeDetails = await inquirer.prompt([
            { name: 'firstName', type: 'input', message: "Enter the employee's first name:" },
            { name: 'lastName', type: 'input', message: "Enter the employee's last name:" },
            { name: 'roleId', type: 'input', message: "Enter the employee's role ID:", validate: input => /^\d+$/.test(input) ? true : "Please enter a valid ID." },
            {
                name: 'managerId',
                type: 'input',
                message: "Enter the employee's manager ID (or leave blank for none):",
                validate: input => input === '' || /^\d+$/.test(input) ? true : "Please enter a valid ID or leave blank.",
                filter: input => input === '' ? null : parseInt(input)
            }
        ]);
        const { firstName, lastName, roleId, managerId } = employeeDetails;
        const newEmployee = await addEmployee(firstName, lastName, roleId, managerId);
        console.log(`Employee added successfully:`, newEmployee);
    } catch (error) {
        console.error('Failed to add employee:', error);
    }
}

async function promptAddDepartment() {
    try {
        const { name } = await inquirer.prompt({
            name: 'name',
            type: 'input',
            message: "Enter the new department's name:"
        });
        const newDepartment = await addDepartment(name);
        console.log(`Department added successfully:`, newDepartment);
    } catch (error) {
        console.error('Failed to add department:', error);
    }
}

async function promptAddRole() {
    try {
        const roleDetails = await inquirer.prompt([
            { name: 'title', type: 'input', message: "Enter the title of the new role:" },
            { name: 'salary', type: 'input', message: "Enter the salary for the new role:" },
            { name: 'departmentId', type: 'input', message: "Enter the department ID for the new role:" }
        ]);
        const { title, salary, departmentId } = roleDetails;
        const newRole = await addRole(title, parseFloat(salary), departmentId);
        console.log(`Role added successfully:`, newRole);
    } catch (error) {
        console.error('Failed to add role:', error);
    }
}


async function promptUpdateEmployeeRole() {
    try {
        const { employeeId, newRoleId } = await inquirer.prompt([
            { name: 'employeeId', type: 'input', message: "Enter the employee's ID to update:" },
            { name: 'newRoleId', type: 'input', message: "Enter the new role ID:" }
        ]);
        const updatedRole = await updateEmployeeRole(employeeId, newRoleId);
        console.log(`Employee role updated successfully:`, updatedRole);
    } catch (error) {
        console.error('Failed to update employee role:', error);
    }
}

async function promptUpdateEmployeeManager() {
    try {
        const { employeeId, newManagerId } = await inquirer.prompt([
            { name: 'employeeId', type: 'input', message: "Enter the employee's ID to update:" },
            { name: 'newManagerId', type: 'input', message: "Enter the new manager's ID:" }
        ]);
        const updatedEmployeeManager = await updateEmployeeManager(employeeId, newManagerId);
        console.log(`Employee manager updated successfully:`, updatedEmployeeManager);
    } catch (error) {
        console.error('Failed to update employee manager:', error);
    }
}

async function promptViewEmployeesByManager() {
    try {
        const { managerId } = await inquirer.prompt({
            name: 'managerId',
            type: 'input',
            message: "Enter the manager's ID to view employees:"
        });
        const employeesManagedByManager = await viewEmployeesByManager(managerId);
        console.log("Employees managed by manager:", employeesManagedByManager);
    } catch (error) {
        console.error('Failed to view employees by manager:', error);
    }
}

async function promptViewTotalDepartmentBudget() {
    try {
        const { departmentId } = await inquirer.prompt({
            name: 'departmentId',
            type: 'input',
            message: "Enter the department ID to view the total budget:"
        });
        const totalBudget = await viewTotalDepartmentBudget(departmentId);
        console.log(`Total budget for department ${departmentId}: $${totalBudget}`);
    } catch (error) {
        console.error('Failed to view total department budget:', error);
    }
}


async function promptDeleteDepartment() {
    try {
        const { departmentId } = await inquirer.prompt({
            name: 'departmentId',
            type: 'input',
            message: "Enter the department ID to delete:"
        });
        await deleteDepartment(departmentId);
    } catch (error) {
        console.error('Failed to prompt delete department:', error);
    }
}
 
 async function promptDeleteRole() {
    try{
        const { roleId } = await inquirer.prompt({
            name:'roleId',
            type: 'input',
            message: "Enter the role ID to delete:"
        });
        await deleteRole(roleId);
    } catch (error) {
        console.error('Failed to prompt delete role:', error);
    }
}
  
  async function promptDeleteEmployee() {
    try{
        const { employeeId } = await inquirer.prompt({
            name: 'employeeId',
            type: 'input',
            message: "Enter the employee ID to be delete:"
        });
        await deleteEmployee( employeeId);
    }catch(error){
        console.error('Failed to prompt delete employee', error);
    }
  }

mainMenu();

