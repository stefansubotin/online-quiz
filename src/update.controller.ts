/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { UpdateDto } from './update.dto';
import { UpdateService } from './update.service';

@Controller('update')
export class UpdateController {
    constructor(private readonly appService: UpdateService) {}

    @Post()
    update(@Body() update: UpdateDto) {
        this.appService.update(update);
    }
 }
