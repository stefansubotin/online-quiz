/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { UpdateDto } from './update.dto';

@Controller('update')
export class UpdateController {
    @Post()
    update(@Body() update: UpdateDto) {
        const Pusher = require("pusher");

        const pusher = new Pusher({
            appId: "1679697",
            key: "cefecd31795a4e419288",
            secret: "69192cf5d43c8f457530",
            cluster: "eu",
            useTLS: true
        });

        pusher.trigger("my-channel", "my-event", {
            message: update.message
        });
    }
 }
