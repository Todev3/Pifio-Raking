import { Module } from '@nestjs/common';
import { UserController } from './user.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [UserController],
  exports: [],
})
export class UserModule {}
