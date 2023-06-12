import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('/')
  async find(): Promise<string> {
    return 'Hello World! User';
  }
}
