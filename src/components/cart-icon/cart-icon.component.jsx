import React from "react";
import {connect} from "react-redux";
import {ReactComponent as Icon} from "../../assets/shopping-bag.svg";
import * as cartActions from "../../redux/cart/cart-actions";
import "./cart-icon.styles.scss";

function CartIcon({toggleCartHidden})
{
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <Icon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
   toggleCartHidden: () => dispatch(cartActions.toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
