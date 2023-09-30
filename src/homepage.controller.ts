import { Controller, Get } from '@nestjs/common';
import { HomepageService } from './homepage.service';
import { NestFactory } from '@nestjs/core';
import { TestModule } from './test.module';

@Controller()
export class HomepageController {
  constructor(private readonly appService: HomepageService) {}

  @Get()
  getHomepage(): string {
    return this.appService.getHomepage();
  }
}
