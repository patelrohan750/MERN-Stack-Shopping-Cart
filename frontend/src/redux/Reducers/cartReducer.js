const cartInitialState = {
  cartItems: [],
  user: {}
};

export const CartReducer = (state = cartInitialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: item,
        };
      } else {
        return {
          ...state,
          cartItems: item,
        };
      }
    case "ALL_CARTS_ITEMS":
      return {
        ...state,
        cartItems: action.payload,
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};


