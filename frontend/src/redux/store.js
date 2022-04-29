import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { ProductReducer, ProductDeatilsReducer } from "./Reducers/productReducer";
import { CartReducer } from "./Reducers/cartReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ product: ProductReducer, cart:CartReducer, productDetails:ProductDeatilsReducer });
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
