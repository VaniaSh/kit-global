import { combineReducers } from 'redux';
import productsReducer from '../slices/productsSlice';
import cartReducer from '../slices/cartSlice';

const rootReducer = combineReducers({
  products: productsReducer, // reducer for render products
  cart: cartReducer, // reducer for cart
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
