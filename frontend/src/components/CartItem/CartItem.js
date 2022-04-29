import React from "react";
import "./CartItem.css";
import {useDispatch } from "react-redux";
import { addToCart,getCartItems,removeFromCart } from "../../redux/Actions/cart-action";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const decrement=(id,qty)=>{
    dispatch(addToCart(id,qty));
  }
  const increment=(id,qty)=>{
    dispatch(addToCart(id,qty));
  }
  const removeItem=(id)=>{
    dispatch(removeFromCart(id));
  }
  const checkQty = item.quanity == 1 ?"hidden":"visible";
  return (
    <>
    <div className="row main-content border-top d-flex justify-content-center align-items-center">
              <div className="col-2">
                <img
                  className="img-fluid img"
                  src={`/uploads/${item.img}`} alt={item._id}
                />
              </div>
              <div className="col">
                <div className="row text-muted">{item.name}</div>
               
              </div>
              <div className="col quantity">
                <button className="plus-btn" type="button" style={{"visibility":checkQty,"marginRight":"15px"}} onClick={() => decrement(item._id,item.quanity - 1)}>
                <i
                  className="fas fa-minus minus "
                  
                ></i>
                </button>
                
                <input type="number" min="1" value={item.quanity}  disabled />
                <button className="plus-btn" type="button" onClick={() => increment(item._id,item.quanity + 1)}>
                <i
                  className="fas fa-plus add"
                  
                ></i>
                </button>
                
              </div>
              <div className="col">
              ${item.price} <span className="close" onClick={() => removeItem(item._id)}>✕</span>
              </div>
            </div>
      
    </>
  );
};

export default CartItem;
