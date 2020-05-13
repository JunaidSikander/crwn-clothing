import {actionsType} from "../../constants/actionsType";
import {addItemToCart, removeItemFromCart} from "../../utils/cart.util";

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
        case actionsType.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter( (cartItem) =>  cartItem.id !== action.payload.id )
            };
        case actionsType.REMOVE_ITEM:
            return {
                ...state,
              cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        default:
            return state;
    }
};

export default cartReducer;