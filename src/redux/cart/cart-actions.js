import CartTypes from "./cart-types";

export function toggleCartHidden() {
    return {
        type: CartTypes.TOGGLE_CART_HIDDEN
    }
}

export function addItemToCart(item) {
    return {
        type: CartTypes.ADD_ITEM_TO_CART,
        payload: item
    }
}
