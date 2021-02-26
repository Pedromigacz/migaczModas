import React, { useContext } from 'react';
import styles from '../styles/CatalogFilters.module.css'
import { CatalogContext } from '../contexts/CatalogContext.jsx'

const categories = ['Blazers', 'Blusas', 'Blusinhas', 'T-shirts', 'Camisas', 'Camisas jeans', 'Camisas malha gelada', 'Camisas crepe', 'Moletom', 'Casacos', 'Casacos de moletom', 'Casacos jeans', 'Casacos de poliamida', 'Calças', 'Calças jeans', 'Calças alfaiataria', 'Calças prada Fit', 'Saias', 'Shorts', 'Shorts saia', 'Plus-Size']

const CatalogFilters = () => {
    const { addBrand, remBrand, sortByPrice, addType, remType } = useContext(CatalogContext)

    const alterBrands = (e, brand) => {
        if(e.target.checked === true) addBrand(brand)
        else remBrand(brand)
    }

    const alterTypes = (e, type) => {
        if(e.target.checked) addType(type)
        else remType(type)
    }

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
                {['Bonequim', 'EDex', 'Rio 40 Graus', 'Cheia de Charme', 'Todo Verde', 'Azepez'].map(brand => (
                    <>
                    <input
                        key={brand}
                        type="checkbox"
                        defaultChecked
                        value={brand}
                        onChange={e => alterBrands(e, brand)}
                    />
                    <label>{brand}</label><br/>
                    </>
                ))
                }
            </div>
            <div className={styles.categories}>
                <span className={styles.label}>Categorias:</span>
                {categories.map(type => (
                    <>
                    <input
                        key={type}
                        type="checkbox"
                        defaultChecked
                        value={type}
                        onChange={e => alterTypes(e, type)}
                    />
                    <label>{type}</label><br/>
                    </>
                ))
                }
            </div>
        </div>
    );
}
 
export default CatalogFilters;