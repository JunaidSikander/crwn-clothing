import {createSelector} from "reselect";

const shopSelector = state => state.shop;

export const  selectShopCollection = createSelector(
    [shopSelector],
    shop => shop.collection
);