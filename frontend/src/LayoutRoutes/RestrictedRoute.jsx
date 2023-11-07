import PropTypes from "prop-types";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectToken } from "redux/auth/selectors";

const RestrictedRoute = ({ component: Component, redirect = "/" }) => {
  const location = useLocation();
  const isAuthenticated = useSelector(selectToken);
  const redirectTo = location.state?.from || redirect;

  console.log("isAuthenticated", isAuthenticated);

  return isAuthenticated ? (
    <Navigate to={redirectTo} state={{ from: location }} replace />
  ) : (
    <Suspense fallback={<></>}>{Component}</Suspense>
  );
};

RestrictedRoute.propTypes = {
  component: PropTypes.node.isRequired,
  redirect: PropTypes.string,
};

export default RestrictedRoute;
