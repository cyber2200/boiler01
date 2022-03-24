import { Controller, Get, Post, Req, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { MysqlDataLayer } from './models/MysqlDataLayer';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/getDbTest')
  async getDbTest(@Req() request: Request) {
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
  }
}
