import React, {useEffect} from "react"
import {connect} from "react-redux";

import "./collection.styles.scss";
import {shopItemsByTypeSelector} from "../../redux/shop/shop-selector";
import CollectionItem from "../collection-item/collection-item.component";
import {updateDocumentTitle} from "../../utils";

function Collection({collection})
{
    useEffect(() => {
        updateDocumentTitle(collection.title);
    });
    const {items, title} = collection;
    return (
        <div className="collection">
            <div className="title">{title}</div>
            <div className="items">
                {items.map(item => {
                    return (
                        <CollectionItem key={item.id}
                                        item={item}
                        />
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: shopItemsByTypeSelector(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection)
