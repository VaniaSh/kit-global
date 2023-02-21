import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import productsReducer from '../slices/productsSlice';
import cartReducer from '../slices/cartSlice';
import { productsSaga } from '../../sagas/productsSaga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

// створення Стору
const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
  middleware,
});

sagaMiddleware.run(productsSaga);

export default store;
