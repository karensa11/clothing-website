export function addItem(cartItems, item) {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if(existingItem) {
        return cartItems.map(cartItem => {
            if(cartItem.id === item.id) {
                return {...cartItem, quantity: cartItem.quantity+1}
            } else {
                return cartItem;
            }
        })
    }
    return [...cartItems, {...item, quantity: 1}];
}

export function removeItem(cartItems, item) {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if(existingItem.quantity === 1){
        return removeItemFromCart(cartItems, item);
    }
    else {
        return cartItems.map(cartItem => {
            if (cartItem.id === item.id) {
                return {...cartItem, quantity: cartItem.quantity - 1}
            } else {
                return cartItem;
            }
        })
    }
}

export function removeItemFromCart(cartItems, item) {
    return cartItems.filter(cartItem =>
        cartItem.id !== item.id);
}
