import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext.jsx'
import NavLogo from '../vectors/navLogo.inline.svg'
import styles from '../styles/Navbar.module.css'
import CartIcon from '../vectors/cart.inline.svg'
import Contact from './Contact.jsx'
import { AnimatePresence } from 'framer-motion'
import { Link } from 'gatsby'

const Navbar = () => {
    const [showContact, setShowContact] = useState(false)
    const { setOpenCart } = useContext(CartContext)

    return (
        <div className={styles.navbar}>
            <AnimatePresence exitBeforeEnter>
                {showContact && <Contact setShowContact={setShowContact}/>}
            </AnimatePresence>
            <span className={styles.navLogoContainer}><Link to="/" ><NavLogo className={styles.navLogo}/></Link></span>
            <Link to="/catalogo" className={styles.catalogIcon}>Catalogo</Link>
            <button className={styles.contactIcon} onClick={() => {setShowContact(true)}}>Contato</button>
            <span className={styles.cartIconContainer}><CartIcon  className={styles.cartIcon} onClick={e => setOpenCart(true)}/></span>
        </div>
    );
}
 
export default Navbar;