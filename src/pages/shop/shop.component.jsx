import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import {Route, Switch} from "react-router-dom";
import Collection from "../../components/collection/collection.component";

export default function ShopPage({match}) {
    return (
        <Switch>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route exact path={`${match.path}/:collectionId`} component={Collection} />
        </Switch>
    )
}
