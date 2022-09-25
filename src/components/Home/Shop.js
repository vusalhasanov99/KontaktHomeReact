import React from 'react'
import { useCart } from 'react-use-cart';





const Shop = () => {

  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return <p >Səbət boşdur</p>;

  return (
    <div className='shop'>
      <h1>Əlavə olunanlar ({totalUniqueItems})</h1>


      {items.map((item) => (

        <div className='d-flex' style={{ height: "70px", borderBottom: "1px solid rgb(189, 187, 187)", borderRadius: "15px" }} key={item.id}>
          <div className='col-5' style={{ fontSize: "20px" }}>
            {item.name}
          </div>

          <div className='col-3' style={{ fontSize: "20px" }}>
            {item.price}$  * {item.quantity}
          </div>

          <div className='col-4'>
            <button className='btn btn-primary'
              onClick={() => updateItemQuantity(item.id, item.quantity-1)}
            >
              -
            </button>
            <button className='btn btn-success'
              onClick={() => updateItemQuantity(item.id, item.quantity+1)}
            >
              +
            </button>
            <button className='btn btn-danger'
              onClick={() => removeItem(item.id)}>&times;</button>
          </div>
        </div>

      ))}

    </div>
  );

}

export default Shop
