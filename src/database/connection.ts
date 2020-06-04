import knex from 'knex'

const connection = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        port: 15432,
        user : 'postgres',
        password : 'postgres',
        database : 'ecoleta'
    }
})

export default connection