import React, { Component } from 'react';
import Menu from './Menu';
import { useState } from 'react';
import Shop from './Shop';
import Search from './Search';





const Navbar = (props) => {

  const [isHovering, setIsHovering] = useState(false);
  const mouseOver = () => {
    setIsHovering(true);

  };

  const mouseOut = () => {
    setIsHovering(false);
  };

  return (

    <div className="kontakthome">
      <h4 >Kontakt Home</h4>

      <div className="navbar">
        <div className="menyu"><Menu /></div>

        <Search searchCardProp={props.searchCardProp} />


        <i className="far fa-user " ></i> <span></span>
        <i className="fas fa-balance-scale "></i> <span></span>
        <i className="far fa-heart" ></i> <span></span>
        <i onMouseOver={mouseOver} onMouseOut={mouseOut} className="fas fa-shopping-bag">
          {
            isHovering ? <Shop /> : null
          }</i>



        <div className="countrylounge">
          <img src="https://cdn.countryflags.com/thumbs/azerbaijan/flag-round-250.png"></img>
        </div>


      </div>
      <div className="container m-5">
        <div className=" col-3 endirim "><a href=''>Endirim</a></div>
        <div className="col-9 ayliqodenis"><a href=''>Aylıq ödəniş</a></div>
      </div>
    </div>


  );
}

export default Navbar;