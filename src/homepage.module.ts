import { Module } from '@nestjs/common';
import { HomepageController } from './homepage.controller';
import { HomepageService as HomepageService } from './homepage.service';
import { TestModule } from './test.module';
import { TestController } from './test.controller';

@Module({
  imports: [TestModule],
  controllers: [HomepageController, TestController],
  providers: [HomepageService],
})
export class HomepageModule {}
