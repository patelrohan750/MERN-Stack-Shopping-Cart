import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useDispatch,useSelector } from "react-redux";
import { getCartItems } from "../../redux/Actions/cart-action";
const Navbar = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  
  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to ='/' className="navbar-brand">
            MERN Stack
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to = '/addproduct' className="nav-link active">
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
               <Link to = '/cart' className="nav-link cart">
               <i className="fas fa-shopping-cart me-1"></i>
                  Cart
                  <span className="cartlogo__badge">{cartItems.length}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
