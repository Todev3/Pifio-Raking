import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UserController } from './user/user.controller';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USERNAME } from './setting';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DB_HOST,
      port: 5432,
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts}'],
      migrations: [__dirname + '/migrations/*{.ts}'],
      synchronize: false,
    }),
  ],
  controllers: [AppController, UserController],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
