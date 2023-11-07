import React, { useState } from 'react';
import css from './FooterSubscribeForm.module.css';
import Button from '../../Button/index';
import icons from '../../../images/icons.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => {
  toast.success('Subscription successful');
}

export const FooterSubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isInputClicked, setIsInputClicked] = useState(false);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
  };

  const validateEmail = (email) => {
    const validatedEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return validatedEmail.test(email);
  };

  const handleInputClick = () => {
    setIsInputClicked(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmailValid) {
      // Usunięto kod powiadomienia push
      setEmail('');
    }
  };

  return (
    <div className={css.subscribeContainer}>
      <div className={css.subscribeBox}>
        <h2 className={css.subscribeTitle}>Subscribe to our Newsletter</h2>
        <p className={css.subscribeDescription}>
          Subscribe to our newsletter. Be in touch with latest news and special offers, etc.
        </p>
      </div>

      <form autoComplete="off" className={css.subscribeForm} onSubmit={handleSubmit}>
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
        {isInputClicked && !isEmailValid && <div className={css.subscribeError}>Incorrect e-mail address</div>}
        <Button onClick={notify} variant="secondary" size="medium" type="submit" disabled={!isEmailValid}>
          Subscribe
        </Button>
      </form>
      <ToastContainer />
    </div>
  );
};

