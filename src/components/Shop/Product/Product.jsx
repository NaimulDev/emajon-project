import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  //   console.log(props);
  const { name, price, img, seller, ratings } = props.product;
  const handleAddToCart = props.handleAddToCart;

  const element = <FontAwesomeIcon icon={faShoppingCart} />;

  return (
    <div className="cart w-72 border border-sky-500  relative rounded-md ">
      <div className=" p-2 gap-2 space-y-4">
        <img className=" h-60 w-full rounded-md" src={img} />

        <h1 className="text-xl">{name}</h1>
        <h2 className="mb-2 text-lg">Price: ${price}</h2>
        <p>Manufacturer : {seller}</p>
        <p>Rating : {ratings}</p>
      </div>
      <button
        onClick={() => handleAddToCart(props.product)}
        className="bg-accent px-6 py-4 border-t border-sky-500 w-full bottom-0 absolute hover:bg-secondary"
      >
        Add to Cart {element}
      </button>
    </div>
  );
};

export default Product;
