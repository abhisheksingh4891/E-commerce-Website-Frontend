import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import footer_logo from '../assets/logo_top.png'
import insta_icon from '../assets/insta_icon.png'
import pint_icon from '../assets/pint_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon1.png'

const Footer = () => {
  const [menu,setMenu] = useState("company");

  return (
    <div className='footer'>
        <div className='footer-logo'>
          <img src={footer_logo} alt="" />
          <p>Exclsv.com</p>
        </div>
        <ul className='footer-links'>
          <li onClick={()=>{setMenu("company")}}>Company{menu==="company"?<theme/>:<></>}</li>
          <li onClick={()=>{setMenu("products")}}><Link style={{ textDecoration:'none'}} to=''>Popular</Link>{menu==="products"?<theme/>:<></>}</li>
          <li onClick={()=>{setMenu("offices")}}>Offices{menu==="offices"?<theme/>:<></>}</li>
          <li onClick={()=>{setMenu("about")}}>About{menu==="about"?<theme/>:<></>}</li>
          <li onClick={()=>{setMenu("contact")}}>Contact{menu==="contact"?<theme/>:<></>}</li>
        </ul>
        <div className='footer-social-icon'>
          <div className='footer-icons-container'>
            <img src={insta_icon} alt="" />
          </div>
          <div className='footer-icons-container'>
            <img src={pint_icon} alt="" />
          </div>
          <div className='footer-icons-container'>
            <img src={whatsapp_icon} alt="" />
          </div>
        </div>
        <div className='footer-copyright'>
        <hr/>
          <p>Copyright @ 2023. Created by ABHISHEK SINGH</p>
        </div>
    </div>
  )
}

export default Footer