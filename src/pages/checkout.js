import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../contexts/CartContext.jsx'
import styles from '../styles/checkout.module.css'
import { ConfirmationModal, Navbar, FreightModal, Footer, ModalMessage, LoadingIcon } from '../components'
import { AnimatePresence } from 'framer-motion'
import axios from 'axios'

const Checkout = () => {
    const { totalPrice, setOpenCart, freight, cart, address } = useContext(CartContext)
    const [checkoutModal, setCheckoutModal] = useState(0)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setOpenCart(false)
        if(cart.length <= 0) window.location = "/"
    }, [setOpenCart, cart.length])

    const closeModal = () => {
        setError(false)
    }
    
    const redirectToPayment = e => {
        e.preventDefault()
        setLoading(true)
        console.log('Go to mercadopago page')
        const data = {
            dados_de_pedido: cart.map(line => ({cor: line.personalData.color, tamanho: line.personalData.size, id: line.item.strapiId})),
            endereco_de_entrega: address
        }
        axios({
            method: 'post',
            url: process.env.GATSBY_STRAPI_URL + '/pedidos',
            data: data
        })
        .then(res => {
            window.location.replace(res.data.PaymentLink)
            setLoading(false)
        })
        .catch(err => {
            setError('Algo inesperado ocorreu, entre em contato conosco através da aba de contato, ou tente novamente mais tarde.')
            setLoading(false)
        })
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
                    {checkoutModal === 0 && <button onClick={e => {setCheckoutModal(1)}}>Avançar</button>}
                    {checkoutModal === 1 && <button onClick={e => {setCheckoutModal(0)}}>Voltar</button>}
                    {checkoutModal === 1 && <button onClick={redirectToPayment} disabled={loading && 'disabled'}>{loading ? <LoadingIcon /> : 'Pagar'}</button>}
                </div>
            </div>
        </div> 
        <Footer />
    </>
    )
}
 
export default Checkout;