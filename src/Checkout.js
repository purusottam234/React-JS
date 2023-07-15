import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';  
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';


function Checkout() {
  const[{basket}, dispatch] = useStateValue();
  return (
    <div>
      <div className="checkout">
        <div className="checkout__left">
          <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="checkout__ad" />
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* <CheckoutProduct /> */}
          {basket.map(item =>(
            <CheckoutProduct 
              id = {item.id}
              title = {item.title}
              image = {item.image}
              price= {item.price}
              rating = {item.rating}
            />
          ))}

        </div>
        <div className="checkout__right">
          <Subtotal />

        </div>
      </div>

    </div>
  )
}

export default Checkout