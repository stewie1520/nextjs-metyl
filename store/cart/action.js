export const actionTypes = {
    GET_CART: 'GET_CART',
    GET_CART_SUCCESS: 'GET_CART_SUCCESS',
    GET_CART_ERROR: 'GET_CART_ERROR',

    GET_CART_SUCCESS_DB: 'GET_CART_SUCCESS_DB',
    GET_CART_ERROR_DB: 'GET_CART_ERROR_DB',

    GET_CART_TOTAL_QUANTITY: 'GET_CART_TOTAL_QUANTITY',
    GET_CART_TOTAL_QUANTITY_SUCCESS: 'GET_CART_TOTAL_QUANTITY_SUCCESS',

    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',

    CLEAR_CART: 'CLEAR_CART',
    CLEAR_CART_SUCCESS: 'CLEAR_CART_SUCCESS',
    CLEAR_CART_ERROR: 'CLEAR_CART_ERROR',

    INCREASE_QTY: 'INCREASE_QTY',
    INCREASE_QTY_SUCCESS: 'INCREASE_QTY_SUCCESS',
    INCREASE_QTY_ERROR: 'INCREASE_QTY_ERROR',

    DECREASE_QTY: 'DECREASE_QTY',
    UPDATE_CART: 'UPDATE_CART',

    UPDATE_CART_SUCCESS: 'UPDATE_CART_SUCCESS',
    UPDATE_CART_ERROR: 'UPDATE_CART_ERROR',

    CONFIRM_CART: 'CONFIRM_CART',
    CONFIRM_CART_SUCCESS: 'CONFIRM_CART_SUCCESS',
    CONFIRM_CART_FAIL: 'CONFIRM_CART_FAIL',
    CHANGE_PROVINCE: 'CHANGE_PROVINCE',
    CHANGE_PROVINCE_SUCCESS: 'CHANGE_PROVINCE_SUCCESS',
    CHANGE_PROVINCE_FAIL: 'CHANGE_PROVINCE_FAIL',

    CHANGE_DISTRICT: 'CHANGE_DISTRICT',
    CHANGE_DISTRICT_SUCCESS: 'CHANGE_DISTRICT_SUCCESS',
    CHANGE_DISTRICT_FAIL: 'CHANGE_DISTRICT_FAIL',
};

export function confirmCart(payload) {
    return { type: actionTypes.CONFIRM_CART, payload };
}

export function confirmCartSuccess(payload) {
    return { type: actionTypes.CONFIRM_CART_SUCCESS, payload };
}

export function confirmCartFail(error) {
    return { type: actionTypes.CONFIRM_CART_FAIL, error };
}

export function getCart() {
    return { type: actionTypes.GET_CART };
}

export function changeProvince(pid) {
    return { type: actionTypes.CHANGE_PROVINCE, payload: pid };
}

export function changeProvinceSuccess(data) {
    return { type: actionTypes.CHANGE_PROVINCE_SUCCESS, payload: data };
}

export function changeProvinceFail(err) {
    return { type: actionTypes.CHANGE_PROVINCE_FAIL, payload: err };
}

export function changeDistrict(did) {
    return { type: actionTypes.CHANGE_DISTRICT, payload: did };
}

export function changeDistrictSuccess(data) {
    return { type: actionTypes.CHANGE_DISTRICT_SUCCESS, payload: data };
}

export function changeDistrictFail(err) {
    return { type: actionTypes.CHANGE_DISTRICT_FAIL, payload: err };
}

export function getCartSuccess() {
    return {
        type: actionTypes.GET_CART_SUCCESS,
    };
}

export function getCartError(error) {
    return {
        type: actionTypes.GET_CART_ERROR,
        error,
    };
}

export function getCartSuccessFromDb(cart) {
    return {
        type: actionTypes.GET_CART_SUCCESS_DB,
        cart,
    };
}

export function getCartErrorFromDb(error) {
    return {
        type: actionTypes.GET_CART_ERROR_DB,
        error,
    };
}

export function addItem(product) {
    return { type: actionTypes.ADD_ITEM, product };
}

export function removeItem(product) {
    return { type: actionTypes.REMOVE_ITEM, product };
}

export function increaseItemQty(product) {
    return { type: actionTypes.INCREASE_QTY, product };
}

export function decreaseItemQty(product) {
    return { type: actionTypes.DECREASE_QTY, product };
}

export function updateCartSuccess(payload) {
    return {
        type: actionTypes.UPDATE_CART_SUCCESS,
        payload,
    };
}

export function updateCartError(payload) {
    return {
        type: actionTypes.UPDATE_CART_ERROR,
        payload,
    };
}

export function clearCart() {
    return {
        type: actionTypes.CLEAR_CART,
    };
}

export function clearCartSuccess(payload) {
    return {
        type: actionTypes.CLEAR_CART_SUCCESS,
        payload,
    };
}
