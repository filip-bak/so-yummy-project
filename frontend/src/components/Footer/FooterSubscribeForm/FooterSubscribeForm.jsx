// import { FooterLogo } from './FooterLogo/FooterLogo';
import css from './FooterSubscribeForm.module.css'



export const FooterSubscribeForm = () => {
    return (
        <div className={css.subscribeContainer}>
            <h2 className={css.subscribeTitle}>Subscribe to our Newsletter</h2>
            <p className={css.subscribeDescription}>Subscribe to our newsletter. Be in touch with latest news and special offers, etc.</p>

            <form autocomplete="off" className={css.subscribeForm}>
                <label for="email" className={css.subscribeLabel}>
                    <input className={css.subscribeInput} type="email" id="email" name="email" placeholder="Enter your email address" required />
                </label>
                <button type="submit" className={css.subscribeBtn}>Subscribe</button>
            </form>
        </div>
    );
  };