export function addItemToCart(cartItems, item) {
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
