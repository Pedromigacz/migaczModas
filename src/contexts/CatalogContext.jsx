import React, { createContext, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby'

export const CatalogContext = createContext()

const CatalogContextProvider = props => {
    const { allStrapiPecas: { nodes } } = useStaticQuery(graphql`
        {
            allStrapiPecas {
                nodes {
                    titulo
                    preco_em_centavos
                    preco_promocional
                    marca
                    capa {
                        childImageSharp {
                            fixed(width: 250, height: 320) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            }
        }`)
    const [catalog, setCatalog] = useState(nodes)


  return (
    <CatalogContext.Provider value={{ catalog }}>
      {props.children}
    </CatalogContext.Provider>
  );
}

export default CatalogContextProvider;