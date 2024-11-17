import { createConnection } from 'mysql2/promise'

const connection = createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '12345678',
    database: 'nekaf'
})

export const getConnection = () => connection;