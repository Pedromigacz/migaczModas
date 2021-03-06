import React, { useState } from 'react';
import styles from '../styles/FloatingTagInputStyle.module.css'
import { motion } from 'framer-motion'

const FloatingTagInput = ({ name, onChange, address, label, largura }) => {
    const [focused, setFocused] = useState(false)
    return (
        <div className={styles.formInputContainer}>
            <motion.div
                initial={{ y: 32, color: '#444' }}
                animate={{ color: (address[name] || focused) ? '#111' : '#444', y: (address[name] || focused) ? 18 : 42 }}
            >{label}</motion.div>
            <input
                onFocus={e => setFocused(true)}
                onBlur={e => setFocused(false)}
                name={name}
                onChange={onChange}
                value={address[name]}
                style={{width: (largura && largura + 'rem')}}
            />
        </div>
    );
}
 
export default FloatingTagInput;