import css from './FooterLogo.module.css'

export const FooterLogo = () => {
    return (
        <div className={css.logoContainer}>
            <div className={css.logoBox}>
                <svg className={css.logoIcon} width="30" height="30">
                    <use href="../../../images/icons.svg#youtube"></use>
                </svg>
                <h2 className={css.logoTitle}>So Yummy</h2>
            </div>
            <div className={css.logoBenefitsBox}>
                <ul className={css.logoBenefitsList}>
                    <li className={css.logoBenefitsItem}>Database of recipes that can be replenished</li>
                    <li className={css.logoBenefitsItem}>Flexible search for desired and unwanted ingredients</li>
                    <li className={css.logoBenefitsItem}>Ability to add your own recipes with photos</li>
                    <li className={css.logoBenefitsItem}>Convenient and easy to use</li>
                </ul>
            </div>

            
        </div>

    );
  };