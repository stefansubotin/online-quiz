import { Module } from '@nestjs/common';
import { HomepageController } from './homepage.controller';
import { HomepageService as HomepageService } from './homepage.service';
import { TestModule } from './test.module';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { UpdateController } from './update.controller';

@Module({
  imports: [],
  controllers: [HomepageController, TestController, UpdateController],
  providers: [HomepageService, TestService],
})
export class HomepageModule {}
