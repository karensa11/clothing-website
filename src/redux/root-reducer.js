import {combineReducers} from "redux";
import userNs from "./user/user-reducer";
import cartNs from "./cart/cart-reducer";

export default combineReducers({
    userNs,
    cartNs
})
