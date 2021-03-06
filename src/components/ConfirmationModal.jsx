import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext.jsx'
import styles from '../styles/ConfirmationModal.module.css'
import Img from 'gatsby-image'

const ConfirmationModal = () => {
    const { cart } = useContext(CartContext)
    console.log(cart)
    return (
        <div className={styles.cartList}>
        {cart.map((line, i) => (
            <div key={i} className={styles.cartLine}>
                <Img
                    fixed={line.item.capa.childImageSharp.secondaryFixed}
                    className={styles.lineImage}
                />
                <div className={styles.lineData}>
                    <div className={styles.lineTitle}>{line.item.titulo}</div>
                    <div className={styles.lineSize}>Tamanho: {line.personalData.size}</div>
                    <div className={styles.lineColor}>Cor: {line.personalData.color}</div>
                    <div className={styles.linePrice}>{
                    ((line.item.preco_promocional ? line.item.preco_promocional : line.item.preco_em_centavos)/100).toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' })
                    }</div>
                </div>
                <hr />
            </div>
        ))}
        </div>
    );
}
 
export default ConfirmationModal;