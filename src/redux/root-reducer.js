import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userNs from "./user/user-reducer";
import cartNs from "./cart/cart-reducer";
import shopNs from "./shop/shop-reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cartNs'] // userNs handled by firebase and not needed on local storage
};

const rootReducer = combineReducers({
    userNs,
    cartNs,
    shopNs
});

export default persistReducer(persistConfig, rootReducer);
