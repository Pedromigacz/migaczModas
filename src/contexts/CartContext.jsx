import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext()

const CartoContextProvider = props => {
    const [cart, setCart] = useState([])
    const [openCart, setOpenCart] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)

    const addItemToCart = item => {
        setCart([...cart, item])
    }

    const removeItemFromCart = index => {
        const newCart = cart.filter((line, i) => i !== index)
        setCart(newCart)
    }

    useEffect(() => {
        if(cart.length === 0) return
        const newPrice = cart.reduce(((acum, line) => (acum + (line.item.preco_promocional ? line.item.preco_promocional : line.item.preco_em_centavos))), 0)

        setTotalPrice(newPrice)
    }, [setTotalPrice, cart])

    return (
        <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart, setOpenCart, openCart, totalPrice }}>
        {props.children}
        </CartContext.Provider>
    );
}

export default CartoContextProvider;