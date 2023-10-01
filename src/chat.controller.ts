/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Param, Render } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly appService: ChatService) {}

    @Get(':room')
    getChat(@Param() params: any) {
      var html = `<!DOCTYPE html><html>`;
      html = html + this.appService.getChatHeader() + this.appService.getChat();
      return html;
  }
}
