import React, { createContext, useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby'

export const CatalogContext = createContext()

const CatalogContextProvider = props => {
    const { allStrapiPecas: { nodes } } = useStaticQuery(graphql`
        {
            allStrapiPecas(sort: {order: ASC, fields: marca}) {
                nodes {
                    titulo
                    preco_em_centavos
                    preco_promocional
                    marca
                    categorias
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
    const [catalogFilteredByBrand, setCatalogFilteredByBrand] = useState(nodes)
    const [displayCatalog, setDisplayCatalog] = useState(nodes)
    const [brands, setBrands] = useState(['Bonequim', 'EDex', 'Rio 40 Graus', 'Cheia de Charme', 'Todo Verde', 'Azepez'])
    const [types, setTypes] = useState(['Blazers', 'Blusas', 'Blusinhas', 'T-shirts', 'Camisas', 'Camisas jeans', 'Camisas malha gelada', 'Camisas crepe', 'Moletom', 'Casacos', 'Casacos de moletom', 'Casacos jeans', 'Casacos de poliamida', 'Calças', 'Calças jeans', 'Calças alfaiataria', 'Calças prada Fit', 'Saias', 'Shorts', 'Shorts saia', 'Plus-Size'])

    useEffect(() => {
        const newCatalog = catalog.filter(peca => {
            return (
                brands.some(brand => {
                    return peca.marca.toLowerCase() === brand.toLowerCase()
                })
            )
        })
        setCatalogFilteredByBrand(newCatalog)
    }, [brands, catalog, setCatalogFilteredByBrand])

    useEffect(() => {
        const newCatalog = catalogFilteredByBrand.filter(peca => {
            return peca.categorias.split('\n').some(category => {
                return types.some(type => type.toLowerCase() === category.toLowerCase())
            })
        })
        setDisplayCatalog(newCatalog)
    }, [setDisplayCatalog, catalogFilteredByBrand, types])

    const addType = newType => {
        setTypes([...types, newType])
    }    

    const remType = oldType => {
        setTypes(types.filter(type => !(type === oldType)))
    }

    const addBrand = newBrand => {
        setBrands([...brands, newBrand])
    }
    
    const remBrand = oldBrand => {
        setBrands(brands.filter(brand => !(brand === oldBrand)))
    }

    const sortByPrice = (fromLowToHigh) => {
        const newSortedCatalog = catalog.sort((prev, next) => {
            const prevPrice = prev.preco_promocional ? prev.preco_promocional : prev.preco_em_centavos
            const nextPrice = next.preco_promocional ? next.preco_promocional : next.preco_em_centavos
            return fromLowToHigh === "true" ? (prevPrice - nextPrice) : (nextPrice - prevPrice)
        })
        setCatalog([...newSortedCatalog])
    }
        
    return (
        <CatalogContext.Provider value={{ displayCatalog, addBrand, remBrand, brands, sortByPrice, addType, remType }}>
        {props.children}
        </CatalogContext.Provider>
    );
}

export default CatalogContextProvider;