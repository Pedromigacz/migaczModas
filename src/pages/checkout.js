import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../contexts/CartContext.jsx'
import styles from '../styles/checkout.module.css'
import { ConfirmationModal, FreightModal, Footer } from '../components'

const Checkout = () => {
    const { totalPrice, setOpenCart, freight, cart } = useContext(CartContext)
    const [checkoutModal, setCheckoutModal] = useState(1)
    const [error, setError] = useState(false)

    useEffect(() => {
        setOpenCart(false)
        if(cart.length <= 0) window.location = "/"
    }, [setOpenCart])

    const nextPage = () => {
        if(checkoutModal === 0 && cart.length >= 0) setError('O carrinho está vazio, ')
        setCheckoutModal(checkoutModal + 1)
    }

    return (
    <>
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