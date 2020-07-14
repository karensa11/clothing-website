import React from "react";
import "./directoryMenu.scss";
import sections from "../../data/directory.data";
import MenuItem from "../menuItem/MenuItem";

export default function DirectoryMenu() {
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