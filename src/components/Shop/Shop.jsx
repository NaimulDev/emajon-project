import React, { useCallback, useEffect, useState } from "react";
import Cart from "./Cart/Cart";
import Product from "./Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const newcart = [...cart, product];
    setCart(newcart);
  };

  return (
    <div className="shop-container">
      <div className="product-container grid grid-cols-3 px-16 py-20 bg-white">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="bg-accent ">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
