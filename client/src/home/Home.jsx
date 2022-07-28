import React from 'react'
import '../home/Home.css'
import banner from '../Resources/ecoom.jpg'
import Sidebar from '../components/Sidebar/Sidebar'
import Product from '../components/Product/Product'
import { GiKitchenTap } from 'react-icons/gi'
import { FaBath } from 'react-icons/fa'
import { BiCabinet } from 'react-icons/bi'
import { MdPlumbing } from 'react-icons/md'
import { GiDoor } from 'react-icons/gi'
import { GiDoorHandle } from 'react-icons/gi'
import { Link } from 'react-router-dom';
import CategoryItem from '../components/Category/CategoryItem'
import ProductHome from '../components/ProductHome';

export default function Home() {
    return (
        <div className='home'>
            <div className="main">
                <div className="banner">
                    <div className="title">
                        <h1>Hardware</h1>
                        <p>catch phrase</p>
                    </div>
                    <div className="illustration">
                        <img src={banner} alt="" />
                    </div>
                    <div className="products">
                        <p>Doors</p>
                        <p>sinks</p>
                        <p>showers</p>
                        <p>tiles</p>
                        <p>toilet bowls</p>
                        <div className="hide">
                            <p>Bathroom Accessories</p>
                            <p>Shower Cubicles</p>
                            <p>Jacuzzis</p>
                            <p>Hardware Tools</p>
                        </div>
                    </div>
                </div>
                <div className="sidebar">
                    <Sidebar />
                </div>

            </div>
            <div className="homebody">
                <div className="featuredcategory">
                    <div className="heading">
                        <h1>Featured Categories</h1>

                    </div>
                    <div className="body">
                        <CategoryItem />
                        <CategoryItem />

                    </div>
                </div>
                <div className="featuredsection">
                    <div className="heading">
                        <h1>Featured Products</h1>
                    </div>
                    <ProductHome />
                </div>
                <div className="featuredsection">
                    <div className="heading">
                        <h1>Recent Products</h1>
                    </div>
                    <ProductHome />
                </div>
                <div className="featuredsection">
                    <div className="heading">
                        <h1>Offers</h1>
                    </div>
                    <ProductHome />
                </div>
            </div>

        </div>
    )
}
