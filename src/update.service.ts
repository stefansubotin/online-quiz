/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { UpdateDto } from './update.dto';

@Injectable()
export class UpdateService {
    update(update: UpdateDto) {
        const Pusher = require("pusher");

        const pusher = new Pusher({
            appId: "1679697",
            key: "cefecd31795a4e419288",
            secret: "69192cf5d43c8f457530",
            cluster: "eu",
            useTLS: true
        });

        pusher.trigger(update.code, update.event, {
            id: update.id,
            user: update.user,
            message: update.message
        });
    }
 }
