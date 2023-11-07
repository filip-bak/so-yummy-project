import Button from "components/Button";
import Loader from "components/Loader";
import { ErrorMessage, Field, Formik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "redux/auth/actions";
import { selectError, selectIsLoading } from "redux/auth/selectors";
import * as Yup from "yup";
import css from "./SigninForm.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValue = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email", { minDomainSegments: 2 })
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email"
    )
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const SigninForm = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  const handleSubmit = async (formData, { resetForm }) => {
    const status = await dispatch(login(formData));

    if (status.error?.message !== "Rejected") {
      toast.success("Logged in successfully!");
      navigate("/");
    } else {
      toast.error("Email or password is wrong");
    }

    setIsSubmit(false);

    resetForm();
  };

  return (
    <div className={css.registerFormWrapper}>
      <div className={css.background}></div>
      <Loader visible={isLoading} wrapperClass={css.loader} />
      <Formik
        initialValues={initialValue}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnChange={isSubmit}
        validateOnBlur={false}
      >
        {({ handleSubmit, errors, touched }) => (
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <div className={css.title}>Sign In</div>
            <div className={css.fields}>
              <label className={css.label} htmlFor="signin-email">
                <Field
                  className={`${css.field} ${
                    errors.email && touched.email ? css["field-error"] : ""
                  } `}
                  id="signin-email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                  required
                />
                <ErrorMessage name="email" component="p" className="error" />
              </label>
              <label className={css.label} htmlFor="signin-password">
                <Field
                  id="signin-password"
                  className={`${css.field} ${
                    errors.password && touched.password
                      ? css["field-error"]
                      : ""
                  } `}
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <ErrorMessage name="password" component="p" className="error" />
              </label>
            </div>

            <Button
              variant="secondary"
              size="large"
              unique="short"
              type="submit"
            >
              Sign In
            </Button>
          </form>
        )}
      </Formik>

      {isError === `Invalid email` ? (
        <p className={`error`}>Invalid email.</p>
      ) : (
        <p className={`error`}>{isError?.message}</p>
      )}
        <ToastContainer />
      <Link className={css.registerLink} to={"/register"}>
        Registration
      </Link>
    </div>
  );
};
