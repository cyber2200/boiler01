export class MysqlDataLayer {
  async test() {
    //return { res: "OK" }
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'nuxt01' });
    const res = await connection.query('SELECT * FROM `test`;');
    await connection.end();
    const ret = { rows: [] };
    ret.rows = res[0];
    return ret;
  }
}