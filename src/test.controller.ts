import { Controller, Get } from "@nestjs/common";

@Controller('test')

export class TestController {

    @Get()
    testMessage() : string {
        return 'Test message';
    }
}