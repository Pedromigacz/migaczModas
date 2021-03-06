import React from 'react';
import styles from '../styles/Footer.module.css'
import { graphql, useStaticQuery } from 'gatsby'

import FacebookIcon from '../vectors/facebookIcon.inline.svg'
import InstagramIcon from '../vectors/instagramIcon.inline.svg'
import WhatsappIcon from '../vectors/whatsappIcon.inline.svg'
import LetSEncrypt from '../vectors/letSEncrypt.inline.svg'

const Footer = () => {
    const { strapiInformacoesDeContato: { Facebook, Instagram, Whatsapp, Endereco } } = useStaticQuery(graphql`
    {
        strapiInformacoesDeContato {
            Facebook
            Instagram
            Whatsapp
            Endereco
        }
    }`)

    return (
        <>
        <div className={styles.FooterContainer}>
            <div className={styles.LetsEncryptData}>
                <LetSEncrypt />
                <h3>Site seguro com criptografia SSL</h3>
            </div>
            <div className={styles.DevData}>
                <span>Site desenvolvido por <a href="https://pedromigacz.com"><strong>&#60;</strong>PedroMigacz <strong>&#47;&#62;</strong></a></span>
            </div>
            <div className={styles.ContactData}>
                <a role="button" aria-label="Instagram Media Button" href={Instagram}><InstagramIcon /></a>
                <a role="button" aria-label="Facebook Media Button" href={Facebook}><FacebookIcon /></a>
                <a role="button" aria-label="Whatsapp Media Button" href={'wa.me/' + Whatsapp}><WhatsappIcon /></a>
            </div>
        </div>
        <div className={styles.lowerFooter}>
            <span>Copyright © 2021 Migacz's Modas. Todos os direitos reservados</span>
            <span>Izabel Migacz cpf: 119.546.234-78</span>
            <span>{Endereco}</span>
        </div>
        </>
    )
}


export default Footer;