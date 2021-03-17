import React, { useState, useContext } from 'react';
import styles from '../styles/FreightModal.module.css'
import { CartContext } from '../contexts/CartContext.jsx'
import FloatingTagInput from './FloatingTagInput.jsx'
import axios from 'axios'
import { ModalMessage, LoadingIcon } from './'

const FreightModal = () => {
    const { cart, address, setAddress, setFreight } = useContext(CartContext)
    const [freightOptions, setFreightOptions] = useState([])
    const [errorMessage, setErrorMessage] = useState(false)
    const [loding, setLoading] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        if(!address.cep) return setErrorMessage('Por favor, preencha o campo cep')
        if(!/^[0-9]{8}$/.test(address.cep)) return setErrorMessage('O campo cep precisa ter exatamente 8 characteres, e conter apenas números')
        if(!address.cidade) return setErrorMessage('Por favor, preencha o campo cidade')
        if(!address.estado) return setErrorMessage('Por favor, preencha o campo estado')
        if(!address.bairro) return setErrorMessage('Por favor, preencha o campo bairro')
        if(!address.rua) return setErrorMessage('Por favor, preencha o campo rua')
        if(!address.numero) return setErrorMessage('Por favor, preencha o campo número')
        if(!/^[0-9]{0,8}$/.test(address.numero)) return setErrorMessage('O campo número pode conter apenas números')

        setLoading(true)
        const packageInfo = cart.reduce((acum, curr) => ({
            weight: acum.weight + curr.item.peso_em_kg,
            width: (acum.width > curr.item.largura_da_embalagem_em_cm) ? acum.width : curr.item.largura_da_embalagem_em_cm,
            length: (acum.length > curr.item.comprimento_da_embalagem_em_cm) ? acum.length : curr.item.comprimento_da_embalagem_em_cm,
            height: acum.height + curr.item.altura_da_embalagem_em_cm,
            insurance_value: acum.insurance_value + ((curr.item.preco_promocional) ? curr.item.preco_promocional : curr.item.preco_em_centavos) / 100
        }), {weight: 0, width: 0, height: 0, length: 0, insurance_value: 0})


        const config = {
            method: 'post',
            url: `${process.env.GATSBY_MELHOR_ENVIO_URL}/api/v2/me/shipment/calculate`,
            headers: { 
              'Accept': 'application/json', 
              'Content-Type': 'application/json', 
              "Authorization": `Bearer ${process.env.GATSBY_PUBLIC_TOKEN}`,
              'User-Agent': `email ${process.env.GATSBY_EMAIL}`, 
            },
            data: {
                from: { postal_code: process.env.GATSBY_SENDER_CEP },
                to: { postal_code: address.cep },
                "package": packageInfo
            }
          };

        axios(config)
        .then(res => {
            setFreightOptions(res.data)
            setLoading(false)
        })
        .catch(err => {
            setErrorMessage('Algo inesperado aconteceu, entre em contato conosco através da guia de contato, ou tente novamente mais tarde.')
            setLoading(false)
        })
    }

    const handleChange = e => {
        const newForm = {...address}
        newForm[e.target.name] = e.target.value
        setAddress(newForm)
    }

    const closeModal = () => {
        setErrorMessage(false)
    }

    
    return (
        <div className={styles.freightModalContainer}>
            {errorMessage && <ModalMessage closeModal={closeModal}>{errorMessage}</ModalMessage>}
            <h2>Endereço de entrega</h2>
            <form onSubmit={handleSubmit}>
                <FloatingTagInput
                    label="cep"
                    name="cep"
                    onChange={handleChange}
                    address={address}
                />
                <br />
                <FloatingTagInput
                    label="cidade"
                    name="cidade"
                    onChange={handleChange}
                    address={address}
                />
                <FloatingTagInput
                    label="estado"
                    name="estado"
                    onChange={handleChange}
                    address={address}
                    largura="5"
                />
                <FloatingTagInput
                    label="bairro"
                    name="bairro"
                    onChange={handleChange}
                    address={address}
                    largura="8"
                />
                <br />
                <FloatingTagInput
                    label="rua"
                    name="rua"
                    onChange={handleChange}
                    address={address}
                />
                <FloatingTagInput
                    label="nº"
                    name="numero"
                    onChange={handleChange}
                    address={address}
                    largura="5"
                />
                <FloatingTagInput
                    label="complemento"
                    name="complemento"
                    onChange={handleChange}
                    address={address}
                    largura="8"
                />
                <br />
                <button className={styles.submitButton} disabled={loding && 'disabled'}>{loding ? <LoadingIcon /> : 'Calcular frete'}</button>
            </form>
            {freightOptions.length !== 0 && (
                <div className={styles.freightList}>
                    <h4>Selecione uma opção:</h4>
                    {freightOptions.map((option, i) => (
                        option.price && (
                        <div key={i} className={styles.freightOption}>
                            <input type="radio" name="freight" value={option.name} onChange={e => {setFreight(option)}}/>
                            <label><span>{option.company.name} {option.name}</span><span className={styles.freightPrice}>{option.currency}{option.price}</span></label>
                        </div>)
                    ))}
                    
                </div>
            )}
        </div>
    )
}
 
export default FreightModal;