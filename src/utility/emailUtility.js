const nodemailer = require("nodemailer");
const {
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_SECURITY,
  EMAIL_USER,
  EMAIL_PASS,
} = require("../config");
const SendEmail = async (EmailTo, EmailText, EmailSubject) => {
  await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: "Task manager MERN <carlo.leffler@ethereal.email>",
    to: EmailTo,
    subject: EmailSubject,
    text: EmailText,
  };

  return await transporter.sendMail(mailOptions);
};

module.exports = SendEmail;
