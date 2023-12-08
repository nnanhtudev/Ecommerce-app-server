import "dotenv/config";

module.exports = {
  MAILER: process.env.MAIL_MAILER,
  HOST: process.env.MAIL_HOST,
  PORT: process.env.MAIL_PORT,
  USERNAME: process.env.MAIL_USERNAME,
  PASSWORD: process.env.MAIL_PASSWORD,
  ENCRYPTION: process.env.MAIL_ENCRYPTION,
  FORM_ADDRESS: process.env.MAIL_FORM_ADDRESS,
  FORM_NAME: process.env.MAIL_FORM_NAME,
};
