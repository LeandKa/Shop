const initialState = {
    cartQty: 0,
    cart: [],
    error: '',
    totalPrice: 0,
    total: 0,
};

export default function cart(state = initialState, action) {
    switch (action.type) {
        case '@cart/GET_CARTS_QTY':
            return {
                ...state,
                cartQty: action.payload,
            };
        case '@cart/REMOVE_ITEM_CART':
            return {
                ...state,
                cartQty: action.payload.cart.length,
                cart: action.payload.cart,
                totalPrice: action.payload.totalPrice,
                total: action.payload.total,
            };

        case '@cart/GET_CARTS_EMPTY':
            return {
                ...state,
                cartQty: action.payload,
            };

        case '@cart/ADD_QTY_CART':
            return {
                ...state,
                cart: action.payload.cart,
                totalPrice: action.payload.totalPrice,
                total: action.payload.total,
            };
        case '@cart/GET_CARTS':
            return {
                ...state,
                cart: action.payload.cart,
                totalPrice: action.payload.totalPrice,
                total: action.payload.total,
            };

        case '@cart/GET_ERROR':
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}
