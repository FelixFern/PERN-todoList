const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'felixfernando123',
    host: 'localhost',
    post: 5432, 
    database: 'perntodo'
})

module.exports = pool 