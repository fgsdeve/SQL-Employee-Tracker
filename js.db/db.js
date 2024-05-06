/* creating connection to the postgres */
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'employee_tracker',
    password: '23janeiro',
    port: 5432,
});

module.exports = pool;