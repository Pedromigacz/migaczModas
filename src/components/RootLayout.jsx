import React from 'react';
import CartContextProvider from '../contexts/CartContext'

const RootLayout = ({ children }) => (
    <CartContextProvider>
        {children}
    </CartContextProvider>
)

export default RootLayout