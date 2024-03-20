import { combineReducers } from "redux";
import ipReducer from "./ipReducer";

const RootReducer = combineReducers({
  ipaddress: ipReducer 
})

export default RootReducer
