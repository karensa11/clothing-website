import React from "react";
import "./directoryMenu.scss";
import sections from "../../data/directory.data";
import MenuItem from "../menuItem/MenuItem";

export default function DirectoryMenu() {
    return (
        <div className="directory-menu">
            {sections.map (({title, imageUrl, size, id}) => {
                return (
                    <MenuItem
                        title={title}
                        imageUrl={imageUrl}
                        size={size}
                        />
                )
            })}
        </div>
    )
}