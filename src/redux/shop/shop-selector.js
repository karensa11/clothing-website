import {createSelector} from "reselect";
import memoize from "lodash.memoize";

const shopSelector = state => state.shopNs;

export const shopItemsSelector = createSelector(
    [shopSelector],
    shop => shop.shopItems
);

export const shopItemsForPreviewSelector = createSelector(
    [shopItemsSelector],
    shopItems => Object.keys(shopItems).map(key => shopItems[key])
);

export const shopItemsByTypeSelector = memoize(collectionRouterName => createSelector(
    [shopItemsSelector],
    shopItems => shopItems[collectionRouterName]
));
