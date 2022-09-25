import React from 'react'
import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Samsung_Logo from '../../Img/Samsung_Logo.webp';
import Toshiba from '../../Img/Toshiba.webp';
import Panasonic from '../../Img/Panasonic.jpg';
import Acer from '../../Img/Acer.webp';
import Sony from '../../Img/Sony.webp';


function Carusel() {
  return (
    <div className='carusel'>
      <h2>Partnyorlar</h2>
      <h1></h1>

      <OwlCarousel className="owl-theme" loop margin={10} nav>
        <div className="itemCarusel">
          <div className="card1 m-5">
            <div  className="img1">
              <img src={Samsung_Logo} alt=""></img>
            </div>

          </div>        </div>
        <div className="itemCarusel">
          <div className="card1 m-5">
            <div className="img1" >
              <img src={Toshiba}  alt=""></img>
            </div>

          </div>        </div>
        <div className="itemCarusel">
          <div className="card1 m-5">
            <div className="img1">
              <img src={Panasonic} alt=""></img>
            </div>

          </div>        </div>
        <div className="itemCarusel">
          <div className="card1 m-5">
            <div className="img1">
              <img src={Acer} alt=""></img>
            </div>

          </div>        </div>
        <div className="itemCarusel">
          <div className="card1 m-5">
            <div className="img1">
              <img src={Sony} alt=""></img>
            </div>

          </div>        </div>
      </OwlCarousel>
    </div>
  )
}

export default Carusel
