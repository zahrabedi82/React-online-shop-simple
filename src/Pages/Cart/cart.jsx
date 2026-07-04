import React, { useContext } from "react";
import { ShopContext } from "../../Components/context/shopContext";
import Product from "../Shops/product";
import { PRODUCTS } from "../../data/products";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  const cartProducts = PRODUCTS.filter((p) =>
    cartItems?.some((i) => i.id === p.id && i.count > 0),
  );

  return (
    <React.Fragment>
      <h1>Your Cart Items</h1>
      <div className="row">
        {cartProducts.length > 0 ? (
          cartProducts.map((p) => <Product key={p.id} data={p} />)
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default Cart;
