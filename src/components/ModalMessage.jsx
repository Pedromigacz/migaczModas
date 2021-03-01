import React from 'react';
import styles from '../styles/ModalMessage.module.css'

const ModalMessage = ({children, closeModal}) => (
    <div className={styles.backdrop}>
        <div className={styles.messageModal}>
            <button className={styles.closeButton} onClick={closeModal}>X</button>
            <p>{children}</p>
        </div>
    </div>
)
 
export default ModalMessage;