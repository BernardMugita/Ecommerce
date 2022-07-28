import React, { useState, useEffect } from 'react'
import '../Cart/Cart.css'
import Sidebar from '../components/Sidebar/Sidebar'
import Productcontainer from '../components/ProductContainer/Productcontainer'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { MdDeleteForever } from 'react-icons/md'
import image from '../Resources/ecoom.jpg'
import StripeCheckout from 'react-stripe-checkout'
import {userRequest} from '../requestMethods'
import { useNavigate } from 'react-router-dom'


const KEY = process.env.REACT_APP_STRIPE;

const ProductContainer = styled.div`
    background-color: #fff;
    padding: 1rem;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    width: 100%;
`
const Cart = () => {
    const cart = useSelector((state) => state?.cart)
    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();

    const onToken = (token) => { 
        setStripeToken(token)
    };
    
    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("checkout/payment", 
                    {
                    tokenId: stripeToken.id,
                    amount: 500,
                    }
                )
                    navigate("/success", {stripeData: res.data,
                        products: cart, });
            } catch(err) {
                console.log(err)
            }
        }
        stripeToken && makeRequest();
    }, [stripeToken, cart.total, navigate]);
    
    
    return (
        <div className='Cart'>
            <div className="main">
                <ProductContainer>
                    {cart.products?.map((product) => (
                        <div className="cartproduct">
                            <div className="side1">
                                <div className="image">
                                    <img src={product?.img} alt="" />
                                </div>
                            </div>
                            <div className="side2">
                                <div className="product_id">
                                    <p>Product Id: {product?._id}</p>
                                </div>
                                <div className="product_name">
                                    <p>Product Name: {product?.title}</p>
                                </div>
                                <div className="quantity">
                                    <p>Quantity: {product?.quantity}</p>
                                </div>
                                <div className="price">
                                    <p>Price: $ {product?.price}</p>
                                </div>
                            </div>
                            <div className="delete">
                                <MdDeleteForever id='delete' />
                            </div>
                        </div>

                    ))}
                </ProductContainer>
            </div>
            <div className="checkout">
                <div className="heading">
                    <h2>Check Out</h2>
                </div>
                <div className="body">

                    <div className="product">
                        <h4>Sub Total</h4>
                        <p>$ {cart.total}</p>
                        <h4>Shipping Fee</h4>
                        <p>$ 34.00</p>
                        <h4>Shipping Discount</h4>
                        <p>$ 5.00</p>
                        <h4>Total Price</h4>
                        <p>$ {cart.total}</p>
                        <div className="order">
                            <StripeCheckout
                                name="Hardware"
                                image= {image}
                                billingAddress
                                shippingAddress
                                description={`Your total is $${cart.total}`}
                                amount={500}
                                token={onToken}
                                stripeKey={KEY}
                            >
                                <button>CHECKOUT NOW</button>
                            </StripeCheckout>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cart