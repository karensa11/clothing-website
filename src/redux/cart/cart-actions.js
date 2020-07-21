import CartTypes from "./cart-types";

export function toggleCartHidden() {
    return {
        type: CartTypes.TOGGLE_CART_HIDDEN
    }
}

export function addItem(item) {
    return {
        type: CartTypes.ADD_ITEM,
        payload: item
    }
}

export function removeItem(item) {
    return {
        type: CartTypes.REMOVE_ITEM,
        payload: item
    }
}

export function removeItemFromCart(item) {
    return {
        type: CartTypes.REMOVE_ITEM_FROM_CART,
        payload: item
    }
}
