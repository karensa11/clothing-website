import React from "react";
import "./directory-menu.styles.scss";
import sections from "../../data/directory.data";
import MenuItem from "../menu-item/menu-item.component";

export default function DirectoryMenuComponent() {
    return (
        <div className="directory-menu">
            {sections.map (({id, ...section}) => {
                return (
                    <MenuItem
                        key={id}
                        {...section}
                        />
                )
            })}
        </div>
    )
}