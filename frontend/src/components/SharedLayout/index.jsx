import { Outlet } from "react-router-dom";
import { Footer } from '../Footer/Footer';

const SharedLayout = () => {
  return (
    <div>
      Header
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayout;
