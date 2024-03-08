import Pool from 'pg.pool'
const pool = new Pool({
    user: 'postgres',
    password: 'root',
    host: 'localhost',
    port: 5432,
    database: ""
})

module.exports = pool;