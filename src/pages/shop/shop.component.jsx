import React from "react";
import collections from "../../data/shop-items.data";
import CollectionPreviewComponent from "../../components/collection-preview/collection-preview.component";

export default function ShopPage() {
    return (
        <div>
            {collections.map(({id, ...collection}) => {
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
