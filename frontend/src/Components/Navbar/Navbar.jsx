import React, { useContext, useRef, useState } from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/nav_dropdown.png";
const Navbar = () => {
    const [menu , setMenu]=useState("shop");
    const {getTotalCartItems}=useContext(ShopContext);
    const menuRef=useRef();
    const dropdown_togle=(e)=>{
            menuRef.current.classList.toggle('nav-menu-visible');
            e.target.classList.toggle('open');

    }
    return ( 
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Shoper</p>
            </div>
            <img src={nav_dropdown} className="nav-dropdown" onClick={dropdown_togle} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li  onClick={()=>{setMenu('shop')}}><Link style={{textDecoration:'none'}} to="/">Shop</Link>{menu==="shop"?<hr/>:<></>} </li>
                <li onClick={()=>{setMenu('mens')}}><Link  style={{textDecoration:'none'}}  to="/mens">Man</Link>  {menu==="mens"?<hr/>:<></>}</li>
                <li  onClick={()=>{setMenu("womans")}}> <Link style={{textDecoration:'none'}}  to="/womans" >Woman </Link>{menu==="womans"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link  style={{textDecoration:'none'}} to="/kids" >Kids</Link> {menu==="kids"?<hr/>:<></>} </li>

            </ul>
            <div className="nav-login-cart">

              <Link to="/login">  <button>Login</button></Link>
              <Link to="/cart"><img src={cart_icon} alt="" /></Link>  
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
     );
}
 
export default Navbar;
