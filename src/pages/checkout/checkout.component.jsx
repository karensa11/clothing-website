import React from "react";
import "./checkout.styles.scss";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {cartItemsSelector, cartTotalSelector} from "../../redux/cart/cart-selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";

function CheckoutPage({cartItems, cartTotal}) {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className="total">
                <div>TOTAL: ${cartTotal}</div>
            </div>
            {cartTotal > 0 &&
                <div className="pay-section">
                    <div className="test-warning">
                        *Please use following test card for payments*
                        <br/>
                        4242 4242 4242 4242 - Exp: 01/22 CW: 123
                    </div>
                    <StripeButton
                        totalPrice={cartTotal}
                    />
                </div>
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: cartItemsSelector,
    cartTotal: cartTotalSelector
});

export default connect(mapStateToProps)(CheckoutPage);
