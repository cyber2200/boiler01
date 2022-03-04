import { Request, Response } from 'express';
import { CoreResponse } from "./CoreResponse";
import { MongoDataLayer } from './classes/MongoDataLayer'
import { PgDataLayer } from './classes/PgDataLayer'
import { MysqlDataLayer } from './classes/MysqlDataLayer'
import { FormTester } from './classes/FormTester'

/*
Mysql:
CREATE DATABASE `nuxt01` CHARACTER SET utf8 COLLATE utf8_general_ci;
CREATE USER 'nuxt01'@'localhost' IDENTIFIED WITH mysql_native_password BY '123qwe123';
GRANT ALL PRIVILEGES ON nuxt01.* TO 'nuxt01'@'localhost';
FLUSH PRIVILEGES;

CREATE TABLE `test` (
  `id` int NOT NULL AUTO_INCREMENT,
  `test_data` varchar(255) default '',
  PRIMARY KEY (`id`)
);

*/
class Core {
  async run(req: Request, res: Response) {
    let ret
    let coreResponse = new CoreResponse()
    switch (req.path) {
      case '/mysql_test':
        let mysqlDataLayer = new MysqlDataLayer()
        ret = await mysqlDataLayer.test()
        coreResponse = new CoreResponse()
        coreResponse.setResponseText("OK")
        coreResponse.setResponseData(ret)
        res.json(coreResponse.getResponse())
        break
      case '/mongo_test':
        let mongoDataLayer = new MongoDataLayer()
        ret = await mongoDataLayer.test()
        coreResponse = new CoreResponse()
        coreResponse.setResponseText("OK")
        coreResponse.setResponseData(ret)
        res.json(coreResponse.getResponse())
        break
      case '/pg_test':
        let pgDataLayer = new PgDataLayer()
        ret = await pgDataLayer.test()
        coreResponse.setResponseText("OK")
        coreResponse.setResponseData(ret)
        res.json(coreResponse.getResponse())
        break
      case '/next_form_hanlder':
        let formTester = new FormTester()
        ret = await formTester.test()
        coreResponse.setResponseText("OK")
        coreResponse.setResponseData(ret)
        res.json(coreResponse.getResponse())
        break
      default:
        coreResponse = new CoreResponse()
        coreResponse.setResponseText("OK")
        coreResponse.setResponseData([])
        res.json(coreResponse.getResponse())
    }
  }
}

module.exports.Core = Core