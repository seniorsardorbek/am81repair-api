import { IsEmail, IsOptional, IsString } from 'class-validator'

export class CreateMessageDto {
  @IsOptional()
  @IsString()
  message: string

  @IsString()
  zipcode: string

  @IsString()
  phone: string
 
  @IsString()
  fullname: string
  
  @IsString()
  service: string

  @IsEmail()
  mail: string
}
