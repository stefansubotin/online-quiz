import { Module } from '@nestjs/common';
import { HomepageController } from './homepage.controller';
import { HomepageService as HomepageService } from './homepage.service';
import { UpdateController } from './update.controller';
import { UpdateService } from './update.service';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { KreuzwortController } from './kreuzwort.controller';

@Module({
  imports: [],
  controllers: [HomepageController, UpdateController, ChatController, KreuzwortController],
  providers: [HomepageService, UpdateService, ChatService],
})
export class BaseModule {}
