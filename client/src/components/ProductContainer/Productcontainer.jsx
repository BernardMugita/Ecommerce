import React from 'react'
import '../ProductContainer/Productcontainer.css'
import { MdDeleteForever } from 'react-icons/md'
import image from '../../Resources/product.jpg'

function Productcontainer() {
  return (
    <div className="productcontainer">
        <div className="side1">
            <div className="image">
                <img src={image} alt="" />
            </div>
        </div>
        <div className="side2">
            <div className="product_id">
                Product Id: --------
            </div>
            <div className="product_name">
                Product Name: --------
            </div>
            <div className="quantity">
                Quantity: ---
            </div>
            <div className="price">
                 Price: Ksh -----
            </div>
        </div>
        <div className="delete">
            <MdDeleteForever id='delete'/>
        </div>
    </div>
  )
}

export default Productcontainer