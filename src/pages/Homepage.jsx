import React from "react";
import "./homepage.styles.scss";
import DirectoryMenu from "../components/directoryMenu/DirectoryMenu";

export default function Homepage () {
    return (
        <div className="homepage">
            <DirectoryMenu/>
        </div>
    )
}