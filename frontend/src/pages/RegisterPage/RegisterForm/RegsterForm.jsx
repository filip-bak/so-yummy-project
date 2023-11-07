import Button from "components/Button";
import Loader from "components/Loader";
import { ErrorMessage, Field, Formik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "redux/auth/actions";
import { selectError, selectIsLoading } from "redux/auth/selectors";
import * as Yup from "yup";
import css from "./RegisterForm.module.css";
import icons from "../../../images/icons.svg";

const initialValue = {
  name: "",
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  name: Yup.string()
    .matches(
      /^[a-zA-Z0-9а-яА-Я]+(([' -][a-zA-Z0-9а-яА-Я ])?[a-zA-Z0-9а-яА-Я]*)*$/,
      "Invalid name"
    )
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email", { minDomainSegments: 2 })
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email"
    )
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Enter a valid Password"),
});

export const RegisterForm = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  const handleSubmit = async (formData, { resetForm }) => {
    const status = await dispatch(register(formData));

    if (status.error?.message !== "Rejected") {
      navigate("/signin");
    }
    setIsSubmit(false);
    resetForm();
  };

  return (
    <div className={css.wrapper}>
      <div className={css.background}></div>
      <Loader visible={isLoading} wrapperClass={css.loader} />
      <Formik
        initialValues={initialValue}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnChange={isSubmit}
        validateOnBlur={false}
      >
        {({ handleSubmit, errors, touched, field }) => (
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <div className={css.title}>Registration</div>
            <div className={css.fields}>
              <div
                className={`${css.fieldWithIconUser} ${
                  isNameFocused ? css.fieldFocused : ""
                } ${errors.name && touched.name ? css.fieldError : ""}`}
              >
                <label className={css.label} htmlFor="register-name">
                  <svg className={css.userIcon}>
                    <use href={`${icons}#icon-input-user`} />
                  </svg>
                  <Field
                    className={`${css.field}  ${
                      errors.name && touched.name ? css["field-error"] : ""
                    }`}
                    id="register-name"
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    autoComplete="off"
                    onFocus={() => setIsNameFocused(true)}
                    onBlur={() => setIsNameFocused(false)}
                  />
                  <ErrorMessage name="name" component="p" className="error" />
                </label>
              </div>
              <div
                className={`${css.fieldWithIconEmail} ${
                  isEmailFocused ? css.fieldFocused : ""
                } ${errors.email && touched.email ? css.fieldError : ""}`}
              >
                <label className={css.label} htmlFor="register-email">
                  <svg className={css.emailIcon}>
                    <use href={`${icons}#icon-input-envelope`} />
                  </svg>
                  <Field
                    className={`${css.field}  ${
                      errors.email && touched.email ? css["field-error"] : ""
                    }`}
                    id="register-email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="off"
                    required
                    onFocus={() => setIsEmailFocused(true)}
                    onBlur={() => setIsEmailFocused(false)}
                  />
                  <ErrorMessage name="email" component="p" className="error" />
                </label>
              </div>
              <div
                className={`${css.fieldWithIconPassword} ${
                  isPasswordFocused ? css.fieldFocused : ""
                } ${errors.password && touched.password ? css.fieldError : ""}`}
              >
                <label className={css.label} htmlFor="register-password">
                  <svg className={css.passwordIcon}>
                    <use href={`${icons}#icon-input-padlock`} />
                  </svg>
                  <Field
                    className={`${css.field} ${
                      errors.password && touched.password
                        ? css["field-error"]
                        : ""
                    }`}
                    id="register-password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    onFocus={() => setIsPasswordFocused(true)}
                    onBlur={() => setIsPasswordFocused(false)}
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className={`error`}
                  />
                  <Field name="password">
                    {({ field }) => (
                      <>
                        {field.value.length >= 4 && field.value.length < 9 && (
                          <p className={`error-warning`}>
                            Your password is little secure
                          </p>
                        )}
                        {field.value.length >= 9 && (
                          <p className={`successs`}>Password is secure</p>
                        )}
                      </>
                    )}
                  </Field>
                </label>
              </div>
            </div>
            <Button
              variant="secondary"
              size="large"
              unique="short"
              type="submit"
              onClick={() => setIsSubmit(true)}
            >
              Sign up
            </Button>
            {isError === `Invalid email` && (
              <p className={`error`}>Incorrect email.</p>
            )}
            {isError === "Email conflict" && (
              <p className={`error`}>This email address is already in use.</p>
            )}
          </form>
        )}
      </Formik>

      <Link className={css.signInLink} to={"/signin"}>
        Sign in
      </Link>
    </div>
  );
};
