import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModel } from './users/user.models';
import { UserModule } from './users/user.module';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot({
    type: 'mssql',
    host: 'localhost',
    port: 1433,
    username: 'sa',
    password: '202010101',
    database: 'BUY_TICKET',
    entities: [UserModel],
    synchronize: true,
    extra: {
      trustServerCertificate: true,
    }
  })],
})

export class AppModule {}
