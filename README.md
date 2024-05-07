## SQL Employee Tracker
Overview
This is a command-line application built with Node.js for managing employees, roles, and departments using SQL queries. The application provides various functionalities such as viewing, adding, updating, and deleting employees, roles, and departments.

# Features
View all employees, roles, and departments
Add new employees, roles, and departments
Update employee roles
Update employee managers
View employees by manager
Delete departments, roles, and employees
View the total utilized budget of a department

# Installation
Clone the repository:
bash
Copy code
git clone https://github.com/fgsdeve/SQL-Employee-Tracker.git
Navigate to the project directory:
bash
Copy code
cd SQL-Employee-Tracker
Install dependencies:
Copy code
npm install
Set up the database configuration:
Create a .env file in the root directory.
Add your database configuration details to the .env file (e.g., DB_HOST, DB_USER, DB_PASSWORD, DB_NAME).
Import the provided schema.sql and seed.sql files into your MySQL database to set up the required tables and sample data.
Start the application:
Copy code
node index.js

# Usage
Follow the on-screen prompts to navigate through the application and perform various actions such as viewing, adding, updating, and deleting employees, roles, and departments.

# Dependencies
inquirer: For prompting user input in the command-line interface.
dotenv: For loading environment variables from a .env file.
pg: PostgreSQL client for Node.js.

# Acknowledgments
This project was created as part of UTA Bootcamp.
The application was inspired by the need for a simple and efficient tool for managing employee data in a database.

# Resources
Node.js Documentation
Express Documentation
PostgreSQL Documentation
Inquirer Documentation
