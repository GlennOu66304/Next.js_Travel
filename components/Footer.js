import {Button} from './Button';
import footerStyles  from '../styles/Footer.module.css';
import Link from 'next/link';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHighlighter } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin,faTwitter,faFacebook,faYoutube,faInstagram,faTypo3} from '@fortawesome/free-brands-svg-icons';
import navbarStyles from "../styles/Navbar.module.css";

library.add(
    faLinkedin,faTwitter,faFacebook,faYoutube,faInstagram,faTypo3
)
function Footer() {
    return (
        <div className={footerStyles.footer_container}>
            <section className={footerStyles.footer_subscription}>
                <p className={footerStyles.footer_subscription_heading}>
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className={footerStyles.footer_subscription_text}>
                    You can unsubcribe at any time
                </p>

                <div className={ footerStyles.input_areas}>
                    <form>
                        <input type='email' name='email' placeholder='Your Email'
                               className={footerStyles.footer_input}/>
                        <Button buttonStyle='btn--outline'> Subscribe</Button>
                    </form>
                </div>
            </section>

           <div className={footerStyles.footer_links}>
                <div className={footerStyles.footer_link_wrapper}>
                    <div className={footerStyles.footer_link_items}>
                        <h2>About us</h2>
                        <Link href='/signup'>How it works</Link>
                        <Link href='/'>Testimonials</Link>
                        <Link href='/'>Careers</Link>
                        <Link href='/'>Investors</Link>
                        <Link href='/'>Terms of services</Link>
                    </div>

                    <div className={footerStyles.footer_link_items}>
                        <h2>Contact us</h2>
                        <Link href='/'>Contact</Link>
                        <Link href='/'>Support</Link>
                        <Link href='/'>Destination</Link>
                        <Link href='/'>Sponsorships</Link>
                    </div>

                    <div className={footerStyles.footer_link_items}>
                        <h2>Videos</h2>
                        <Link href='/'>Submit Video</Link>
                        <Link href='/'>Ambassadors</Link>
                        <Link href='/'>Agency</Link>
                        <Link href='/'>Influencer</Link>
                    </div>


                    <div className={footerStyles.footer_link_items}>
                        <h2>Social Media</h2>
                        <Link href='/'>Instagram</Link>
                        <Link href='/'>Facebook</Link>
                        <Link href='/'>Youtube</Link>
                        <Link href='/'>Twitter</Link>
                    </div>
                </div>
            </div>

            <section className={footerStyles.social_media}>
                <div className={footerStyles.social_media_wrap}>
                    <div className='footer-logo'>
                        <Link href='/' className='social-logo'>
                            TRAL
                        </Link>
                        <FontAwesomeIcon icon={faTypo3}/>
                    </div>

                    <small className='website-right'> TRVL © 2020</small>
                    <div className='social-icons'>
                        <Link className={footerStyles.social_icon_link}
                              href="/"
                              target="_blank"
                              aria-label='Facebook'>

                          <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                        <Link className='social-icon-link instagram'
                              href="/"
                              target="_blank"
                              aria-label='Instagram'>
                            <FontAwesomeIcon icon={faInstagram}/>
                        </Link>

                        <Link className='social-icon-link youtube'
                              href="/"
                              target="_blank"
                              aria-label='Youtube'>
                            <FontAwesomeIcon icon={faYoutube}/>
                        </Link>

                        <Link className='social-icon-link twitter'
                              href="/"
                              target="_blank"
                              aria-label='Twitter'>
                            <FontAwesomeIcon icon={faTwitter}/>
                        </Link>

                        <Link className='social-icon-link linkedlin'
                              href="/"
                              target="_blank"
                              aria-label='LinkedIn'>
                            <FontAwesomeIcon icon={faLinkedin}/>

                        </Link>
                    </div>
                </div>

            </section>

        </div>
    );
}

export default Footer;
