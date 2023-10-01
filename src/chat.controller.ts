/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Param, Render } from '@nestjs/common';

@Controller('chat')
export class ChatController { 
    @Get(':room')
    getChat(@Param() params: any) {
    var html = require('views/chat.html');
    return html;
  }
}
