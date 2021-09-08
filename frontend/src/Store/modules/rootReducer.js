import { combineReducers } from 'redux';
import product from './Product/reducer';
import cart from './Cart/reducer';

const rootReducer = combineReducers({
    product,
    cart,
});

export default rootReducer;
