import { all, put, call, takeEvery, select } from 'redux-saga/effects';
import { notification } from 'antd';

import axios from 'axios';
import { endpoints } from '../../apis';

const server = process.env.server;

import {
    actionTypes,
    getCartError,
    getCartSuccess,
    updateCartSuccess,
    updateCartError,
    clearCartSuccess,
    confirmCartFail,
    confirmCartSuccess,
} from './action';

import { getAuth, getCart } from '../selectors';

const modalSuccess = (type) => {
    notification[type]({
        message: 'Lựa chọn hợp lý',
        description: 'Sản phẩm đã được thêm vào giỏ hàng của bạn!',
        duration: 1,
    });
};
const modalWarning = (type) => {
    notification[type]({
        message: 'Hmm, đã xoá',
        description: 'Sản phẩm đã được xoá khỏi giỏ hàng của bạn',
        duration: 1,
    });
};

export const calculateAmount = (obj) =>
    Object.values(obj)
        .reduce((acc, { quantity, price }) => acc + quantity * price, 0)
        .toFixed(2);

function* confirmCartSaga(payload) {
    try {
        const { addressInfo, cartItems } = payload;
        const processedPayload = {
            isPaid: false,
            status: 0,
            items: cartItems.map((item) => ({
                productId: item.id,
                quantity: item.quantity,
            })),
            fullName: addressInfo.name,
            email: addressInfo.email,
            address: {
                phone: addressInfo.phone,
                street: addressInfo.address,
                city: addressInfo.city,
                district: addressInfo.district,
                ward: addressInfo.ward,
            },
            note: addressInfo.note,
        };
        const { data } = yield call(
            axios.post,
            server + endpoints.CONFIRMCART,
            processedPayload
        );
        if (!data.success) {
            yield put(confirmCartFail(new Error(data.message)));
            return;
        }

        yield put(confirmCartSuccess(data));
    } catch (err) {
        yield put(confirmCartFail(err));
    }
}

function* getCartSaga() {
    try {
        yield put(getCartSuccess());
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* addItemSaga(payload) {
    const { product } = payload;
    try {
        const localCart = JSON.parse(localStorage.getItem('persist:metyl'))
            .cart;
        let currentCart = JSON.parse(localCart);
        let existItem = currentCart.cartItems.find(
            (item) => item.id === product.id
        );
        if (existItem) {
            existItem.quantity += product.quantity;
        } else {
            if (!product.quantity) {
                product.quantity = 1;
            }
            currentCart.cartItems.push(product);
        }
        currentCart.amount = calculateAmount(currentCart.cartItems);
        currentCart.cartTotal++;

        yield put(updateCartSuccess(currentCart));
        modalSuccess('success');
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* removeItemSaga(payload) {
    const { product } = payload;

    try {
        let localCart = JSON.parse(
            JSON.parse(localStorage.getItem('persist:metyl')).cart
        );
        let index = localCart.cartItems.indexOf(product);
        localCart.cartTotal = localCart.cartTotal - product.quantity;
        localCart.cartItems.splice(index, 1);
        localCart.amount = calculateAmount(localCart.cartItems);
        if (localCart.cartItems.length === 0) {
            localCart.cartItems = [];
            localCart.amount = 0;
            localCart.cartTotal = 0;
        }
        yield put(updateCartSuccess(localCart));
        modalWarning('warning');
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* increaseQtySaga(payload) {
    const { product } = payload;
    try {
        let localCart = JSON.parse(
            JSON.parse(localStorage.getItem('persist:metyl')).cart
        );
        let selectedItem = localCart.cartItems.find(
            (item) => item.id === product.id
        );
        if (selectedItem) {
            selectedItem.quantity++;
            localCart.cartTotal++;
            localCart.amount = calculateAmount(localCart.cartItems);
        }
        yield put(updateCartSuccess(localCart));
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* decreaseItemQtySaga(payload) {
    const { product } = payload;
    try {
        const localCart = JSON.parse(
            JSON.parse(localStorage.getItem('persist:metyl')).cart
        );
        let selectedItem = localCart.cartItems.find(
            (item) => item.id === product.id
        );

        if (selectedItem) {
            selectedItem.quantity--;
            localCart.cartTotal--;
            localCart.amount = calculateAmount(localCart.cartItems);
        }
        yield put(updateCartSuccess(localCart));
    } catch (err) {
        yield put(getCartError(err));
    }
}

function* clearCartSaga() {
    const auth = yield select(getAuth);
    const emptyCart = {
        cartItems: [],
        amount: 0,
        cartTotal: 0,
    };
    if (auth && auth.isLoggedIn) {
        try {
            const res = yield call(axios.post, server + endpoints.CLEARCART, {
                auth: auth,
            });
            if (!res.data.errors) {
                yield put(clearCartSuccess(emptyCart));
            }
        } catch (err) {
            yield put(updateCartError(err));
        }
    } else {
        try {
            yield put(clearCartSuccess(emptyCart));
        } catch (err) {
            yield put(updateCartError(err));
        }
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.GET_CART, getCartSaga)]);
    yield all([takeEvery(actionTypes.ADD_ITEM, addItemSaga)]);
    yield all([takeEvery(actionTypes.REMOVE_ITEM, removeItemSaga)]);
    yield all([takeEvery(actionTypes.INCREASE_QTY, increaseQtySaga)]);
    yield all([takeEvery(actionTypes.DECREASE_QTY, decreaseItemQtySaga)]);
    yield all([takeEvery(actionTypes.CLEAR_CART, clearCartSaga)]);
    yield all([takeEvery(actionTypes.CONFIRM_CART, confirmCartSaga)]);
}
