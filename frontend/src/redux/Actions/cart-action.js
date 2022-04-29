import axios from "../../http/index";

//product,quanity,price
export const addToCart = (product, quntity) => async (dispatch) => {
  try {
    if (!product) {
      throw new Error("product Not Found");
    }
    
    const result = await axios.post("/api/addtocart", { product, quntity });
    
    dispatch({
      type: "ADD_TO_CART",
      payload: result.data.cart,
    });
    
  } catch (e) {
    console.log("ERROR: addToCart");
    console.log(e);
  }
};

export const removeFromCart = (productId) => async(dispatch) => {
  try {
    const result = await axios.post("/api/removeItem", {productId});
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: result.data.cart,
    });
  } catch (e) {
    console.log("ERROR: remove Cart");
    console.log(e);
  }
};

export const getCartItems = () => async (dispatch) => {
  try {
    const result = await axios.get("/api/cart");
    dispatch({
      type: "ALL_CARTS_ITEMS",
      payload: result.data.cart,
    });
    
  } catch (e) {
    console.log("ERROR: getCartItems");
    console.log(e);
  }
};

export const getUser = () =>async(dispatch)=>{
  try{
    const result = await axios.get("/api/user");
    dispatch({
      type: "SET_USER",
      payload: result.data.user,
    });
    
  }catch(e){
    console.log("ERROR: getUser");
    console.log(e);
  }
}