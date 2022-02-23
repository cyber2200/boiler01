import mysql from 'mysql2/promise'
import { promisify } from 'util'

export class MysqlDataLayer {
    async test() {
        const con = await mysql.createConnection({host:'localhost', user: 'nuxt01', database: 'nuxt01', password: '123qwe123'})
        promisify(con.query).bind(con)
        const [rows, fields] = await con.execute('SELECT * FROM `test`;')
        return {rows, fields}
    }
}