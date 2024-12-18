import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MessagesModule , MongooseModule.forRoot(`mongodb+srv://sardorbekmusilman:P1w9vzeoWMzsFDqL@cluster0.9lsqa.mongodb.net/am81repair`),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
