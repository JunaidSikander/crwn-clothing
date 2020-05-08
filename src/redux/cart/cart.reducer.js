import {actionsType} from "../../constants/actionsType";
import {addItemToCart} from "../../utils/cart.util";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case actionsType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case actionsType.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        default:
            return state;
    }
};

export default cartReducer;