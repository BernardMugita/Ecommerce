import React from 'react'
import '../Products/Products.css'
import Sidebar from '../components/Sidebar/Sidebar'
import Product from '../components/Product/Product'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import ProductBody from '../components/ProductBody'

export default function Products() {

    const location = useLocation();
    const category = location.pathname.split("/")[2]
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("newest")
    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            [e.target.name]: value,
            ...filters,
        })
    }
    
  return (
    <div className='Products'>
        <div className="main">
            <div className="Filters">
                <label htmlFor="">Sort
                    <select onChange={(e => setSort(e.target.value))} name="sort">
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                        <option value="featured">Featured</option>
                    </select>
                </label>
                <label htmlFor="">Category
                    <select onChange={handleFilters} name="category" >
                        <option value="Hardware">Hardware</option>
                        <option value="clothing">Clothing</option>
                        <option value="Doors">Doors</option>
                        <option value="Toilet">Toilet</option>
                        <option value="Hand-Tools">Hand Tools</option>
                    </select>
                </label>
                <label htmlFor="">Price Filter
                    <select onChange={handleFilters} name="price">
                        <option value="below-$10">below $10</option>
                        <option value="$10-$30">$10 - $30</option>
                        <option value="$30-$60">$30 - $60</option>
                        <option value="above-$60">above $60</option>
                    </select>
                </label>
               
            </div>
            <ProductBody cat={category} filter={filters} sort={sort} />
        </div>
       
    </div>
  )
}
