// import { FooterLogo } from './FooterLogo/FooterLogo';
import css from './FooterLogo.module.css'






export const FooterLogo = () => {
    return (
        <div>
            {/* <svg className={css.logoIcon} width="16" height="12">
                <use href=""></use>
            </svg> */}
            
            <h2 className={css.logoTitle}>So Yummy</h2>

{/* BENEFITY NA WERSJE DESK I TABLET */}

            <ul className={css.logoBenefitsList}>
                <li className={css.logoBenefitsItem}>Database of recipes that can be replenished</li>
                <li className={css.logoBenefitsItem}>Flexible search for desired and unwanted ingredients</li>
                <li className={css.logoBenefitsItem}>Ability to add your own recipes with photos</li>
                <li className={css.logoBenefitsItem}>Convenient and easy to use</li>
            </ul>
        </div>

    );
  };