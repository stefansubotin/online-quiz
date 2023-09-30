/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('/test')
export class TestController {
    constructor(private readonly appService: TestService) {}

    @Get()
    getTest(): string {
        return "Test";
    }
}
