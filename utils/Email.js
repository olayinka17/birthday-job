const nodemailer = require("nodemailer");
const fs = require("fs")
const path = require("path")
const { htmlToText} = require("html-to-text")
require("dotenv").config();

class Email {
  constructor(user) {
    this.to = user.email;
    this.username = user.username;
    this.from = process.env.EMAIL_USER;
  }
  newTransport() {
   return nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async send(subject) {
    const htmlTemplate = fs.readFileSync(path.join(__dirname, "../email.html"), "utf8")

    const html = htmlTemplate.replace(/{{name}}/g, this.username)

    const mailOptions = {
        from: this.from,
        to: this.to,
        subject: subject,
        html,
        text: htmlToText(html)
    }
    await this.newTransport().sendMail(mailOptions)
  }

  async sendEmail() {
    await this.send(`Happy birthday! ${this.username}`)
  }
}

module.exports = Email