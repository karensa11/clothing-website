import {createSelector} from "reselect";

const cartSelector = state => state.cartNs;

export const cartItemsSelector = createSelector(
    [cartSelector],
    cart => cart.cartItems
);

export const cartHiddenSelector = createSelector(
    [cartSelector],
    cart => cart.hidden
);

export const cartItemsCountSelector = createSelector(
    [cartItemsSelector],
    cartItems =>
        cartItems.reduce((aggregator, item) => aggregator + item.quantity, 0)
);

export const cartTotalSelector = createSelector(
    [cartItemsSelector],
    cartItems =>
        cartItems.reduce((aggregator, item) => aggregator + item.quantity * item.price, 0)
)
