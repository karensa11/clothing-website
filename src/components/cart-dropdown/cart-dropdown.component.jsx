import React from "react";
import {connect} from "react-redux";
import "./cart-dropdown.styles.scss";
import CustomButton from "../common-components/custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {cartItemsSelector} from "../../redux/cart/cart-selector";
import {createStructuredSelector} from "reselect";

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

const mapStateToProps = createStructuredSelector({
    cartItems: cartItemsSelector
});

export default connect(mapStateToProps)(CartDropdown);
