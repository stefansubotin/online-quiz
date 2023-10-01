/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Render } from '@nestjs/common';

@Controller('kreuzwort/****/**')
export class KreuzwortController {
    @Get()
    @Render('kreuzwort')
    getKreuzwort() {
        return {};
    }
}
