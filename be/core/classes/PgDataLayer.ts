export class PgDataLayer {
    async test() {
        const delay: any = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
        await delay(1000)
        const { Client } = require('pg')
        const client = new Client({
            user: 'zero21ops',
            host: 'localhost',
            database: 'nuxt01',
            password: '',
            port: 5432,
        })
        await client.connect()
        const pg_res = await client.query('SELECT * FROM users')
        let rows = pg_res.rows
        await client.end()
        return {rows}
    }
}