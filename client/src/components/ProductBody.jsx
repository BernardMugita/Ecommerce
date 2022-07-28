import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product/Product';
import axios from 'axios'

const Body = styled.div`
    display: flex;
    flex-flow: row wrap;  
    background-color: #fff;
    padding: 2rem;
    margin-top: 2rem;
    overflow-y: scroll;
    width: 100%;
`


const ProductBody = ({ category, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredproducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async (res, err) => {
            try {
                const res = await axios.get(category ? `http://localhost:5000/api/products?category=${category}`
                    : "http://localhost:5000/api/products")
                setProducts(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getProducts();

    }, [category])

    useEffect(() => {
        category &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            );

    }, [products, category, filters]);

    return (
        <Body>
            {category ? filteredproducts.map((item) => <Product item={item} key={item.id}/>)
                :products.map((item) => <Product item={item} key={item.id} />)}
            
        </Body>
    )
}

export default ProductBody; 