import { takeLatest, call, put, all } from 'redux-saga/effects';
import Api from '~/Utils/Api';
import { getProductSuccess, getError } from './action';

export function* getAllProducts() {
    try {
        const response = yield call(Api.get, 'produto');

        yield put(getProductSuccess(response.data));
    } catch (error) {
        yield put(getError('Erro em algo'));
    }
}

export default all([takeLatest('@product/GET_PRODUCTS', getAllProducts)]);
