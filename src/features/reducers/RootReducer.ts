import { combineReducers } from "redux";
import ipAddressReducer from "./ipReducer";

const rootReducer = combineReducers({
  ipaddress: ipAddressReducer,
});

export default rootReducer;
