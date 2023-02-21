import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  _id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
}

export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // при запросі на сервер
    fetchProductsStart(state: ProductsState) {
      state.loading = true;
    },
    // якщо ОК
    fetchProductsSuccess(
      state: ProductsState,
      action: PayloadAction<Product[]>,
    ) {
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    },
    // якщо не ОК
    fetchProductsFailure(state: ProductsState, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} = productsSlice.actions;

export default productsSlice.reducer;
