import React, { useEffect, useState } from 'react'
import '../SingleProduct/Singleproduct.css'
import image from '../Resources/product.jpg'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../requestMethods';
import styled from 'styled-components'
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

const Input = styled.span`
    border: 1px solid #ff4500;
    width: 5rem;
    padding: 0.4rem;
    background-color: #fff;
    margin-top: 0.5rem;
`



export default function Singleproduct() {
  const location = useLocation();
  const id = location.pathname.split("/")[2]
  const [size, setSize] = useState("")
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id)
        setProduct(res.data)
      } catch (err) {

      }
    }
    getProduct()
  }, [id])

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity })
    );
  };

  return (
    <div className='Singleproduct'>
      <div className="leftside">
        <div className="heading">
          <h1>{product.title}</h1>
        </div>
        <div className="picture">
          <img src={product.img} alt="" />
        </div>
      </div>
      <div className="rightside">
        <div className="desc">
          <h3>Description</h3>
          <p>{product.description}
          </p>
        </div>
        <div className="filter">
          <label htmlFor="">Size:
            <select name="size" id="">
              {product.size?.map((s) => (
                <option value="" key={s}>{s}</option>
              ))}
            </select>
          </label>
          <div className="quantity">
            <div className="side1">
              <label htmlFor="">Quantity:</label>
            </div>
            <div className="side2">
              <button onClick={() => handleQuantity("inc")}>+</button>
              <Input>{quantity}</Input>
              <button onClick={() => handleQuantity("dec")}>-</button>
            </div>
          </div>
        </div>
        <div className="price">
          <h4>Price</h4>
          <h3>$ {product.price}</h3>
        </div>
        <div className="order">
          <button onClick={handleClick}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
