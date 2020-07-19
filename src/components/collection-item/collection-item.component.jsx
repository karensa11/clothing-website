import React from "react";
import {connect} from "react-redux";
import "./collection-item.styles.scss";
import CustomButton from "../common-components/custom-button/custom-button.component";
import * as cartActions from "../../redux/cart/cart-actions";

function CollectionItem
({
     item,
     addItemTooCart
 })
{
    const {name, price, imageUrl} = item;
    return (
        <div className="collection-item">
            <div className="image"
                 style={{backgroundImage: `url(${imageUrl})`}}
            />
            <div className="collection-footer">
                <div className="name">{name}</div>
                <div className="price">${price}</div>
            </div>
            <CustomButton inverted onClick={() => addItemTooCart(item)}>
                Add to cart
            </CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItemTooCart: item => dispatch(cartActions.addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
