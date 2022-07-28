import React from 'react'
import '../Topbar/Topbar.css';
import { AiFillFacebook } from 'react-icons/ai';
import { FaWhatsappSquare, FaPhoneSquareAlt } from 'react-icons/fa';
import { IoMailSharp } from 'react-icons/io5';

export default function Topbar() {
  return (
    <div className="Topbar">
        <div className="socials">
            <AiFillFacebook className='facebook'/>
            <FaWhatsappSquare className='whatsapp'/>
            <FaPhoneSquareAlt className='phone'/>
            <IoMailSharp className='mail'/>
        </div>
    </div>
  )
}
