import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

export default function CollectionPreviewComponent
    ({
         title,
         items
    })
{
    return (
        <div className="collection-preview">
            <div className="title">{title}</div>
            <div className="preview">
                {items
                    .filter((item, index) => {return index < 4})
                    .map((item) => {
                        return (
                            <CollectionItem
                                key={item.id}
                                item={item}
                                />
                    )})}
            </div>
        </div>
    )
}
