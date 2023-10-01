/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Param, Render } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly appService: ChatService) {}

    @Get(':room')
    @Render('chat')
    getChat(@Param() params: any) {
      
    return { body: this.appService.chat()};
  }
}
