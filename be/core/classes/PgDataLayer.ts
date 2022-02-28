import { Client } from 'pg'

export class PgDataLayer {
    async test() {
        // const delay: any = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
        // await delay(1000)
        const client: any = new Client({
            user: 'zero21ops',
            host: 'localhost',
            database: 'nuxt01',
            password: '',
            port: 5432,
        })
        await client.connect()
        const pg_res: any = await client.query('SELECT * FROM users')
        let rows: Array<object> = pg_res.rows
        await client.end()
        return {rows}
    }
}