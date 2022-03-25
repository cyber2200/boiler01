import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Test');
  });

  it('/getDbTest (POST)', () => {
    return request(app.getHttpServer())
      .post('/getDbTest')
      .expect(201)
      .expect('{"res":"OK"}');
  });

  it('/pg_test (POST)', () => {
    return request(app.getHttpServer())
      .post('/pg_test')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8');
  });

  it('/mongo_test (POST)', () => {
    return request(app.getHttpServer())
      .post('/mongo_test')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8');
  });

  it('/mysql_test (POST)', () => {
    return request(app.getHttpServer())
      .post('/mysql_test')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8');
  });
});
