import { all } from 'redux-saga/effects';
import ProductSaga from './product/saga';
import SettingSaga from './setting/saga';
import CartSaga from './cart/saga';
import AuthSaga from './auth/saga';
import ShippingSaga from './shipping/saga';
import OrderSaga from './order/saga';

export default function* rootSaga() {
    yield all([
        ProductSaga(),
        SettingSaga(),
        CartSaga(),
        AuthSaga(),
        OrderSaga(),
        ShippingSaga(),
    ]);
}
