import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({
  versionKey: false,
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class Message {
  @Prop({
    type: String,
    required: true,
  })
  fullname: string
  @Prop({
    type: String,
  })
  mail: string
  @Prop({
    type: String,
  })
  phone: string
  @Prop({
    type: String,
    required: true,
  })
  zipcode: string
  @Prop({
    type: String,
    required: true,
  })
  service: string
  @Prop({
    type: String,
  })
  message: string
}
export const MessageSchema = SchemaFactory.createForClass(Message)


