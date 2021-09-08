import { all } from 'redux-saga/effects';

import product from './Product/saga';

export default function* rootSaga() {
    return yield all([product]);
}
