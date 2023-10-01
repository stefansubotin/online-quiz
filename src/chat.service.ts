/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { createReadStream } from 'fs';

@Injectable()
export class ChatService {
    getChat(){
        return ``;
    };
 }
