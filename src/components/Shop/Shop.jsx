import React, { useCallback, useEffect, useState } from "react";
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
      <div className="bg-accent">
        <div className="text-xl text-black text-center my-5">
          <h1>Order Summary</h1>
        </div>
        <div className="mx-4 text-lg">
          <p>Selected Items: {cart.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
