import React, { useState, useEffect, useContext } from 'react';
import styles from '../styles/CatalogFilters.module.css'
import { CatalogContext } from '../contexts/CatalogContext.jsx'
import BurguerButton from '../vectors/burguerButton.inline.svg'

const categories = ['Blazers', 'Blusas', 'Blusinhas', 'T-shirts', 'Camisas', 'Camisas jeans', 'Camisas malha gelada', 'Camisas crepe', 'Moletom', 'Casacos', 'Casacos de moletom', 'Casacos jeans', 'Casacos de poliamida', 'Calças', 'Calças jeans', 'Calças alfaiataria', 'Calças prada Fit', 'Saias', 'Shorts', 'Shorts saia', 'Plus-Size']

const CatalogFilters = () => {
    const { addBrand, remBrand, sortByPrice, addType, remType } = useContext(CatalogContext)
    const [mobile, setMobile] = useState(false)
    const [filtersOpen, setFilterOpen] = useState(false)

    const alterBrands = (e, brand) => {
        if(e.target.checked === true) addBrand(brand)
        else remBrand(brand)
    }

    const alterTypes = (e, type) => {
        if(e.target.checked) addType(type)
        else remType(type)
    }

    useEffect(() => {
        if(window.innerWidth <= 1032) setMobile(true)
    }, [setMobile])

    if(mobile) return (
        <>
            { !filtersOpen ? <BurguerButton role="button" className={styles.burguerButton} onClick={e => setFilterOpen(!filtersOpen)}/> :
            <div className={styles.filtersContainer}>
                <button className={styles.closeButton} onClick={e => setFilterOpen(!filtersOpen)}>X</button>
                <div className={styles.priceSorter}>
                    <span className={styles.label}>Ordenar por:</span>
                    <select name="sortBy" onChange={e => {sortByPrice(e.target.value)}}>
                        <option value="true">Menor preço</option>
                        <option value="false">Maior preço</option>
                    </select>
                </div>
                <div className={styles.brandSelector}>
                    <span className={styles.label}>Marca:</span>
                    {['Bonequim', 'EDex', 'Rio 40 Graus', 'Cheia de Charme', 'Todo Verde', 'Azepez'].map((brand, i) => (
                        <span key={i}>
                        <input
                            type="checkbox"
                            defaultChecked
                            value={brand}
                            onChange={e => alterBrands(e, brand)}
                        />
                        <label>{brand}</label><br/>
                        </span>
                    ))
                    }
                </div>
                <div className={styles.categories}>
                    <span className={styles.label}>Categorias:</span>
                    {categories.map((type, i) => (
                        <span key={i}>
                        <input
                            type="checkbox"
                            defaultChecked
                            value={type}
                            onChange={e => alterTypes(e, type)}
                        />
                        <label>{type}</label><br/>
                        </span>
                    ))
                    }
                </div>
            </div>
            }
        </>
    )

    return (
        <div className={styles.filtersContainer}>
            <div className={styles.priceSorter}>
                <span className={styles.label}>Ordenar por:</span>
                <select name="sortBy" onChange={e => {sortByPrice(e.target.value)}}>
                    <option value="true">Menor preço</option>
                    <option value="false">Maior preço</option>
                </select>
            </div>
            <div className={styles.brandSelector}>
                <span className={styles.label}>Marca:</span>
                {['Bonequim', 'EDex', 'Rio 40 Graus', 'Cheia de Charme', 'Todo Verde', 'Azepez'].map((brand, i) => (
                    <span key={i}>
                    <input
                        type="checkbox"
                        defaultChecked
                        value={brand}
                        onChange={e => alterBrands(e, brand)}
                    />
                    <label>{brand}</label><br/>
                    </span>
                ))
                }
            </div>
            <div className={styles.categories}>
                <span className={styles.label}>Categorias:</span>
                {categories.map((type, i) => (
                    <span key={i}>
                    <input
                        type="checkbox"
                        defaultChecked
                        value={type}
                        onChange={e => alterTypes(e, type)}
                    />
                    <label>{type}</label><br/>
                    </span>
                ))
                }
            </div>
        </div>
    );
}
 
export default CatalogFilters;