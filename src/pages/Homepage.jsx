import React from "react";
import "./homepage.styles.scss";
import DirectoryMenuComponent from "../components/directory-menu/directory-menu.component";

export default function Homepage () {
    return (
        <div className="homepage">
            <DirectoryMenuComponent/>
        </div>
    )
}