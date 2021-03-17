import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext.jsx'
import styles from '../styles/Cart.module.css'
import Img from 'gatsby-image'
import TrashCanIcon from '../vectors/trashCan.inline.svg'
import { Link } from 'gatsby'
import { AnimatePresence, motion } from 'framer-motion'

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
      x: 400,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.2, duration: 0.2, ease: 'easeInOut' }
    }
  }

const Cart = () => {
    const { cart, openCart, setOpenCart, removeItemFromCart, totalPrice } = useContext(CartContext)

    return (
        <>
        <AnimatePresence exitBeforeEnter>
        {openCart && (
            <motion.div
                className={styles.cartBackdrop}
                variants={backDropVariant}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                <motion.div
                    className={styles.cartModal}
                    variants={modalVariant}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <button aria-label="Fechar carrinho" className={styles.closeButton} onClick={e => {setOpenCart(false)}}>X</button>
                    <div className={styles.cartItensContaineir}>
                        {cart.length ? (
                            cart.map((linha, i) => (
                                <div className={styles.cartLine} key={i}>
                                    <Img fixed={linha.item.imagens[0].localFile.childImageSharp.fixed} className={styles.lineIcon}/>
                                    <span className={styles.lineTitle}>{
                                        (linha.item.titulo.length >=45) ? (linha.item.titulo.slice(0, 45) + '...') : (linha.item.titulo)
                                    }</span><br/>
                                    <span className={styles.lineSize}>Tamanho: {linha.personalData.size}</span>
                                    <span className={styles.lineColor}>Cor: {linha.personalData.color}</span>
                                    <div className={styles.linePrice}>{
                                        ((linha.item.preco_promocional ? linha.item.preco_promocional : linha.item.preco_em_centavos)/100).toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' })
                                    }</div>
                                    <button aria-label="remover item do carrinho" className={styles.trashCanIcon} onClick={e => {removeItemFromCart(i)}}><TrashCanIcon /></button>
                                </div>
                            ))
                        ) : (<span className={styles.emptyCartDisclaimer}>Parece que seu carrinho está vazio...</span>)}
                    </div>
                    <div className={styles.checkoutButtonContainer}>
                        <div className={styles.totalPrice}>Total: {(totalPrice/100).toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' })}</div>
                        <Link to="/checkout"><button
                            disabled={!cart.length && 'disabled'}
                            aria-label="Finalizar pedido"
                            className={styles.checkoutButton}
                        >Finalizar pedido</button></Link>
                    </div>
                </motion.div>
            </motion.div>
        )}
        </AnimatePresence>
        </>
    )
}
 
export default Cart;