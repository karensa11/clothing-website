import React, {useEffect} from "react";
import "./collections-overview.styles.scss";
import CollectionPreviewComponent from "../collection-preview/collection.preview.component";
import {createStructuredSelector} from "reselect";
import {shopItemsForPreviewSelector} from "../../redux/shop/shop-selector";
import {connect} from "react-redux";
import {updateDocumentTitle} from "../../utils";

function CollectionsOverview({shopItems})
{
    useEffect(() => {
        updateDocumentTitle("Shop");
    });
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
