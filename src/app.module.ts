import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { defaultConfig } from 'src/configs/database.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { EventModule } from './modules/event/event.module';
import { EventGatewayModule } from './modules/event_gateway/event_gateway.module';
import { EventPublisherModule } from './modules/event_publisher/event_publisher.module';
import { UsersModule } from './modules/users/users.module';
import { LoggerModule } from './helpers/logger/logger.module';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    TypeOrmModule.forRoot(defaultConfig),
    ConfigModule.forRoot(),
    AuthModule, 
    EventModule, 
    EventGatewayModule, 
    EventPublisherModule, 
    UsersModule, 
    LoggerModule
  ],
})
export class AppModule {}