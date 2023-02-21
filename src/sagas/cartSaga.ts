import { put, takeLatest } from 'redux-saga/effects';
import { addItem } from '../redux/slices/cartSlice';
import { ADD_TO_CART } from '../redux/constatns/actionTypes';

//When triggered by a Redux action with the type ADD_TO_CART,
// the watchAddToCart generator function listens for the latest occurrence of this action
// and calls the addToCartSaga generator function.
function* addToCartSaga(action: any) {
  yield put(addItem(action.payload));
}

//By using the takeLatest effect within watchAddToCart,
// only the latest ADD_TO_CART action is handled at any given time,
// preventing multiple concurrent updates to the cart.
export function* watchAddToCart() {
  yield takeLatest(ADD_TO_CART, addToCartSaga);
}
