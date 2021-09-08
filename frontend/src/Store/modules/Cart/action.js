export function getCartQty() {
    const local = JSON.parse(localStorage.getItem('cartsItens'));
    if (local) {
        return {
            type: '@cart/GET_CARTS_QTY',
            payload: local.length,
        };
    }
    return {
        type: '@cart/GET_CARTS_QTY',
        payload: 0,
    };
}
export function removeItemCart(cart) {
    let total = 0;
    cart.forEach((element) => {
        total += element.total;
    });
    const totalPrice = total + 60;
    localStorage.setItem('cartsItens', JSON.stringify(cart));
    if (cart.length === 0) {
        return {
            type: '@cart/REMOVE_ITEM_CART',
            payload: { cart, total, totalPrice },
        };
    }
    return {
        type: '@cart/REMOVE_ITEM_CART',
        payload: { cart, total, totalPrice },
    };
}

export function getCarts() {
    const cart = JSON.parse(localStorage.getItem('cartsItens'));
    if (!cart) {
        return {
            type: '@cart/GET_CARTS_EMPTY',
            payload: { cartQty: 0 },
        };
    }
    let total = 0;
    cart.forEach((element) => {
        total += element.total;
    });
    const totalPrice = total + 60;

    return {
        type: '@cart/GET_CARTS',
        payload: { cart, total, totalPrice },
    };
}

export function addQty(id, qty) {
    const data = JSON.parse(localStorage.getItem('cartsItens'));
    let total = 0;
    data.forEach((element) => {
        if (element.product.id === id) {
            element.qty = qty;
            element.total = qty * element.product.price;
        }
    });

    data.forEach((element) => {
        total += element.total;
    });
    const totalPrice = total + 60;

    localStorage.setItem('cartsItens', JSON.stringify(data));

    return {
        type: '@cart/ADD_QTY_CART',
        payload: { data, total, totalPrice },
    };
}

export function getError(message) {
    return {
        type: '@cart/GET_ERROR',
        payload: message,
    };
}
