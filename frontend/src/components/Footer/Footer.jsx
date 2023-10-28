import { FooterLogo } from './FooterLogo/FooterLogo';
import { FooterNav } from './FooterNav/FooterNav';
import { FooterSubscribeForm } from './FooterSubscribeForm/FooterSubscribeForm';
import { FooterRights } from './FooterRights/FooterRights';
// import { FooterFollowUs } from './FooterFollowUs/FooterFollowUs';

import css from './Footer.module.css'



export const Footer = () => {
    return (
            <div className={css.containerContentBg}>
                <div className={css.containerContent}>
                    <FooterLogo />
                    <div className={css.containerNavAndMedia}>
                        <FooterNav />
                        {/* <FooterFollowUs /> */}
                    </div>
                <FooterSubscribeForm />
                </div>
            </div>  
    );
  };