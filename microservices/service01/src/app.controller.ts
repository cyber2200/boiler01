import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from "@nestjs/microservices";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern({cmd: 'getMicroserviceTest01'})
  async getMicroserviceTest01(data) {
    console.log(data);
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'nuxt01' });
    const res = await connection.query('SELECT * FROM `test`;');
    await connection.end();
    const ret = { rows: [] };
    ret.rows = res[0];
    return ret;
    return { res: 'OK from service01' };
  }
}
