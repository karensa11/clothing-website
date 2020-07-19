import React from "react";
import {connect} from "react-redux";
import "./cart-dropdown.styles.scss";
import CustomButton from "../common-components/custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

function CartDropdown({cartItems}) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map(cartItem => {
                    return <CartItem key={cartItem.id} item={cartItem} />
                })}
            </div>
            <CustomButton>CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = state => ({
    cartItems: state.cartNs.cartItems
});

export default connect(mapStateToProps)(CartDropdown);
