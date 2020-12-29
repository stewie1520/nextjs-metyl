import { combineReducers } from 'redux';
import product from './product/reducer';
import cart from './cart/reducer';
import setting from './setting/reducer';
import auth from './auth/reducer';
import order from './order/reducer';
import shipping from './shipping/reducer';
export default combineReducers({
    auth,
    setting,
    product,
    cart,
    order,
    shipping,
});
