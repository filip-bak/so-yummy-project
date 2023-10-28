import pageNotFoundImage from "../../images/page404/page-not-found-mobile.png";
import pageNotFoundImage2 from "../../images/page404/page-not-found-tablet&desktop.png";
import styles from "./NotFoundPage.module.css";
import { MainPageTitle } from "../../components/MainPageTitle/MainPageTitle";

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <MainPageTitle />
      <img
        className={styles.image}
        src={pageNotFoundImage}
        alt="Page Not Found"
        width="259"
        height="170"
        srcSet={pageNotFoundImage2}
      />
      <p className={styles.title}>We are sorry,</p>
      <p className={styles.description}>
        but the page you were looking for can’t be found..
      </p>
    </div>
  );
};

export default NotFoundPage;
