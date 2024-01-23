import { Injectable } from "@nestjs/common";
import * as nodemailer from "nodemailer";

@Injectable()
export class MailService {
  private transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587, 
      secure: false, 
      auth: {
        user: "amrepair81@gmail.com", 
        pass: "arfm bvwk kpdc msfc",
      },
    });
  }
  

  async sendEmail(html :string) {
    const mailOptions = {
      from: "amrepair81@gmail.com", // Sender email address
      to:"sardorbekmusilman@gmail.com", 
      subject:"Client sent message for service",
      text :"Please answer the following questions",
      html,
    };

    return new Promise((resolve, reject) => {
      this.transporter.sendMail(mailOptions, (error, info) => {
        console.log(error); 
        console.log(info); 
        if (error) {
          reject(error);
        } else {
          resolve(info);
        }
      });
    });
  }
}
