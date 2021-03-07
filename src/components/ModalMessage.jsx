import React from 'react';
import styles from '../styles/ModalMessage.module.css'
import { motion } from 'framer-motion'

const backDropVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { duration: 0.2 }
    }
}

const modalVariant = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.2, ease: 'easeInOut' }
    }
  }

const ModalMessage = ({children, closeModal}) => (
    <motion.div
        className={styles.backdrop}
        variants={backDropVariant}
        initial="hidden"
        animate="visible"
        exit="hidden"
    >
        <motion.div
            className={styles.messageModal}
            variants={modalVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <button className={styles.closeButton} onClick={closeModal}>X</button>
            <p>{children}</p>
        </motion.div>
    </motion.div>
)
 
export default ModalMessage;