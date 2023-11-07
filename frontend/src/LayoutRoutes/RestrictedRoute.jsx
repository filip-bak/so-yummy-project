import { Suspense } from "react";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import { selectToken } from "redux/auth/selectors";
import Loader from "components/Loader";
import { useSelector } from "react-redux";

const RestrictedRoute = ({ component: Component, redirect = "/" }) => {
  const location = useLocation();
  const isAuthenticated = useSelector(selectToken);
  const redirectTo = location.state?.from || redirect;

  return isAuthenticated ? (
    <Navigate to={redirectTo} state={{ from: location }} replace />
  ) : (
    <Suspense fallback={<Loader visible={true} refresh={true} />}>
      {Component}
    </Suspense>
  );
};

RestrictedRoute.propTypes = {
  component: PropTypes.node.isRequired,
  redirect: PropTypes.string,
};

export default RestrictedRoute;
