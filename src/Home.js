import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div> 
        <div className="home">
            <div className="home__container">
                <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home__image" />
                <div className="home__row">
                    <Product 
                        id="1"
                        title="Office Jeans Simple Design Waterproof Polyester Laptop Tablet Notebook Pen File Document Storage Bag"
                        price = {20.20}
                        rating = {5}
                        image = "https://contents.mediadecathlon.com/p2161155/7c22ff75edcd3bb66eac7677edde47b4/p2161155.jpg?format=auto&quality=70&f=650x0"
                    />
                    <Product 
                        id="2"
                        title="Office Jeans Simple Design Waterproof Polyester Laptop Tablet Notebook Pen File Document Storage Bag"
                        price = {20.20}
                        rating = {3}
                        image = "https://contents.mediadecathlon.com/p2161155/7c22ff75edcd3bb66eac7677edde47b4/p2161155.jpg?format=auto&quality=70&f=650x0"
                    />
                </div>
                <div className="home__row">
                <Product 
                        id="3"
                        title="Office Jeans Simple Design Waterproof Polyester Laptop Tablet Notebook Pen File Document Storage Bag"
                        price = {20.20}
                        rating = {2}
                        image = "https://contents.mediadecathlon.com/p2161155/7c22ff75edcd3bb66eac7677edde47b4/p2161155.jpg?format=auto&quality=70&f=650x0"
                    />
                    <Product 
                        id="4"
                        title="Office Jeans Simple Design Waterproof Polyester Laptop Tablet Notebook Pen File Document Storage Bag"
                        price = {20.20}
                        rating = {4}
                        image = "https://contents.mediadecathlon.com/p2161155/7c22ff75edcd3bb66eac7677edde47b4/p2161155.jpg?format=auto&quality=70&f=650x0"
                    />
                    <Product 
                        id="5"
                        title="Office Jeans Simple Design Waterproof Polyester Laptop Tablet Notebook Pen File Document Storage Bag"
                        price = {20.20}
                        rating = {1}
                        image = "https://contents.mediadecathlon.com/p2161155/7c22ff75edcd3bb66eac7677edde47b4/p2161155.jpg?format=auto&quality=70&f=650x0"
                    />
                </div>
                <div className="home__row">
                <Product 
                        id="6"
                        title="Office Jeans Simple Design Waterproof Polyester Laptop Tablet Notebook Pen File Document Storage Bag"
                        price = {20.20}
                        rating = {5}
                        image = "https://contents.mediadecathlon.com/p2161155/7c22ff75edcd3bb66eac7677edde47b4/p2161155.jpg?format=auto&quality=70&f=650x0"
                    />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Home