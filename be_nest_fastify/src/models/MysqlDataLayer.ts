export class MysqlDataLayer {
  async test() {
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'nuxt01' });
    const res = await connection.query('SELECT * FROM `test`');
    return res[0];
  }
}