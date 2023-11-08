import React, { useState } from "react";
import css from "./FooterSubscribeForm.module.css";
import Button from "../../Button/index";
import icons from "../../../images/icons.svg";
import axios from "axios";
import { toast } from "react-toastify";

export const FooterSubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isInputClicked, setIsInputClicked] = useState(false);

  const handleEmailChange = event => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
  };

  const validateEmail = email => {
    const validetedEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return validetedEmail.test(email);
  };

  const handleInputClick = () => {
    setIsInputClicked(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isEmailValid) {
      if (Notification.permission !== "granted") {
        Notification.requestPermission().then(permission => {
          //   if (permission === "granted") {
          //     // Utwórz i wyślij powiadomienie push
          //     const notificationOptions = {
          //       body: body: "Thank you for subscribing! 🧡",
          //     };
          //     new Notification("Subscription notification", notificationOptions);
          //   }
        });
      } else {
        const notificationOptions = {
          body: "Thank you for subscribing! 🧡",
        };
        new Notification("Subscription notification`", notificationOptions);
        setEmail("");
      }
    }
  };

  const handleSubscribeClick = async () => {
    try {
      await axios.post("/subscribe", { email });
      toast.success("Email sent successfully!");
    } catch (error) {
      if (error.request.status === 409) {
        return toast.warning("You are already subscribed.");
      }
      toast.error("Error sending email. Please try again later.");
    }
  };

  return (
    <div className={css.subscribeContainer}>
      <div className={css.subscribeBox}>
        <h2 className={css.subscribeTitle}>Subscribe to our Newsletter</h2>
        <p className={css.subscribeDescription}>
          Subscribe to our newsletter. Be in touch with latest news and special
          offers, etc.
        </p>
      </div>

      <form
        autoComplete="off"
        className={css.subscribeForm}
        onSubmit={handleSubmit}
      >
        <Button
          id="email"
          variant="secondary"
          size="medium"
          unique="svg"
          element="input"
          type="email"
          minLength="12"
          value={email}
          onChange={handleEmailChange}
          onClick={handleInputClick}
          required
        >
          <svg>
            <use href={`${icons}#icon-input-envelope`} />
          </svg>
          Enter your email address
        </Button>
        {isInputClicked && !isEmailValid && (
          <div className={css.subscribeError}>Incorrect e-mail address</div>
        )}
        <Button
          variant="secondary"
          size="medium"
          type="submit"
          disabled={!isEmailValid}
          onClick={handleSubscribeClick}
        >
          Subscribe
        </Button>
      </form>
    </div>
  );
};
