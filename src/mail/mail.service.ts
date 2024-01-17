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
        user: "minimatchuz@gmail.com", 
        pass: "pdtd lnsk clvy hyrv",
      },
    });
  }
  

  async sendEmail(html :string) {
    const mailOptions = {
      from: "minimatchuz@gmail.com", // Sender email address
      to:"sardorbekmusilman@gmail.com", 
      subject:"Client sent message for service",
      text :"Email text",
      html,
    };

    return new Promise((resolve, reject) => {
      this.transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve(info);
        }
      });
    });
  }
}
