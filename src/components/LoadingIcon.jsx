import React from 'react';
import { motion } from 'framer-motion'
import styles from '../styles/LoadingIcon.module.css'

const LoadingIcon = () => (
    <motion.div
        className={styles.loader}
        animate={{
            rotate: [0, 270, 270, 0],
            borderRadius: ["20%", "50%", "50%", "20%"]
        }}
        transition={{ repeat: Infinity, duration: 1 }}
    />
)

 
export default LoadingIcon;