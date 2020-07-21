import React from "react";
import "./checkout-item.styles.scss";
import {connect} from "react-redux";
import {removeItemFromCart, addItem, removeItem} from "../../redux/cart/cart-actions";

function CheckoutItem({cartItem, removeItemFromCart, removeItem, addItem}) {
    const {imageUrl, name, quantity, price} = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <div className="name">
                {name}
            </div>
            <div className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem, quantity - 1)}>&#10096;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem, quantity + 1)}>&#10097;</div>
            </div>
            <div className="price">
                ${price}
            </div>
            <div className="remove-button" onClick={() => removeItemFromCart(cartItem)}>
                &#10005;
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItemFromCart: (cartItem) => dispatch(removeItemFromCart(cartItem)),
    removeItem: (cartItem) => dispatch(removeItem(cartItem)),
    addItem: (cartItem) => dispatch(addItem(cartItem))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
