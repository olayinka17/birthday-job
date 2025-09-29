const sgMail = require("@sendgrid/mail");
const fs = require("fs");
const path = require("path");
const { htmlToText } = require("html-to-text");
require("dotenv").config();

class Email {
  constructor(user) {
    this.to = user.email;
    this.username = user.username;
    this.from = `olayinka <${process.env.EMAIL_FROM}>`;
  }



  async send(subject) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const htmlTemplate = fs.readFileSync(
      path.join(__dirname, "../email.html"),
      "utf8"
    );

    const html = htmlTemplate.replace(/{{name}}/g, this.username);

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: subject,
      html,
      text: htmlToText(html),
    };

    await sgMail.send(mailOptions);
  }

  async sendEmail() {
    await this.send(`Happy birthday! ${this.username}`);
  }
}

module.exports = Email;
