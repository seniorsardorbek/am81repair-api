import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MessagesModule , MongooseModule.forRoot(`mongodb://127.0.0.1:27017/amrepair`),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
