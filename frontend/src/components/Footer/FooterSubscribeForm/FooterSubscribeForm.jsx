// import { FooterLogo } from './FooterLogo/FooterLogo';



export const FooterSubscribeForm = () => {
    return (
        <div>
            <h2>Subscribe to our Newsletter</h2>
            <p>Subscribe to our newsletter. Be in touch with latest news and special offers, etc.</p>

            <form autocomplete="off">
                <label for="email">Enter your email address:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" required />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    );
  };