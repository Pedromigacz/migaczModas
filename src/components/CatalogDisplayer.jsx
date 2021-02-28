import React, { useContext } from 'react';
import styles from '../styles/CatalogDisplayer.module.css'
import { CatalogContext } from '../contexts/CatalogContext.jsx'
import Img from 'gatsby-image'
import AddToCartIcon from '../vectors/addToCartIcon.inline.svg'
import { Link } from 'gatsby'

const CatalogDisplayer = () => {
    const { displayCatalog } = useContext(CatalogContext)
    return (
        <div className={styles.cardContainer}>
            {displayCatalog && displayCatalog.map(peca => (
                <Link to={'/catalogo/' + peca.strapiId} className={styles.card}>
                    <Img
                        fixed={peca.capa.childImageSharp.fixed}
                        key={peca.capa.childImageSharp.fixed.src}
                    />
                    <div className={styles.label}>
                        <div className={styles.marca}>{peca.marca}</div>
                        <div className={styles.title}>{peca.titulo}</div>
                        <div>
                            {peca.preco_promocional && (
                                <span className={styles.precoRiscado}>
                                    {(peca.preco_em_centavos/100).toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' })}
                                </span>
                            )}
                            <span className={styles.precoValido}>
                                {peca.preco_promocional ? (
                                    (peca.preco_promocional/100).toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' })
                                ) : (
                                    (peca.preco_em_centavos/100).toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' })
                                )}
                            </span>
                        </div>
                        <AddToCartIcon />
                    </div>
                </Link>
            ))}
        </div>
    )
}
 
export default CatalogDisplayer;