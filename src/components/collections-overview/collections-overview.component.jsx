import React from "react";
import "./collections-overview.styles.scss";
import CollectionPreviewComponent from "../collection-preview/collection.preview.component";
import {createStructuredSelector} from "reselect";
import {shopItemsForPreviewSelector} from "../../redux/shop/shop-selector";
import {connect} from "react-redux";

function CollectionsOverview({shopItems})
{
    return (
        <div className="collections-overview">
            {shopItems.map(({id, ...collection}) => {
                return (
                    <CollectionPreviewComponent
                        key={id}
                        {...collection}
                    />
                )
            })}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    shopItems: shopItemsForPreviewSelector
});

export default connect(mapStateToProps)(CollectionsOverview);
