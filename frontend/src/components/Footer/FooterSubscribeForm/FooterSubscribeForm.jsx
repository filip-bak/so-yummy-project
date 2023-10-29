import css from './FooterSubscribeForm.module.css'
import  Button  from '../../Button/index'
import icons from '../../../images/icons.svg'



export const FooterSubscribeForm = () => {
    return (
        <div className={css.subscribeContainer}>
            <div className={css.subscribeBox}>
                <h2 className={css.subscribeTitle}>Subscribe to our Newsletter</h2>
                <p className={css.subscribeDescription}>Subscribe to our newsletter. Be in touch with latest news and special offers, etc.</p>
            </div>

            <form autocomplete="off" className={css.subscribeForm}>
                    <Button variant="secondary" size="medium" unique="svg" type="input">
                        <svg>
                            <use href={`${icons}#icon-input-envelope`} />
                        </svg>
                        Enter your email address
                    </Button>
                <Button variant="secondary" size="medium">Subscribe</Button>
            </form>
        </div>
    );
  };