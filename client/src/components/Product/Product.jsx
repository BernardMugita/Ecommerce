import React from 'react'
import '../Product/Product.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Route = styled.div`
    background-color: #ff6640;
    padding: 0.5rem;
    width: 100%;
    text-align: center;
    color: #fff;
    text-decoration: none;
    margin-top: 1rem;
`

export default function Product({ item }) {
    return (
        <div className='Product'>
            <div className="top">
                <div className="image">
                    <img src={item.img} alt="" />
                </div>
            </div>
            <div className="bottom">
                <div className="title">
                    <p>Name: {item.title}</p>
                </div>
                <div className="price">
                    <p>price: ${item.price}</p>
                </div>
                <div className="quantity">
                    <p>status: {item.inStock}</p>
                </div>
                <Route>
                    <Link id='link' to={`/product/${item._id}`}>Buy</Link>
                </Route>
            </div>
        </div>
    )
}
