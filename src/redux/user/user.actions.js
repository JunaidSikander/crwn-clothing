import {actionsType} from "../../constants/actionsType";

export const setCurrentUser = user => ({
    type: actionsType.SET_CURRENT_USER,
    payload: user
});