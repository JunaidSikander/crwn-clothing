import {createSelector} from "reselect";

const selectShop = state => state.shop;

export const  selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = paramId=> createSelector(
    [selectCollections],
    collections => collections[paramId]
);
//collection =>collection.find(collection => collection.id ===COLLECTION_ID_MAP[paramId])
//collection =>find(collection, { 'id': COLLECTION_ID_MAP[paramId] })