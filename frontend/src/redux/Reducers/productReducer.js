const initialState = {
    allProducts: []
};

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ALL_PRODUCTS":
        return {
          ...state,
          allProducts: action.payload
        };
      case "ADD_PRODUCT":
        return {
            ...state,
            allProducts: [action.payload, ...state.allProducts]
        };
      default:
        return state;
    }
};

export const ProductDeatilsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case "GET_PRODUCT_DETAILS":
      return {
        product: action.payload,
      };
    case "GET_PRODUCT_DETAILS_RESET":
      return {
        product: {},
      };
    default:
      return state;
  }
};