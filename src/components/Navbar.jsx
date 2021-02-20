import React, { useState } from 'react';
import NavLogo from '../vectors/navLogo.inline.svg'
import styles from '../styles/Navbar.module.css'
import CartIcon from '../vectors/cart.inline.svg'
import Contact from './Contact.jsx'

const Navbar = () => {
    const [showContact, setShowContact] = useState(false)
    return (
        <div className={styles.navbar}>
            {showContact && <Contact setShowContact={setShowContact}/>}
            <NavLogo className={styles.navLogo}/>
            <button className={styles.contactIcon} onClick={() => {setShowContact(true)}}>Contato</button>
            <CartIcon  className={styles.cartIcon}/>
        </div>
    );
}
 
export default Navbar;