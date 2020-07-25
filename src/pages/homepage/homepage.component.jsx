import React, {useEffect} from "react";
import "./homepage.styles.scss";
import DirectoryMenuComponent from "../../components/directory-menu/directory-menu.component";
import {updateDocumentTitle} from "../../utils";

export default function HomePage () {
    useEffect(() => {
        updateDocumentTitle();
    });
    return (
        <div className="homepage">
            <DirectoryMenuComponent/>
        </div>
    )
}