import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../contexts/CartContext.jsx'
import styles from '../styles/checkout.module.css'
import { ConfirmationModal, Navbar, FreightModal, Footer, ModalMessage } from '../components'
import { AnimatePresence } from 'framer-motion'

const Checkout = () => {
    const { totalPrice, setOpenCart, freight, cart } = useContext(CartContext)
    const [checkoutModal, setCheckoutModal] = useState(0)
    const [error, setError] = useState(false)

    useEffect(() => {
        setOpenCart(false)
        if(cart.length <= 0) window.location = "/"
    }, [setOpenCart, cart.length])

    const nextPage = () => {
        if(checkoutModal === 1 && !freight) return setError('Para prosseguir, selecione uma opção de frete.')
        setCheckoutModal(checkoutModal + 1)
    }

    const closeModal = () => {
        setError(false)
    }
    

    return (
    <>
        <Navbar />
        <AnimatePresence exitBeforeEnter>{error && <ModalMessage closeModal={closeModal}>{error}</ModalMessage>}</AnimatePresence>
        <div className={styles.cartPageContainer}>
            <h1>Checkout</h1>
            <div className={styles.contentContainer}>
                {(checkoutModal === 0 ) && <ConfirmationModal />}
                {(checkoutModal === 1 ) && <FreightModal />}
                <div className={styles.sideCard}>
                    <div>Carrinho................<span>{
                        (totalPrice/100).toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' })
                    }</span>
                    </div>
                    {freight && (
                        <>
                            <div>Frete......................<span>{
                                ((freight.price*100)/100).toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' })
                            }</span></div>
                            <hr />
                            <div>Carrinho + frete..<span>{
                                (parseFloat(totalPrice/100) + parseFloat(freight.price))
                                .toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' })
                            }</span></div>
                        </>
                    )}
                    {checkoutModal >= 1 && <button onClick={e => {setCheckoutModal(checkoutModal - 1)}}>Voltar</button>}
                    <button onClick={nextPage}>Avançar</button>
                </div>
            </div>
        </div> 
        <Footer />
    </>
    )
}
 
export default Checkout;