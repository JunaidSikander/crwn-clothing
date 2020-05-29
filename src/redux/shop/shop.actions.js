import {actionsType} from "../../constants/actionsType";

export const updateCollections = (collectionMap) => ({
   type: actionsType.UPDATE_COLLECTIONS,
    payload: collectionMap
});