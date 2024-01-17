import { Module } from '@nestjs/common'
import { MessagesService } from './messages.service'
import { MessagesController } from './messages.controller'
import { MailService } from 'src/mail/mail.service'
import { MongooseModule } from '@nestjs/mongoose'
import { Message, MessageSchema } from './Schema/Message'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
  ],
  controllers: [MessagesController],
  providers: [MessagesService, MailService],
})
export class MessagesModule {}
