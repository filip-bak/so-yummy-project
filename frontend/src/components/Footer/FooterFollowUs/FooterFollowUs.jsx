import css from './FooterFollowUs.module.css'
import icons from '../../../images/icons.svg'

export const FooterFollowUs = () => {
    return (
        <div>
            <ul className={css.followUsList}>
                <li className={css.followUsItem}>
                    <a href="facebook" className={css.followUsLink}>
                        <svg className={css.followUsIcon} width="20" height="20">
                            <use href={`${icons}#icon-facebook`} />
                        </svg>
                    </a>
                </li>
                <li className={css.followUsItem}>
                    <a href="facebook" className={css.followUsLink}>
                        <svg className={css.followUsIcon} width="20" height="15">
                            <use href={`${icons}#icon-youtube`}/>
                        </svg>
                    </a>
                </li>
                <li className={css.followUsItem}>
                    <a href="facebook" className={css.followUsLink}>
                        <svg className={css.followUsIcon} width="20" height="16">
                            <use href={`${icons}#icon-twitter`}/>
                        </svg>
                    </a>
                </li>
                <li className={css.followUsItem}>
                    <a href="facebook" className={css.followUsLink}>
                        <svg className={css.followUsIcon} width="20" height="20">
                            <use href={`${icons}#icon-instagram`}/>
                        </svg>
                    </a>
                </li>
            </ul>    
        </div>

    );
  };