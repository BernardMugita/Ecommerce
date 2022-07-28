import React from 'react'
import '../Navbar/Navbar.css'
import { Link, useParams } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { IoReorderFour } from 'react-icons/io5'
import { useState } from 'react'
import { IoCart } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import {Badge} from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const Navbar = () => {
    const [show, setShow] = useState(false)

    const quantity = useSelector(state => state.cart.quantity)
    

    return (
        <div className='Navbar'>
            <div className="title">
                <h1>Hardware</h1>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
            </div>
            <div className="cart">
                <Link to="/cart">

                    <Badge id="badge" badgeContent={quantity} color="orange">
                        <AddShoppingCartIcon id="cart" />
                    </Badge>

                </Link>
            </div>



            <div className="menu">
                <IoReorderFour id="reorder" onClick={() => setShow(!show)} />
                {
                    show ?
                        <div className="drop">
                            <div className="search">
                                <BsSearch id='search' />
                                <input type="text" />
                            </div>
                            <div className="links">
                                <Link to="/">Home</Link>
                                <Link to="/about">About</Link>
                                <Link to="/login">Login</Link>
                            </div>
                        </div> : null
                }
            </div>
            <div className="search">
                <BsSearch id='search' />
                <input type="text" />
            </div>
        </div>
    )
}

export default Navbar;