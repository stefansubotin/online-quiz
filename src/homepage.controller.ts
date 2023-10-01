import { Controller, Get, Render } from '@nestjs/common';
import { HomepageService } from './homepage.service';

@Controller()
export class HomepageController {
  constructor(private readonly appService: HomepageService) {}

  @Get()
  @Render('homepage')
  getHomepage() {
    return { message: 'Hello<br>Testing!'};
  }
}
