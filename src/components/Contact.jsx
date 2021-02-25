import React from 'react';
import styles from '../styles/Contact.module.css'
import { graphql, useStaticQuery } from 'gatsby'
import { motion } from 'framer-motion'

import FacebookIcon from '../vectors/facebookIcon.inline.svg'
import InstagramIcon from '../vectors/instagramIcon.inline.svg'
import WhatsappIcon from '../vectors/whatsappIcon.inline.svg'
import MailIcon from '../vectors/mailIcon.inline.svg'
import LocationIcon from '../vectors/locationIcon.inline.svg'

const backDropVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { duration: 0.2 }
    }
}

const modalVariant = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.2, ease: 'easeInOut' }
    }
  }

const Contact = ({setShowContact}) => {
    const { strapiInformacoesDeContato: { Facebook, Instagram, Whatsapp, Email, Endereco } } = useStaticQuery(graphql`
    {
        strapiInformacoesDeContato {
            Facebook
            Instagram
            Whatsapp
            Email
            Endereco
        }
    }`)

    return (
        <motion.div
            className={styles.contactDropdown}
            variants={backDropVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <motion.div
                className={styles.contactModal}
                variants={modalVariant}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
            <button className={styles.closeButton} onClick={() => {setShowContact(false)}}>X</button>
                <div className={styles.mainContactSession}>
                    <div>
                        <MailIcon className={styles.icon} />
                        <span>{Email}</span>
                    </div>
                    <div>
                        <LocationIcon className={styles.icon + ' ' + styles.addressIcon} />
                        <span>{Endereco}</span>
                    </div>
                </div>
                <div className={styles.horizontalRuler}>OU</div>
                <div className={styles.socialMediaButtons}>
                    <a role="button" aria-label="Facebook Media Button" href={Facebook} target="_blank" rel="noopener noreferrer" ><FacebookIcon href={Facebook}/></a>
                    <a role="button" aria-label="Instagram Media Button" href={Instagram} target="_blank" rel="noopener noreferrer" ><InstagramIcon href={Instagram}/></a>
                    <a role="button" aria-label="Whatsapp Media Button" href={'https://wa.me/'+Whatsapp} target="_blank" rel="noopener noreferrer" ><WhatsappIcon href={'https:/>/wa.me/'+Whatsapp}/></a>
                </div>
            </motion.div>
        </motion.div>
    )
}
 
export default Contact;