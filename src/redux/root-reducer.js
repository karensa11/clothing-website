import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import userNs from "./user/user-reducer";
import cartNs from "./cart/cart-reducer";
import shopNs from "./shop/shop-reducer";

const localPersistConfig = {
    key: 'root',
    storage: localStorage,
    whitelist: ['cartNs'] // userNs handled by firebase and not needed on local storage
};

const rootReducer = combineReducers({
    userNs,
    cartNs,
    shopNs
});

export default persistReducer(localPersistConfig, rootReducer);
