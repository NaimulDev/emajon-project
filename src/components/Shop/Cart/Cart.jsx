import React from "react";

const Cart = ({ cart }) => {
  let totalPrice = 0;
  let shippingPrice = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    shippingPrice = shippingPrice + product.shipping;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + shippingPrice + tax;
  return (
    <div className="sticky top-0">
      <div className="text-xl text-black text-center my-5">
        <h1>Order Summary</h1>
      </div>
      <div className="mx-4 text-lg">
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Total Shipping Charge: ${shippingPrice}</p>
        <p>Tax: ${tax}</p>
        <h1>Grand Total: ${grandTotal}</h1>
      </div>
    </div>
  );
};

export default Cart;
