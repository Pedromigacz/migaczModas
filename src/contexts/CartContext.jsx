import React, { createContext, useState } from 'react';

export const CatalogContext = createContext()

const CatalogContextProvider = props => {
    const [cart, setCart] = useState([])
    const [openCart, setOpenCart] = useState(false)

    const addItemToCart = item => {
        setCart([...cart, item])
    }

    const removeItemFromCart = index => {
        const newCart = cart.splice(index)
        setCart(newCart)
    }

    return (
        <CatalogContext.Provider value={{ cart, addItemToCart, removeItemFromCart, setOpenCart, openCart }}>
        {props.children}
        </CatalogContext.Provider>
    );
}

export default CatalogContextProvider;