import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchProductsFailure,
  fetchProductsStart,
  fetchProductsSuccess,
} from '../redux/slices/productsSlice';

function* fetchProducts() {
  try {
    // This tries to fetch the products data from the specified API endpoint using the fetch function.
    // The call effect is used to call the fetch function, which returns a promise that resolves with a response object.
    // @ts-ignore
    const response = yield call(fetch, 'https://api.storerestapi.com/products');
    // @ts-ignore
    const products = yield call(() => response.json());
    yield put(fetchProductsSuccess(products.data));
    // If the API call fails, this dispatches the fetchProductsFailure action with the error message as the payload.
  } catch (error) {
    // @ts-ignore
    yield put(fetchProductsFailure(error.message));
  }
}

export function* productsSaga() {
  yield takeLatest(fetchProductsStart.type, fetchProducts);
}
