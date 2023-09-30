import { Controller, Get, Render } from '@nestjs/common';
import { HomepageService } from './homepage.service';
import { NestFactory } from '@nestjs/core';

@Controller()
export class HomepageController {
  constructor(private readonly appService: HomepageService) {}

  @Get()
  @Render('homepage')
  getHomepage() {
    return { message: 'Hello<br>Testing!'};
  }
}
