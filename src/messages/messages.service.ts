import { Injectable } from '@nestjs/common'
import { CreateMessageDto } from './dto/create-message.dto'
import { UpdateMessageDto } from './dto/update-message.dto'
import { MailService } from 'src/mail/mail.service'
import { InjectModel } from '@nestjs/mongoose'
import { Message } from './Schema/Message'
import { Model } from 'mongoose'
@Injectable()
export class MessagesService {
  constructor (
    @InjectModel(Message.name) private messageModule: Model<Message>,
    private readonly mailModule: MailService,
  ) {}
  create (createMessageDto: CreateMessageDto) {
    this.messageModule.create(createMessageDto)
    this.mailModule.sendEmail(this.getHtml(createMessageDto))
    return
  }

  private getHtml (createMessageDto: CreateMessageDto) {
    return `<p>Hello message from client</p>
    <p>${createMessageDto?.zipcode}</p>
    <p>${createMessageDto?.sevice}</p>
      <p>From:${createMessageDto?.fullname}</p>
      <p>Phone Number:${createMessageDto?.phone}</p>
      <p>${createMessageDto?.message}</p>`
  }
}

// findAll() {
//   return `This action returns all messages`;
// }

// findOne(id: number) {
//   return `This action returns a #${id} message`;
// }

// update(id: number, updateMessageDto: UpdateMessageDto) {
//   return `This action updates a #${id} message`;
// }

// remove(id: number) {
//   return `This action removes a #${id} message`;
// }
