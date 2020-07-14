import React from "react";
import collections from "../../data/shop-items.data";
import CollectionPreviewComponent from "../collection-preview/collection-preview.component";

export default function ShopComponent() {
    return (
        <div>
            {collections.map(({id, ...collection}) => {
                return (
                    <CollectionPreviewComponent
                        {...collection}
                    />
                )
            })}
        </div>
    )
}