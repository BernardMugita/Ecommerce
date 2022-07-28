import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product/Product';
import axios from 'axios'

const Body = styled.div`
    display: flex;
    background-color: #fff;
    padding: 2rem;
    margin-top: 2rem;
    overflow-y: scroll;
    width: 100%;
`


const ProductHome = ({ cat, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredproducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async (res, err) => {
            try {
                const res = await axios.get(cat ? `http://localhost:5000/api/products?/category=${cat}`
                    : "http://localhost:5000/api/products")
                setProducts(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getProducts();

    }, [cat])

    useEffect(() => {
        cat &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            );

    }, [products, cat, filters]);

    return (
        <Body>
            {cat ? filteredproducts.map((item) => <Product item={item} key={item.id}/>)
                :products.map((item) => <Product item={item} key={item.id} />)}
            
        </Body>
    )
}

export default ProductHome; 