const { updateUser } = require("../../modules/users/users.service");
const { sendSubscribeMail } = require("./subscribe-mailer.service");

const subscribeHandler = async (req, res) => {
  const { email } = req.body;
  const { email: userEmail, subscription } = req.user;
  try {
    if (subscription === true) {
      return res.status(409).json({ message: "You are already subscribed" });
    }

    await sendSubscribeMail(email);

    const user = await updateUser(userEmail, { subscription: true });

    return res.status(200).json({
      subscription: user.subscription,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Ups, email send failed" });
  }
};

module.exports = {
  subscribeHandler,
};
