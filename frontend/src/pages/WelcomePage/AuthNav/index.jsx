import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@components/Button";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  const navigate = useNavigate();

  const clickRegister = () => {
    navigate("/register");
  };

  const clickSignin = () => {
    navigate("/signin");
  };

  return (
    <nav className={css.nav}>
      <Button
        variant="outline"
        size="medium"
        unique="fill"
        onClick={clickRegister}
      >
        Registration
      </Button>
      <Button variant="outline" onClick={clickSignin}>
        Sign in
      </Button>
    </nav>
  );
};

export default AuthNav;
