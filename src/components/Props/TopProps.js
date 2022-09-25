import React from 'react'
import { useCart } from "react-use-cart";
import img from "../../Img/iPhone-13-512GB-Starlight.jpg"


const TopProps = (props) => {
  console.log(props);
  const { addItem } = useCart();

  return (
    <div className='d-flex' >

      {props.cards.map((card) => (
        <div className='top-props m-5 ' key={card.id}  >
          <div className="card" >
            <img style={{ marginTop: "15px", borderRadius: "25px"}} src={card.link} className="card-img-top" alt="..." />
            <div className="card-body">
              <a href='#' className="card-title" style={{ color: "#171717", fontSize: "20px" }}>{card.name}</a>
              <h4>{card.price}$</h4>
              <button className="btn btn-primary"
                style={{ height: "50px", width: "200px", marginLeft: "10px", borderRadius: "15px" }}
                onClick={() => addItem(card)}
              >Səbətə əlavə et</button>

            </div>
          </div>
        </div>))}

    </div>


  )
}

export default TopProps
