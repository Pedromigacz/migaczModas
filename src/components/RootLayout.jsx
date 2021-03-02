import React from 'react';
import CartContextProvider from '../contexts/CartContext'
import { Cart } from '../components'

const RootLayout = ({ children }) => (
    <CartContextProvider>
        <Cart />
        {children}
    </CartContextProvider>
)

export default RootLayout