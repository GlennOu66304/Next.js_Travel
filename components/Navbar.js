import react,{useState,useEffect} from 'react';
import Link from 'next/link';
import navbarStyles from '../styles/navbar.module.css';
import {Button} from './Button';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import {faInstagram, faTypo3} from '@fortawesome/free-brands-svg-icons';

library.add(
    faTypo3
)

function Navbar(param) {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu =() => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    },[]);


   /* window.addEventListener('resize',showButton);*/
return (
    <>
    <nav className={navbarStyles.navbar}>
        <div className={navbarStyles.navbar_container}>
            <div className={navbarStyles.navbar_logo}>
                TRVL
                <Link href = '/'  onClick={closeMobileMenu}>
                    <FontAwesomeIcon icon={faTypo3} className={navbarStyles.fa_typo3}/>
                </Link>
            </div>


            <div className={navbarStyles.menu_icon} onClick={handleClick}>
                <FontAwesomeIcon icon={click ? faTimes : faBars}/>
            </div>

            <ul className={navbarStyles.nav_menu}>
                <li>
                    <Link href='/' className={navbarStyles.nav_links} onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>

                <li>
                    <Link href='/services' className={navbarStyles.nav_links} onClick={closeMobileMenu}>
                        services
                    </Link>
                </li>

                <li>
                    <Link href='/products' className={navbarStyles.nav_links}onClick={closeMobileMenu}>
                        Products
                    </Link>
                </li>

                <li >
                    <Link href='/signup' className={navbarStyles.nav_links} onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>

            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP </Button>}
        </div>
    </nav>
    </>
)

}

export default Navbar;