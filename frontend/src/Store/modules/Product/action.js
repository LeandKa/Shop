export function getProduct() {
    return {
        type: '@product/GET_PRODUCTS',
    };
}

export function getProductByCategoria(product, id, totalPage) {
    return {
        type: '@product/GET_PRODUCTS_CATEGORIA_SUCCESS',
        payload: { product, id, totalPage },
    };
}

export function getProductBySearch(product, searchParams, totalPage) {
    return {
        type: '@product/GET_PRODUCTS_SEARCH_SUCCESS',
        payload: { product, searchParams, totalPage },
    };
}

export function getProductSuccess(product) {
    return {
        type: '@product/GET_PRODUCTS_SUCCESS',
        payload: { product },
    };
}

export function getError(message) {
    return {
        type: '@product/GET_ERROR',
        payload: message,
    };
}
