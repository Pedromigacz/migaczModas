import React from 'react';
import { Footer, Navbar, CatalogDisplayer } from '../components'
import styles from '../styles/catalogo.module.css'
import CatalogContextProvider from '../contexts/CatalogContext.jsx'

const Catalogo = () => {
    return (
        <CatalogContextProvider>
        <div className={styles.catalogoPage}>
            <Navbar />
            <div className={styles.page}>
                <CatalogDisplayer />
            </div>
        </div>
        <Footer />
        </CatalogContextProvider>
    );
}
 
export default Catalogo;