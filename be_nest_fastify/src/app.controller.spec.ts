import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('getTest', () => {
    it('should return "Test"', () => {
      expect(appController.getTest()).toBe('Test');
    });
  });

  describe('mysql_test', () => {
    it('should return object', async () => {
      expect(await appController.mysql_test()).toMatchObject({data: {}});
    });
  });

  describe('mongo_test', () => {
    it('should return object', async () => {
      expect(await appController.mysql_test()).toMatchObject({data: {}});
    });
  });

  describe('pg_test', () => {
    it('should return object', async () => {
      expect(await appController.mysql_test()).toMatchObject({data: {}});
    });
  });
});
