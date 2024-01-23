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

  async sendEmail(html: string): Promise<any> {
    const mailOptions = {
      from: "amrepair81@gmail.com", // Sender email address
      to: "sardorbekmusilman@gmail.com",
      subject: "Client sent message for service",
      text: "Please answer the following questions",
      html,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log(info);
      return info;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
