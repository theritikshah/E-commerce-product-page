import React from 'react';
import logo from '../images/logo.svg';
import cartIcon from '../images/icon-cart.svg'
import Avatar from '../images/image-avatar.png';
import MenuIcon from '../images/icon-menu.svg';
import { useState } from 'react';

function NavList() {
  return ( 
    <ul>
    <li><a href="/" >Collections</a></li>
    <li><a href="/" >Men</a></li>
    <li><a href="/" >Women</a></li>
    <li><a href="/" >About</a></li>
    <li><a href="/" >Contact</a></li>
</ul>
   );
}


function Navbar(props) {
const [toggleState, setToggleState] = useState("");
const handleToggleClick = ()=>{
 if(toggleState === ""){
  setToggleState('hide')
 }else{setToggleState("")}
  console.log(toggleState)
}



    return ( 
        <header>
            <nav>
             
              <div className={"modal-menu "+toggleState}>
                <div className={"slide-menu "+toggleState}>
                    <NavList/>
                </div>
              </div>
              <div className='menu'>

              <img className="menuToggle"src={MenuIcon} onClick={handleToggleClick} alt="menuIcon"  />
                  
              <a href="/"><img className="logo" src={logo} alt="logo" /></a>
                   <NavList/>
                  </div>
              
              <div className="profile">
                <div className="cart">
                <img  src={cartIcon} alt="cart"  /></div>
                <img className='avatar' src={Avatar} alt="Avatar"/>
              </div>
            </nav>
        </header>
     );
}

export default Navbar;