import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '../config/orm.config.development';
import { CacheModule, CacheStore } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from '../src/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(ormconfig),
    CacheModule.register({
      isGlobal: true,
      store: redisStore as unknown as CacheStore,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    }),
    User
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
