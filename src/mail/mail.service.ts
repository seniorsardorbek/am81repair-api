import { Injectable } from "@nestjs/common";
import * as nodemailer from "nodemailer";

@Injectable()
export class MailService {
  private transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        type: "OAuth2",
        user: "amrepair81@gmail.com",
        clientId: "612540618943-643qkkcmo1cu0vdt0id3ngk0gsnenrtn.apps.googleusercontent.com",
        clientSecret: "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",
        refreshToken: "1//041QS4RFwelVlCgYIARAAGAQSNwF-L9Ir1JyWQ1-wd1ym-bJncZOJBd_o6ftFwA2O2QQSBTMhU0qutQ-PTo7IREj25VP2jBKzmfk",
        accessToken: "ya29.a0AfB_byBMELiZTc8J89726RNs4TrY6RGZXAiHZG0Ipid0EtSsBfenucTlmTrpc88A_fYTphuzRE6qOFfENg4a-IuNohwpu4BvpFbrcIHygN2PxtAjTOTarW4DfG-rDaU4hiHDuzVDd-1Uzo4tc-PLS4qsw0dmfJLwnwwSaCgYKAZMSARISFQHGX2MirhNaEYyKK8_aM7bY6Xuu9g0171",
        password:"hnnbnyhhisxzobkq"
      },
    });
  }

  async sendEmail(html: string): Promise<any> {
    const mailOptions = {
      from: "amrepair81@gmail.com",
      to: "markov81@gmail.com",
      subject: "Client sent message for service",
      text: "Please answer the following questions",
      html,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      return info;
    } catch (error) {
      throw error;
    }
  }
}
