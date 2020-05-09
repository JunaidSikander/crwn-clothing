import {actionsType} from "../../constants/actionsType";

export const toggleCartHidden = () => ({
    type: actionsType.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: actionsType.ADD_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: actionsType.CLEAR_ITEM_FROM_CART,
    payload: item
});