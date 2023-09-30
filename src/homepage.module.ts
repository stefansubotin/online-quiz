import { Module } from '@nestjs/common';
import { HomepageController } from './homepage.controller';
import { HomepageService as HomepageService } from './homepage.service';
import { TestModule } from './test.module';
import { TestController } from './test.controller';
import { TestService } from './test.service';

@Module({
  imports: [],
  controllers: [HomepageController, TestController],
  providers: [HomepageService, TestService],
})
export class HomepageModule {}
