import React from "react";
import "./Product.css";
import { toast } from "react-toastify";
import {useDispatch } from "react-redux";
import { addToCart } from "../../redux/Actions/cart-action";
const Product = ({ id, name, description, price, image }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(id,1));
    toast.success('product added in cart', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  };
  return (
    <div className="product">
      <img src={`/uploads/${image}`} alt={image} />

      <div className="product_info">
        <p className="info_name">{name}</p>

        <p className="info_description">{description.substring(0, 100)}</p>

        <p className="info_price">{price} Rs</p>

        <button
          type="button"
          className="addtocart_button"
          onClick={addToCartHandler}
        >
          Add To cart
        </button>
      </div>
    </div>
  );
};

export default Product;
