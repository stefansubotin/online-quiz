import { Test, TestingModule } from '@nestjs/testing';
import { HomepageController } from './homepage.controller';
import { HomepageService } from './homepage.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [HomepageController],
      providers: [HomepageService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get(HomepageController);
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
