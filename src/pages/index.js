import React from 'react';
import '../styles/reset.module.css'
import styles from '../styles/index.module.css'
import MainLogo from '../vectors/mainLogo.inline.svg'

const Index = () => {
  return (
    <div className={styles.landingHeader}>
      <MainLogo />
    </div>
  );
}
 
export default Index;