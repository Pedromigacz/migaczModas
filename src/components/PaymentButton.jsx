import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../contexts/CartContext.jsx'
import axios from 'axios'

const PaymentButton = () => {
    const { cart, address } = useContext(CartContext)
    const [link, setLink] = useState(false)

    useEffect(() => {
        const requestPaymentInfo = () => {
            console.log(process.env.GATSBY_SENDER_CEP)
            const data = {
                endereco_do_cliente: address,
                dados_do_pedido: cart.map(line => ({
                    cor: line.personalData.color,
                    tamanho: line.personalData.size,
                    id: line.item.strapiId
                }))
            }
            axios.post({
                method: 'post',
                url: process.env.GATSBY_STRAPI_URL + '/pedidos',
                data
            })
            .then(res => {
                setLink(res)
            })
            .catch(err => console.log(err))
        }

        requestPaymentInfo()
    }, [])

    return (
        <>
            {link ? <button>Pagar</button> : <button>Carregando</button>}
        </>
    );
}
 
export default PaymentButton;