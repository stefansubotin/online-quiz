import { Module } from '@nestjs/common';
import { HomepageController } from './homepage.controller';
import { HomepageService as HomepageService } from './homepage.service';
import { TestModule } from './test.module';

@Module({
  imports: [TestModule],
  controllers: [HomepageController],
  providers: [HomepageService],
})
export class HomepageModule {}
