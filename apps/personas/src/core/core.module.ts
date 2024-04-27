import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [],
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '4.236.191.92',
      port: 5433,
      password: 'pass123',
      username: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  exports: [],
})
export class CoreModule {}
