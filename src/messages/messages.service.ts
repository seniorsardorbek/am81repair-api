import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { MailService } from 'src/mail/mail.service'
import { Message } from './Schema/Message'
import { CreateMessageDto } from './dto/create-message.dto'
@Injectable()
export class MessagesService {
  constructor (
    @InjectModel(Message.name) private messageModule: Model<Message>,
    private readonly mailModule: MailService,
  ) {}
  create (createMessageDto: CreateMessageDto) {
     this.mailModule.sendEmail(this.getHtml(createMessageDto))
  
    return this.messageModule.create(createMessageDto)
  }

  private getHtml (createMessageDto: CreateMessageDto) {
    return `<div
     bgcolor="#F3F4F8"
     style="
       width: 100%;
       height: 100%;
       margin: 0 !important;
       padding: 0 !important;
       font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
     "
   >
     <center>
       <div style="display: none; max-height: 0px; overflow: hidden">
         A client send message to use service
       </div>
       <table
         border="0"
         cellpadding="0"
         cellspacing="0"
         width="100%"
         height="100%"
         style="
           width: 100%;
           min-width: 100%;
           height: 100%;
           min-height: 100%;
           border-collapse: collapse;
           margin: 0;
           padding: 0;
           text-align: center;
           table-layout: fixed;
         "
         role="presentation"
       >
         <tbody>
           <tr>
             <td
               class="m_5227529925901652650content__mobilePad_none"
               align="center"
               valign="top"
               bgcolor="#F3F4F8"
               style="padding: 20px 0px 0px 0px"
             >
               <table
                 class="m_5227529925901652650content__tablet_fullWidth"
                 border="0"
                 cellpadding="0"
                 cellspacing="0"
                 align="center"
                 style="
                   width: 100%;
                   max-width: 600px;
                   border-collapse: collapse;
                 "
                 width="600"
                 role="presentation"
               >
                 <tbody>
                   <tr>
                     <td
                       align="center"
                       valign="top"
                       bgcolor=""
                       style="direction: ltr"
                       dir="ltr"
                     >
                       <table
                         border="0"
                         cellpadding="0"
                         cellspacing="0"
                         width="100%"
                         align="center"
                         style="
                           width: 100%;
                           max-width: 600px;
                           border-collapse: collapse;
                         "
                         role="presentation"
                       >
                         <tbody>
                           <tr>
                             <td
                               class="m_5227529925901652650content__mobilePad_40px_20px_0px_20px"
                               align="center"
                               valign="top"
                               bgcolor="#ffffff"
                               style="
                                 padding: 40px 40px 0px 40px;
                                 direction: ltr;
                               "
                               dir="ltr"
                             >
                               <table
                                 border="0"
                                 cellpadding="0"
                                 cellspacing="0"
                                 width="100%"
                                 align="center"
                                 style="width: 100%; border-collapse: collapse"
                                 role="presentation"
                               >
                                 <tbody></tbody>
                               </table>
                             </td>
                           </tr>
                         </tbody>
                       </table>
                       <table
                         border="0"
                         cellpadding="0"
                         cellspacing="0"
                         width="100%"
                         align="center"
                         style="
                           width: 100%;
                           max-width: 600px;
                           border-collapse: collapse;
                         "
                         role="presentation"
                       >
                         <tbody>
                           <tr>
                             <td
                               class="m_5227529925901652650content__mobilePad_40px_0px_0px_0px"
                               align="center"
                               valign="top"
                               bgcolor="#ffffff"
                               style="padding: 60px 0px 0px 0px"
                               dir="ltr"
                             ></td>
                           </tr>
                           <tr>
                             <td
                               class="m_5227529925901652650content__mobilePad_0px_20px"
                               align="left"
                               valign="top"
                               bgcolor="#ffffff"
                               style="
                                 padding: 0px 40px;
                                 font-family: Helvetica, Arial, sans-serif;
                                 font-size: 16px;
                                 line-height: 150%;
                                 color: #0a0a0a !important;
                                 direction: ltr;
                               "
                               dir="ltr"
                             >
                               <p>
                                 Hey there!<br /><br />It’s message from client
                                 ${createMessageDto?.fullname} .
                                 <p>Service:${ createMessageDto?.service}</p>
                                 <p>Zipcode:${ createMessageDto?.zipcode}</p>
                                 <p>${createMessageDto?.message}</p>
                               </p>
                             </td>
                           </tr>
                           <tr>
                             <td
                               class="m_5227529925901652650content__mobilePad_20px_0px_0px_0px"
                               align="center"
                               valign="top"
                               bgcolor="#ffffff"
                               style="padding: 20px 0px 0px 0px"
                               dir="ltr"
                             ></td>
                           </tr>
                         </tbody>
                       </table>
                       <table
                         border="0"
                         cellpadding="0"
                         cellspacing="0"
                         width="100%"
                         align="center"
                         style="
                           width: 100%;
                           max-width: 600px;
                           border-collapse: collapse;
                         "
                         role="presentation"
                       >
                         <tbody>
                           <tr>
                             <td
                               class="m_5227529925901652650content__mobilePad_0px_20px"
                               align="left"
                               valign="top"
                               bgcolor="#ffffff"
                               style="padding: 0px 40px 0px 40px"
                               dir="ltr"
                             >
                               <table
                                 border="0"
                                 cellpadding="0"
                                 cellspacing="0"
                                 align="left"
                                 style="border-collapse: collapse"
                                 role="presentation"
                               >
                                 <tbody>
                                   <tr>
                                     <td
                                       align="center"
                                       valign="top"
                                       style="
                                         font-family: Helvetica, Arial,
                                           sans-serif;
                                           justify-content: space-between;
                                       "
                                       dir="ltr"
                                     >
                                       <a
                                         href="mailto:${createMessageDto?.mail}"
                                         class="m_5227529925901652650button__primary_font-size"
                                         style="
                                         margin-bottom: 30px ; 
                                           display: inline-block;
                                           font-size: 16px;
                                           line-height: 24px;
                                           color: #ffffff;
                                           background-color: #4262ff;
                                           text-decoration: none;
                                           padding: 11px 18px 13px 24px;
                                           border-radius: 25px;
                                           text-align: center;
                                         "
                                         target="_blank"
                                       >
                                         <span
                                           >Answer with email&nbsp;→  ${createMessageDto?.mail}</span
                                         >
                                       </a>
                                       <a
                                         href="tel:${createMessageDto?.phone}"
                                         class="m_5227529925901652650button__primary_font-size"
                                         style="
                                           display: inline-block;
                                           font-size: 16px;
                                           line-height: 24px;
                                           color: #ffffff;
                                           background-color: red;
                                           text-decoration: none;
                                           padding: 11px 18px 13px 24px;
                                           border-radius: 25px;
                                           text-align: center;
                                         "
                                       >
                                         <span
                                           >Answer with phone&nbsp;→ ${createMessageDto?.phone}</span
                                         >
                                       </a>
                                     </td>
                                   </tr>
                                 </tbody>
                               </table>
                             </td>
                           </tr>
                           
                         </tbody>
                       </table>
                     </td>
                   </tr>
                 </tbody>
               </table>
               
             </td>
           </tr>
         </tbody>
       </table>
     </center>
     <div class="yj6qo"></div>
     <div class="adL"></div>
   </div>`
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
