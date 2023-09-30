import { Controller, Get } from '@nestjs/common';
import { HomepageService } from './homepage.service';

@Controller()
export class HomepageController {
  constructor(private readonly appService: HomepageService) {}

  @Get()
  getHello(): HTMLElement {
    return this.appService.getHello();
  }
}
