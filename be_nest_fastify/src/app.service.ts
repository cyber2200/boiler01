import {Inject, Injectable} from '@nestjs/common';
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class AppService {
  constructor(
    @Inject('TEST01_MICROSERVICE') private readonly client01: ClientProxy,
  ) {}

  getTest(): string {
    return 'Test';
  }

  getMicroserviceTest01() {
    return this.client01.send({ cmd: 'getMicroserviceTest01' }, {t: "123"});
  }
}
