const initialState = {
    product: [],
    categoria_id: 0,
    totalPage: 0,
    loading: false,
    searchParams: '',
    error: '',
};

export default function product(state = initialState, action) {
    switch (action.type) {
        case '@product/GET_PRODUCTS':
            return {
                ...state,
                loading: true,
            };
        case '@product/GET_PRODUCTS_CATEGORIA_SUCCESS':
            return {
                ...state,
                loading: false,
                searchParams: '',
                totalPage: action.payload.totalPage,
                product: action.payload.product,
                categoria_id: action.payload.id,
            };
        case '@product/GET_PRODUCTS_SEARCH_SUCCESS':
            return {
                ...state,
                loading: false,
                product: action.payload.product,
                totalPage: action.payload.totalPage,
                searchParams: action.payload.searchParams,
            };
        case '@product/GET_PRODUCTS_SUCCESS':
            return {
                ...state,
                loading: false,
                searchParams: '',
                totalPage: action.payload.product.totalPage,
                categoria_id: 0,
                product: action.payload.product,
            };
        case '@product/GET_ERROR':
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}
