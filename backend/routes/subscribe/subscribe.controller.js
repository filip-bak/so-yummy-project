const { sendSubscribeMail } = require("./subscribe-mailer.service")

const subscribeHandler = async (req, res) => {
    const { email } = req.body;
    try {
        await sendSubscribeMail(email);
        return res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Ups, email send failed" });
      }
    };

    module.exports = {
        subscribeHandler,
      };