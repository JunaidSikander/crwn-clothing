import {actionsType} from "../../constants/actionsType";

const INITIAL_STATE= {
    collections: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionsType.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            };
        default:
            return state;
    }
};

export default shopReducer;