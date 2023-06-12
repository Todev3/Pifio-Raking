import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): any {
    const status = {
      status: 'ok',
      date: new Date(),
      version: '0.0.0',
    };

    return status;
  }
}
