const config = require("../../config");
const { sendMail } = require("../mailer/mailer.service");

const sendUserVerificationMail = async (email, verificationToken) => {
  const mailOptions = {
    to: email,
    subject: "Welcome to our site!",
    text: `Hello! Please verify your account by visiting ${config.hostURL}/api/users/verify/${verificationToken}`,
    html: `<h2>Hello!</h2><br/>Please verify your account by clicking <a href="${config.hostURL}/api/users/verify/${verificationToken}">here</a>!`,
  };

  await sendMail(mailOptions);
};

module.exports = {
  sendUserVerificationMail,
};
