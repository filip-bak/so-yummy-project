import React from "react";
import css from "./RegisterPage.module.css";
import { RegisterForm } from "../../components/RegisterForm/RegsterForm";

const RegisterPage = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <RegisterForm />
      </div>
    </section>
  );
};

export default RegisterPage;
