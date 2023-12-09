import nodeMailer from "nodemailer";
import mailConfig from "../config/mail.config";
import "dotenv/config";

const transporter = nodeMailer.createTransport({
  host: mailConfig.HOST,
  port: mailConfig.PORT,
  secure: false,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: mailConfig.USERNAME,
    pass: mailConfig.PASSWORD,
  },
});

const options = (toSendMail, toSendMailSubject, toSendHtmlContent) => {
  return {
    from: `"Ecommerce@support"<${mailConfig.FORM_ADDRESS}>`, // sender address
    to: toSendMail, // list of receivers
    subject: toSendMailSubject, // Subject line
    html: toSendHtmlContent, // html body
  };
};

const sendMail = async (to, subject, htmlContent) => {
  try {
    let info = await transporter.sendMail(options(to, subject, htmlContent));
    console.log("Message sent: %s", info.messageId);
    return info.messageId;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // Rethrow the error for handling elsewhere if needed
  }
};

export default sendMail;
