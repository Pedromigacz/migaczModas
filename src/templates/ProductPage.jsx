import React, { useState } from 'react';
import { graphql } from 'gatsby'
import { Navbar, Footer } from '../components'
import styles from '../styles/ProductPage.module.css'
import Img from 'gatsby-image'

const ProductPage = ({ data: { strapiPecas } }) => {
    const [displayImage, setDisplayImage] = useState(0)
    const [itemData, setItemData] = useState({color: '', size: ''})

    const handleSelect = e => {
      setItemData({...itemData, color: e.target.value})
    }

    return (
        <>
            <Navbar />
            <div className={styles.ProductPageContainer}>
                <h1>{ strapiPecas.titulo }</h1>
                <div className={styles.pageContentContainer}>
                  <div className={styles.imageDisplayer}>
                      <div className={styles.imageIconsContainer}>
                          {strapiPecas.imagens.map((imagem, id) => (
                              <button key={id} onClick={e => {setDisplayImage(id)}}>
                                  <Img fixed={imagem.localFile.childImageSharp.fixed}/>
                              </button>
                          ))}
                      </div>
                      <div className={styles.mainImage}>
                          <Img fixed={strapiPecas.imagens[displayImage].localFile.childImageSharp.secondaryFixed}/>
                      </div>
                  </div>
                  <div className={styles.ProductSelector}>
                      <div className={styles.sizeSelector}>
                        <span>Tamanho:</span>
                        {strapiPecas.tamanhos_disponiveis.split('\n').map(size => (
                        <button
                          key={size}
                          onClick={e => {setItemData({...itemData, size})}}
                          style={{
                            color: itemData.size === size && '#D4AF37',
                            border: itemData.size === size && '1px solid #D4AF37'
                          }}
                        >{size}</button>
                        ))}
                      </div>
                      <div className={styles.colorSelector}>
                        <span>Cor:</span>
                        <select onBlur={handleSelect}>
                          {strapiPecas.cores_disponiveis.split('\n').map(cor => <option key={cor}>{cor}</option>)}
                        </select>
                      </div>
                      <p className={styles.description}>{strapiPecas.descricao}</p>
                      {strapiPecas.preco_promocional && <span className={styles.crossedPrice}>{(strapiPecas.preco_em_centavos/100).toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' })}</span>}
                      <span className={styles.price}>{
                      strapiPecas.preco_promocional ? (
                        (strapiPecas.preco_promocional/100).toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' })
                      ) : (
                        (strapiPecas.preco_em_centavos/100).toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' })
                      )
                      }</span>
                  </div>
                </div>
              <div className={styles.buttonContexts}>
                <button>Comprar</button>
                <button>Adicionar ao Carrinho</button>
              </div>
            </div>
            <Footer />
        </>
    )
}
 
export const query = graphql`
  query ($slug: Int) {
    strapiPecas(strapiId: {eq: $slug}) {
      cores_disponiveis
      descricao
      titulo
      tamanhos_disponiveis
      strapiId
      preco_promocional
      preco_em_centavos
      peso_em_kg
      marca
      largura_da_embalagem_em_cm
      altura_da_embalagem_em_cm
      categorias
      comprimento_da_embalagem_em_cm
      imagens {
        localFile {
          childImageSharp {
            fixed(width: 32, height: 32, quality: 100) {
              ...GatsbyImageSharpFixed
              originalName
            }
            secondaryFixed:fixed(width: 320, height: 420, quality: 90) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

export default ProductPage;