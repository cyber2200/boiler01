import { Controller, Get, HttpCode, Post, Req, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { MysqlDataLayer } from './models/MysqlDataLayer';
import { PgDataLayer } from './models/PgDataLayer';
import { MongoDataLayer } from './models/MongoDataLayer';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTest(): string {
    return this.appService.getTest();
  }

  @Post('/getDbTest')
  async getDbTest(@Req() request: Request) {
    /*
    if (request.body === null) {
      return { res: 'NOK', data: [], err: 'Not database selection' };
    }
    let res = [];
    switch (request.body['type']) {
      case 'mysql':
        const mysqlDataLayer = new MysqlDataLayer();
        res = await mysqlDataLayer.test();
        break;
    }
    return { res: 'OK', data: res, err: '' };
    */
    return { res: 'OK' };
  }

  @Post('/mysql_test')
  @HttpCode(200)
  async mysql_test() {
    const mysqlDataLayer: MysqlDataLayer = new MysqlDataLayer();
    const data = await mysqlDataLayer.test();
    return { res: 'OK', data, err: '' };
  }

  @Post('/pg_test')
  @HttpCode(200)
  async pg_test() {
    const pgDataLayer: PgDataLayer = new PgDataLayer();
    const data = await pgDataLayer.test();
    return { res: 'OK', data, err: '' };
  }

  @Post('/mongo_test')
  @HttpCode(200)
  async mongo_test(@Req() request: Request) {
    console.log(request.body['test']);
    const mongoDataLayer: MongoDataLayer = new MongoDataLayer();
    const data = await mongoDataLayer.test();
    return { res: 'OK', data, err: '' };
  }

  @Post('/getMicroserviceTest01')
  @HttpCode(200)
  async microserviceTest() {
    return this.appService.getMicroserviceTest01();
  }
}
