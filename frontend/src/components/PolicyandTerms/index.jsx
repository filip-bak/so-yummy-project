import styles from "./PolicyandTerms.module.css";

const Text = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.rights}>© 2023 All Rights Reserved.</p>
      <p className={styles.terms}>Terms of Service</p>
    </div>
  );
};

export default Text;
