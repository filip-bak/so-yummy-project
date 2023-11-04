import { Outlet } from "react-router-dom";

const AuthSharedLayout = () => {
  return (
    <div>
      {/* <p>background</p> */}
      <Outlet />
    </div>
  );
};

export default AuthSharedLayout;
