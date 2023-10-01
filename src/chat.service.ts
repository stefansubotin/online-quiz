/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { createReadStream } from 'fs';

@Injectable()
export class ChatService {
    chat(){
        const chat = createReadStream('components/chat.html');
        var res;
        chat.pipe(res);
        return res;
    }
 }
