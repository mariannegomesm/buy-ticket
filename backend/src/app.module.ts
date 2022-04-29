import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './users/user.module';

import { TravelModule } from './travel/travel.module';

@Module({
  imports: [UserModule, TravelModule, TypeOrmModule.forRoot({
    type: 'mssql',
    host: 'localhost',
    port: 1433,
    username: 'sa',
    password: '202010101',
    database: 'BUY_TICKET',
    entities: [
        __dirname + '/**/*.entity{.ts,.js}',
    ],
    synchronize: true,
    extra: {
      trustServerCertificate: true,
    }
  })],
})

export class AppModule {}
