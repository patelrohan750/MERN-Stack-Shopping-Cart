import React, { useEffect } from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { getCartItems } from "../../redux/Actions/cart-action";
import { addToCart } from "../../redux/Actions/cart-action";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  
  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  

  const getCartCount = () => {
    return cartItems.length;
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.quanity, 0)
      .toFixed(2);
  };
  return (
    <>
      <div className="card">
        <div className="row">
          <div className="col-md-8 cartpage">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4>
                    <b>Shopping Cart</b>
                  </h4>
                </div>
                <div className="col align-self-center cstext-right text-muted">
                  {getCartCount()} items
                </div>
              </div>
            </div>
            {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item._id}
                item={item}
              />
            ))
          )}
            
            
          </div>
          <div className="col-md-4 summary">
            <div>
              <h5>
                <b>Summary</b>
              </h5>
            </div>
            <hr />
            <div className="row">
              <div className="col">
                <b>Subtotal ({getCartCount()}) items</b>
              </div>
              
              <div className="row" style={{ padding: "2vh 0" }}>
                <div className="col">${getCartSubTotal()}</div>
                <button className="btn">CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
