import CartTypes from "./cart-types";
import * as cartUtils from "./cart-utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const reducer = (state=INITIAL_STATE, action) => {
    const {type, payload} = action;
    switch(type) {
        case CartTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: cartUtils.addItem(state.cartItems, payload)
            };
        case CartTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: cartUtils.removeItem(state.cartItems, payload)
            };
        case CartTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: cartUtils.removeItemFromCart(state.cartItems, payload)
            };
        default:
            return state;
    }
};

export default reducer;
