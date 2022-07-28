import React from 'react'
import '../Sidebar/Sidebar.css'

export default function Sidebar() {
  return (
    <div className='Sidebar'>
        <div className="title">
            <h1>Hardware</h1>
        </div>
        <div className="image">
            <img src="" alt="" />
        </div>
        <div className="categories">
            <h1>Categories</h1>
            <p>Kitchen</p>
            <p>Bathroom</p>
            <p>Living Room</p>
            <p>Plumbing</p>
        </div>
        <div className="recent">
            <h1>Recent Products</h1>
            <p>Pipes</p>
            <p>Doors</p>
            <p>Tiles</p>
        </div>
    </div>
  )
}
