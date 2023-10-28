import { FooterLogo } from './FooterLogo/FooterLogo';
import { FooterNav } from './FooterNav/FooterNav';
import { FooterSubscribeForm } from './FooterSubscribeForm/FooterSubscribeForm';
import { FooterRights } from './FooterRights/FooterRights';
// import { FooterFollowUs } from './FooterFollowUs/FooterFollowUs';



export const Footer = () => {
    return (
        <div>
            <FooterLogo />
            <FooterNav />
            {/* <FooterFollowUs /> */}
            <FooterSubscribeForm />
            <FooterRights />

        </div>
   
    );
  };