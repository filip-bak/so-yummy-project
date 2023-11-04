import React from "react";
import css from "./SigninPage.module.css";
import { SigninForm } from "components/SigninForm/SigninForm";

const SigninPage = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <SigninForm />
      </div>
    </section>
  );
};

export default SigninPage;
