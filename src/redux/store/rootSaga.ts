import { all } from 'redux-saga/effects';
import { productsSaga } from '../../sagas/productsSaga';
import { watchAddToCart } from '../../sagas/cartSaga';

export default function* rootSaga() {
  yield all([productsSaga(), watchAddToCart()]);
}
