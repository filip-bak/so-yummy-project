import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { App } from "./App";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import Loader from "components/Loader";
import ScrollToTop from "components/ScrollToTop/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/so-yummy-project">
      <Provider store={store}>
        <PersistGate loading={<Loader visible={true} />} persistor={persistor}>
          <ScrollToTop />
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
