import css from './FooterSubscribeForm.module.css'
import  Button  from '../../Button/index'



export const FooterSubscribeForm = () => {
    return (
        <div className={css.subscribeContainer}>
            <div className={css.subscribeBox}>
                <h2 className={css.subscribeTitle}>Subscribe to our Newsletter</h2>
                <p className={css.subscribeDescription}>Subscribe to our newsletter. Be in touch with latest news and special offers, etc.</p>
            </div>

            <form autocomplete="off" className={css.subscribeForm}>
                <label for="email" className={css.subscribeLabel}>
                    {/* <input className={css.subscribeInput} type="email" id="email" name="email" placeholder="Enter your email address" required /> */}
                    <Button variant="secondary" size="medium" unique="svg" >
                        <svg>
                            <use href="<path-to-icons.svg>#id-ikony"/>
                        </svg>
                        TEXT
                    </Button>
                </label>
                <Button variant="secondary" size="medium">Subscribe</Button>
            </form>
        </div>
    );
  };