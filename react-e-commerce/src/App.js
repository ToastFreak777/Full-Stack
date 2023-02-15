import { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";

function App() {
  const [items, setItems] = useState([]);

  function getProducts() {
    console.log("working");

    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <section id="products">
          <div className="product-container">
            {items?.products?.map((product, i) => (
              <div key={i} className="product">
                <img className="thumbnail" src={product.thumbnail} alt="" />
                <p id="title">{product.title}</p>
                <p id="price">${product.price}</p>
                <div>
                  <button id="add">Add to cart</button>
                  <button id="buy">Buy Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="clearance">
          <div>
            Every Computer and Laptop
            <span className="sale">Up to 40% off!</span>
            <button>Shop Now</button>
          </div>
          <img
            src="https://www.sciencenews.org/wp-content/uploads/2014/10/re_iStock_000021398013XLarge_feat_free.jpg"
            alt=""
            height="500"
          />
        </section>
        <section id="reviews">
          <div>
            <h3>Customer Reviews</h3>
            <div className="horizontal-line"></div>
          </div>
          <div className="review-container">
            <p>*</p>
            <h4>Sandy Miller</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              minima reiciendis obcaecati voluptates! Cumque, dicta minima, ut
              dignissimos id, rerum sint fugiat soluta ipsam ex consequuntur?
              Voluptatem voluptatum animi facere? Vel assumenda laboriosam iste
              enim dolores. Sapiente quibusdam, velit consequatur inventore
              porro nobis ea numquam quas quidem nihil assumenda, fugiat, est
              voluptatum atque doloribus dolorem eaque id obcaecati impedit
              commodi.
            </p>
          </div>
          <div id="dot2"></div>
        </section>
      </main>
    </div>
  );
}

export default App;
