import css from "./FooterFollowUs.module.css";
import icons from "@images/icons.svg";
import { Link } from "react-router-dom";

export const FooterFollowUs = () => {
  return (
    <div className={css.followUsBox}>
      <ul className={css.followUsList}>
        <li className={css.followUsItem}>
          <Link to="#" className={css.followUsLink}>
            <svg className={css.followUsIcon} width="20" height="20">
              <use href={`${icons}#icon-facebook`} />
            </svg>
          </Link>
        </li>
        <li className={css.followUsItem}>
          <Link to="#" className={css.followUsLink}>
            <svg className={css.followUsIcon} width="20" height="15">
              <use href={`${icons}#icon-youtube`} />
            </svg>
          </Link>
        </li>
        <li className={css.followUsItem}>
          <Link to="#" className={css.followUsLink}>
            <svg className={css.followUsIcon} width="20" height="16">
              <use href={`${icons}#icon-twitter`} />
            </svg>
          </Link>
        </li>
        <li className={css.followUsItem}>
          <Link to="#" className={css.followUsLink}>
            <svg className={css.followUsIcon} width="20" height="20">
              <use href={`${icons}#icon-instagram`} />
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
};
