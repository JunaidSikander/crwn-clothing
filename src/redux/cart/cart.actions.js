import {actionsType} from "../../constants/actionsType";

export const toggleCartHidden = () => ({
    type: actionsType.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: actionsType.ADD_ITEM,
    payload: item
});