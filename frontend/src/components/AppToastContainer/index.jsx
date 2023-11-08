import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppToastContainer = () => {
  return (
    <ToastContainer
      position="top-right"
      newestOnTop={false}
      pauseOnFocusLoss={false}
      pauseOnHover={false}
      closeOnClick
      theme={"light"}
    />
  );
};

export default AppToastContainer;
