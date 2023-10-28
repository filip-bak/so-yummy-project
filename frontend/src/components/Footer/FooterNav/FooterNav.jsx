// import { FooterLogo } from './FooterLogo/FooterLogo';
import css from './FooterNav.module.css'






export const FooterNav = () => {
    return (
        <div>
            <ul className={css.navList}>
                <li className={css.navItem}>
                    <a href="idk" className={css.navLink}>Ingredients</a>
                </li>
                <li className={css.navItem}>
                    <a href="idk" className={css.navLink}>Add recipes</a>
                </li>
                <li className={css.navItem}>
                    <a href="idk" className={css.navLink}>My recipes</a>
                </li>
                <li className={css.navItem}>
                    <a href="idk" className={css.navLink}>Favorite</a>
                </li>
                <li className={css.navItem}>
                    <a href="idk" className={css.navLink}>Shopping list</a>
                </li>
            </ul>
        </div>

    );
  };