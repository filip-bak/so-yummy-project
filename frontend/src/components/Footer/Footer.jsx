import { FooterLogo } from './FooterLogo/FooterLogo';
import { FooterNav } from './FooterNav/FooterNav';
import { FooterSubscribeForm } from './FooterSubscribeForm/FooterSubscribeForm';
import { FooterFollowUs } from './FooterFollowUs/FooterFollowUs';

import css from './Footer.module.css'

export const Footer = () => {
    return (
            <div className={css.containerFooter}>
                <div className={css.bg}></div>
                <div className={css.containerMain}>
                    <div className={css.containerContent}>
                    <FooterLogo />  
                    <FooterNav />   
                    <FooterSubscribeForm />
                    <FooterFollowUs />
                    </div>
                </div>  
                <div className={css.bg2}></div>
            </div>

                
    );
  };