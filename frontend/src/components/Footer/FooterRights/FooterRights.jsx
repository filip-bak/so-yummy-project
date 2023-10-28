// import { FooterLogo } from './FooterLogo/FooterLogo';
import css from './FooterRights.module.css'






export const FooterRights = () => {
    return (
        <div>
            <ul className={css.rightsList}>
                <li className={css.rightsItem}>© 2023 All Rights Reserved.</li>
                <li className={css.rightsItem}>Terms of Service</li>
            </ul>
        </div>

    );
  };