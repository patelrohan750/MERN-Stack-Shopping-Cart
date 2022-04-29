import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addProduct } from "../../redux/Actions/product-action";
import { getUser } from "../../redux/Actions/cart-action";
import { toast } from 'react-toastify';
import Notification from "../Notification/Notification";
import "./AddProduct.css";
const AddProduct = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.cart.user);
  const [product, setProduct] = useState({
    productName: "",
    description: "",
    quntity: "",
    price: "",
  });
  const [uploadImage, setUploadImage] = useState("");
  const [preview, setPreview] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  useEffect(() => {
    if (uploadImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(uploadImage);
    } else {
      setPreview(null);
    }
  }, [uploadImage]);
  useEffect(() => {
    dispatch(getUser())
  }, [])
  

  const onChnageFile = (e) => {
    setUploadImage(e.target.files[0]);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("productName", product.productName);
    formData.append("description", product.description);
    formData.append("quntity", product.quntity);
    formData.append("price", product.price);
    formData.append("imgae", uploadImage);
    formData.append("createdBy", user._id);
    dispatch(addProduct(formData));
    toast.success('prodcut added successfully', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    
  };

  return (
    <>
    <Notification/>
    <div className="container add-product-section">
      <div className="row">
        <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
          <div className="custom-bg cs-block cs-block-h-auto">
            <div className="row">
              <div className="col-12">
                <h2 className="cs-block-title d-inline-block">Add Product</h2>
              </div>
            </div>
            <div className="row tm-edit-product-row">
              <form
                className="row tm-edit-product-form"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="form-group mb-3">
                    <label htmlFor="productName">Product Name</label>
                    <input
                      id="productName"
                      name="productName"
                      type="text"
                      className="form-control validate"
                      value={product.productName}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      name="description"
                      className="form-control validate"
                      rows="3"
                      value={product.description}
                      onChange={handleInput}
                      required
                    ></textarea>
                  </div>
                  <div className="row">
                    <div className="form-group mb-3 col-xs-12 col-sm-6">
                      <label htmlFor="price">Price</label>
                      <input
                        id="price"
                        name="price"
                        type="number"
                        className="form-control validate"
                        value={product.price}
                        onChange={handleInput}
                        required
                      />
                    </div>
                    <div className="form-group mb-3 col-xs-12 col-sm-6">
                      <label htmlFor="quntity">Units In Stock</label>
                      <input
                        id="quntity"
                        name="quntity"
                        type="number"
                        className="form-control validate"
                        value={product.quntity}
                        onChange={handleInput}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">
                  {preview ? (
                    <img src={preview} alt="preview" className="preview_img"/>
                  ) : (
                    <div className="cs-product-img-dummy mx-auto">
                      <label htmlFor="file">
                        <i className="fas fa-cloud-upload-alt cs-upload-icon"></i>
                      </label>
                    </div>
                  )}

                  <div className="custom-file mt-3 mb-3">
                    <label
                      htmlFor="file"
                      className="btn btn-primary btn-block mx-auto"
                    >
                      UPLOAD PRODUCT IMAGE
                    </label>
                    <input
                      id="file"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={onChnageFile}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block text-uppercase"
                  >
                    Add Product Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AddProduct;
