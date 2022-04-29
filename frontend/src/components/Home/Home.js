import React, { useEffect } from "react";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/Actions/product-action";
import Product from "../Product/Product";
import Notification from "../Notification/Notification";
const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.allProducts);
  
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <div className="homepage">
      <Notification/>
      <h2 className="homepage_title">Latest Products</h2>
      <div className="products_list">
        {products.map((product) => (
          <Product
            key={product._id}
            id={product._id}
            name={product.productName}
            description={product.description}
            price={product.price}
            image={product.imgae}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
