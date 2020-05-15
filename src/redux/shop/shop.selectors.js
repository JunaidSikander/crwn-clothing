import {createSelector} from "reselect";
import find from 'lodash/find';

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
};

const selectShop = state => state.shop;

export const  selectCollections = createSelector(
    [selectShop],
    shop => shop.collection
);

export const selectCollection = paramId=> createSelector(
    selectCollections,
collection =>find(collection, { 'id': COLLECTION_ID_MAP[paramId] })
)

//collection =>collection.find(collection => collection.id ===COLLECTION_ID_MAP[paramId])
