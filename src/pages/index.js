import React from 'react';
import '../styles/reset.module.css'
import styles from '../styles/index.module.css'
import MainLogo from '../vectors/mainLogo.inline.svg'
import { Carousel, Footer } from '../components'
import { Link } from 'gatsby'

const Index = () => {
  return (
    <>
    <div className={styles.pageContainer}>
      <div className={styles.landingHeader}>
        <MainLogo />
      </div>
      <div className={styles.indexContent}>
        <Carousel />
        <div className={styles.callToActionContaineir}>
          <h1>Veja nosso catálogo e entanda porque um clássico nunca sai de moda</h1>
          <Link to="/catalogo"><button>Catálogo</button></Link>
        </div>
      </div>
    </div>
    <Footer /> 
    </>
  );
}
 
export default Index;