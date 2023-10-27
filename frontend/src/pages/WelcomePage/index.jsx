import React from 'react';
import AuthNav from './AuthNav';
import css from "./WelcomePage.module.css"
// import svg

const WelcomePage = () => {
  return (
   <div className={css.container}>
        <div className={css.logoContainer}>
          <img
          className={css.logo}
          loading="lazy"
           // src={}
            alt="Logo"
          />
        </div>
      <div className={css.content}>
        <div className={css.title}>
          Welcome to the app! <br />
        </div>
        <div className={css.description}>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily
          save and retrieve your own recipes at any time.
        </div>
      </div>
     <AuthNav/>
      </div>

  );
}


export default WelcomePage;
