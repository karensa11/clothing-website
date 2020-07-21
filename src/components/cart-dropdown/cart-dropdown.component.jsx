import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import "./cart-dropdown.styles.scss";
import CustomButton from "../common-components/custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {cartItemsSelector} from "../../redux/cart/cart-selector";
import {createStructuredSelector} from "reselect";
import {toggleCartHidden} from "../../redux/cart/cart-actions";

function CartDropdown({cartItems, removeCartDropDown, history}) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ?
                    (cartItems.map(cartItem =>
                        <CartItem key={cartItem.id} item={cartItem}/>
                        )) :
                    <div className="empty-message">
                        Your cart is empty
                    </div>
                }
            </div>
            <CustomButton onClick={() => {
                history.push("/checkout");
                removeCartDropDown();
            }}>
                Checkout
            </CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: cartItemsSelector
});

const mapDispatchToProps = dispatch => ({
    removeCartDropDown: () => dispatch(toggleCartHidden(true))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
