import React from "react";
import {connect} from "react-redux";
import {ReactComponent as Icon} from "../../assets/shopping-bag.svg";
import * as cartActions from "../../redux/cart/cart-actions";
import "./cart-icon.styles.scss";
import {cartItemsCountSelector} from "../../redux/cart/cart-selector";
import {createStructuredSelector} from "reselect";

function CartIcon({toggleCartHidden, itemsCount})
{
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <Icon className="shopping-icon" />
            <span className="item-count">{itemsCount}</span>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    itemsCount: cartItemsCountSelector
});

const mapDispatchToProps = (dispatch) => ({
   toggleCartHidden: () => dispatch(cartActions.toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
