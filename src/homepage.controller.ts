import { Controller, Get, Render } from '@nestjs/common';
import { HomepageService } from './homepage.service';
import { NestFactory } from '@nestjs/core';
import { TestModule } from './test.module';

@Controller()
export class HomepageController {
  constructor(private readonly appService: HomepageService) {}

  @Get()
  @Render('test')
  getHomepage() {
    return { message: 'Hello Testing!'};
  }
}
