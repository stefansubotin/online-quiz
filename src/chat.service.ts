/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
    chat(){
        const fs = require('fs');
        var chat = fs.readFile('components/chat.html');
        return chat;
    }
 }
