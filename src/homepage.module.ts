import { Module } from '@nestjs/common';
import { HomepageController } from './homepage.controller';
import { HomepageService as HomepageService } from './homepage.service';
import { UpdateController } from './update.controller';

@Module({
  imports: [],
  controllers: [HomepageController, UpdateController],
  providers: [HomepageService],
})
export class HomepageModule {}
