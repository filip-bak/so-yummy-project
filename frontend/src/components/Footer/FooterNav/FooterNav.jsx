import css from './FooterNav.module.css'
import { Link } from 'react-router-dom';

export const FooterNav = () => {
    return (
        <div>
            <ul className={css.navList}>
                <li className={css.navItem}>
                <Link to="/search" className={css.navLink}>Ingredients</Link>
                </li>
                <li className={css.navItem}>
                <Link to="/add" className={css.navLink}>Add recipes</Link>
                </li>
                <li className={css.navItem}>
                <Link to="/my" className={css.navLink}>My recipes</Link>
                </li>
                <li className={css.navItem}>
                <Link to="/favorite" className={css.navLink}>Favorite</Link>
                </li>
                <li className={css.navItem}>
                <Link to="/shopping-list" className={css.navLink}>Shopping list</Link>
                </li>
            </ul>
        </div>

    );
  };