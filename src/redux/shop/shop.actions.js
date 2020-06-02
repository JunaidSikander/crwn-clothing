import {actionsType} from "../../constants/actionsType";
import {convertCollectionsSnapShotToMaps, firestore} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
    type: actionsType.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionMap => ({
    type: actionsType.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type: actionsType.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});


export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(snapShot => {
            const collectionMap = convertCollectionsSnapShotToMaps(snapShot);
            dispatch(fetchCollectionsSuccess(collectionMap));
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
    }
};