# SQL Employee Tracker

## Overview

SQL Employee Tracker is a command-line application built with Node.js for managing employees, roles, and departments using SQL queries. The application provides various functionalities such as viewing, adding, updating, and deleting employees, roles, and departments.

## Features

- View all employees, roles, and departments
- Add new employees, roles, and departments
- Update employee roles
- Update employee managers
- View employees by manager
- Delete departments, roles, and employees
- View the total utilized budget of a department

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/fgsdeve/SQL-Employee-Tracker.git
   ```
2. Navigate to the project directory:
   ```bash
   cd SQL-Employee-Tracker
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up the database configuration:
   - Create a `.env` file in the root directory.
   - Add your database configuration details to the `.env` file (e.g., `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`).
   - Import the provided `schema.sql` and `seed.sql` files into your PostgreSQL database to set up the required tables and sample data.

5. Start the application:
   ```bash
   node index.js
   ```

## Usage

Follow the on-screen prompts to navigate through the application and perform various actions such as viewing, adding, updating, and deleting employees, roles, and departments.
here is the walkthrough video for a better understanding; https://drive.google.com/file/d/1dq_g5w0ap8R7u6ANK5zsz4y1O1epjGfR/view

## Dependencies

- [inquirer](https://www.npmjs.com/package/inquirer): For prompting user input in the command-line interface.
- [dotenv](https://www.npmjs.com/package/dotenv): For loading environment variables from a `.env` file.
- [pg](https://www.npmjs.com/package/pg): PostgreSQL client for Node.js.

## Acknowledgments

This project was created as part of UTA Bootcamp.
The application was inspired by the need for a simple and efficient tool for managing employee data in a database.

## Resources

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express Documentation](https://expressjs.com/en/api.html)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Inquirer Documentation](https://www.npmjs.com/package/inquirer)

---

This README.md file provides clear instructions for installing, using, and understanding the SQL Employee Tracker application. It also acknowledges any resources and dependencies used in the project. Let me know if you need any further modifications or additions!
