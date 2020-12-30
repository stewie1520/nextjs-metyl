import { actionTypes } from './action';

export const initCart = {
    cartItems: [],
    districts: [],
    wards: [],
    amount: 0,
    cartTotal: 0,
    isProcessingCart: false,
};

function reducer(state = initCart, action) {
    switch (action.type) {
        case actionTypes.GET_CART_SUCCESS:
            return {
                ...state,
            };
        case actionTypes.GET_CART_SUCCESS_DB:
            return {
                ...state,
                ...{ cartItems: action.cart.cartItems },
                ...{ amount: action.cart.amount },
                ...{ cartTotal: action.cart.cartTotal },
            };
        case actionTypes.UPDATE_CART_SUCCESS:
            return {
                ...state,
                ...{ cartItems: action.payload.cartItems },
                ...{ amount: action.payload.amount },
                ...{ cartTotal: action.payload.cartTotal },
            };
        case actionTypes.CLEAR_CART_SUCCESS:
            return {
                ...state,
                ...{ cartItems: action.payload.cartItems },
                ...{ amount: action.payload.amount },
                ...{ cartTotal: action.payload.cartTotal },
            };
        case actionTypes.GET_CART_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };

        case actionTypes.CONFIRM_CART:
            return {
                ...state,
                isProcessingCart: true,
            };
        case actionTypes.CONFIRM_CART_SUCCESS:
            return {
                ...state,
                isProcessingCart: false,
                cartItems: [],
                amount: 0,
                cartTotal: 0,
            };
        case actionTypes.GET_CART_ERROR_DB:
            return {
                ...state,
                ...{ error: action.error },
            };
        case actionTypes.UPDATE_CART_ERROR:
            return {
                ...state,
                ...{ error: action.error },
            };
        case actionTypes.CHANGE_PROVINCE:
            return {
                ...state,
                ...{ isProcessingCart: true, districts: [], wards: [] },
            };
        case actionTypes.CHANGE_PROVINCE_SUCCESS:
            return {
                ...state,
                ...{
                    isProcessingCart: false,
                    districts: action.payload,
                    wards: [],
                },
            };
        case actionTypes.CHANGE_PROVINCE_FAIL:
            return {
                ...state,
                ...{ isProcessingCart: false, districts: [], wards: [] },
            };

        case actionTypes.CHANGE_DISTRICT:
            return {
                ...state,
                ...{ isProcessingCart: true, wards: [] },
            };
        case actionTypes.CHANGE_DISTRICT_SUCCESS:
            return {
                ...state,
                ...{ isProcessingCart: false, wards: action.payload },
            };
        case actionTypes.CHANGE_DISTRICT_FAIL:
            return {
                ...state,
                ...{ isProcessingCart: false, wards: [] },
            };
        default:
            return state;
    }
}

export default reducer;
