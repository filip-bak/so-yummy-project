import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsRefreshing, selectToken } from "@redux/auth/selectors";

const PrivateRoute = ({ component: Component, redirect = "/welcome" }) => {
  const location = useLocation();
  const token = useSelector(selectToken);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isRefreshing && !token;

  return shouldRedirect ? (
    <Navigate to={redirect} state={{ from: location }} replace />
  ) : (
    Component
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.node,
  redirect: PropTypes.string,
};

export default PrivateRoute;
