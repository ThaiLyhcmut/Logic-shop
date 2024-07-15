import { combineReducers } from "redux";
import { createStore } from "redux"
import { cartReducer } from "./reducer/cartadd";

const rootReducer = combineReducers({
  cartReducer,
})

export const store = createStore(rootReducer);