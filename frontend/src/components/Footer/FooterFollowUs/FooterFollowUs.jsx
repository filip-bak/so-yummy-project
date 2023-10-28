import css from './FooterFollowUs.module.css'

export const FooterFollowUs = () => {
    return (
        <div>
            <ul className={css.followUsList}>
                <li className={css.followUsItem}>
                    <svg className={css.followUsIcon} width="20" height="20">
                        <use href="../../../images/icons.svg#icon-facebook"></use>
                    </svg>
                </li>
                <li className={css.followUsItem}>
                    <svg className={css.followUsIcon} width="20" height="15">
                        <use href="../../../images/icons.svg#icon-youtube"></use>
                    </svg>
                </li>
                <li className={css.followUsItem}>
                    <svg className={css.followUsIcon} width="20" height="16">
                        <use href="../../../images/icons.svg#icon-twitter"></use>
                    </svg>
                </li>
                <li className={css.followUsItem}>
                    <svg className={css.followUsIcon} width="20" height="20">
                        <use href="../../../images/icons.svg#icon-instagram"></use>
                    </svg>
                </li>
            </ul>    
        </div>

    );
  };