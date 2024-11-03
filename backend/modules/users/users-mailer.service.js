const config = require("../../config");
const { sendMail } = require("../mailer/mailer.service");

const sendUserVerificationMail = async (email, verificationToken) => {
  const mailOptions = {
    to: email,
    subject: "Welcome to So Yummy Project!",
    text: `Hi Please verify your account by clicking ${config.hostURL}/users/verify/${verificationToken}`,
    html: `<h2>Hi</h2><br/>Please verify your account by clicking <a href="${config.hostURL}/users/verify/${verificationToken}">
            <button style="background-color: #6082B6; color: white; padding: 10px 15px; border: none; border-radius: 5px; cursor: pointer;">
                Verify
            </button>
        </a>`,
  };

  await sendMail(mailOptions);
};

module.exports = {
  sendUserVerificationMail,
};
