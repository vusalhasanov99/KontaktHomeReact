import React from 'react'
import Slider from "react-slick";
import Slide1 from '../../Img/Slide1.webp';
import Slide2 from '../../Img/Slide2.jpg';
import Slide3 from '../../Img/Slide3.webp';


function Carousel() {
  
        const settings = {
          dots: true,
          infinite: true,
          speed: 100,
          slidesToShow: 2,
          slidesToScroll: 1
        };
  return (
    <div className='container'>
      <Slider style={{width:"950px",}} {...settings}>
          <div >
          
              <img style={{width:"470px", height:"350px"}} src={Slide1}alt=""></img>
          
          </div>
          <div>
          
              <img style={{width:"470px", height:"350px"}} src={Slide2} alt=""></img>
           
          </div>
          <div>
          
              <img style={{width:"470px", height:"350px"}} src={Slide3}alt=""></img>
          
          </div>
         
     
        </Slider>
    </div>
  )
}

export default Carousel
