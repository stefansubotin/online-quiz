/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Param, Render } from '@nestjs/common';

@Controller('chat')
export class ChatController { 
    @Get(':room')
    @Render('chat')
    getHomepage(@Param() params: any) {
    return { message: 'Hello<br>Testing!'};
  }
}
