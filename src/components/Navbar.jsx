import React, { useState } from 'react';
import NavLogo from '../vectors/navLogo.inline.svg'
import styles from '../styles/Navbar.module.css'
import CartIcon from '../vectors/cart.inline.svg'
import Contact from './Contact.jsx'
import { AnimatePresence } from 'framer-motion'
import { Link } from 'gatsby'

const Navbar = () => {
    const [showContact, setShowContact] = useState(false)
    return (
        <div className={styles.navbar}>
            <AnimatePresence exitBeforeEnter>
                {showContact && <Contact setShowContact={setShowContact}/>}
            </AnimatePresence>
            <Link to="/" ><NavLogo className={styles.navLogo}/></Link>
            <button className={styles.contactIcon} onClick={() => {setShowContact(true)}}>Contato</button>
            <CartIcon  className={styles.cartIcon}/>
        </div>
    );
}
 
export default Navbar;