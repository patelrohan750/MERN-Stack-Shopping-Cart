import axios from "../../http/index";

export const getAllProducts = () => async (dispatch) => {
  try {
    const result = await axios.get("/api/products");
    dispatch({
      type: "ALL_PRODUCTS",
      payload: result.data.products,
    });
  } catch (e) {
    console.log("ERROR: getAllProductss");
    console.log(e);
  }
};

export const addProduct = (product) => async (dispatch) => {
  
  try {
    const result = await axios.post("/api/product", product);
    dispatch({
      type: "ADD_PRODUCT",
      payload: result.data.product,
    });
  } catch (e) {
    console.log("ERROR: addProduct");
    console.log(e);
  }
};

export const getProductDeatils = (id) => async (dispatch) => {
  try {
    const result = await axios.get(`api/product/${id}`);
    dispatch({
      type: "GET_PRODUCT_DETAILS",
      payload: result.data.product,
    });
  } catch (e) {
    console.log("ERROR: getAllProductss");
    console.log(e);
  }
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({ type: "GET_PRODUCT_DETAILS_RESET" });
};
