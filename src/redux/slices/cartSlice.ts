import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/product';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  itemCount: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  itemCount: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Функція для додавання товару в корзину

    addItem: (state, action: PayloadAction<Product>) => {
      // Пошук індексу товару в списку товарів у корзині

      const existingItemIndex = state.items.findIndex(
        (item) => item.product._id === action.payload._id,
      );
      // Якщо товар вже є у корзині, збільшуємо його кількість та загальну кількість товарів

      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].quantity++;
        state.itemCount++;
        // Якщо товару немає в корзині, додаємо його та збільшуємо загальну кількість товарів
      } else {
        state.items.push({ product: action.payload, quantity: 1 });
        state.itemCount++;
      }
    },
    // Функція для видалення товару з корзини
    removeItem: (state, action: PayloadAction<number>) => {
      // Видалення товару зі списку товарів у корзині за його ідентифікатором
      state.items = state.items.filter(
        (item) => item.product._id !== action.payload,
      );

      // Оновлення загальної кількості товарів у корзині
      state.itemCount = state.items.reduce(
        (acc, item) => acc + item.quantity,
        0,
      );
    },
    // Функція для збільшення кількості товару у корзині
    increaseQuantity: (state, action: PayloadAction<number>) => {
      // Знаходження індексу товару, який потрібно збільшити
      const existingItemIndex = state.items.findIndex(
        (item) => item.product._id === action.payload,
      );

      // Якщо товар існує у корзині, то збільшити його кількість на 1 і оновити загальну кількість товарів у корзині
      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].quantity++;
        state.itemCount++;
      }
    },
    // Функція для зменшення кількості товару у корзині
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      // Знаходження індексу товару, який потрібно зменшити кількість
      const existingItemIndex = state.items.findIndex(
        (item) => item.product._id === action.payload,
      );

      // Якщо товар існує у корзині, то зменшити його кількість на 1, якщо вона більше одного, і оновити загальну кількість товарів у корзині
      // Якщо кількість товару стала 0, то видалити товар з корзини
      if (existingItemIndex >= 0) {
        const currentQuantity = state.items[existingItemIndex].quantity;
        if (currentQuantity > 1) {
          state.items[existingItemIndex].quantity--;
          state.itemCount--;
        } else {
          state.items = state.items.filter(
            (item) => item.product._id !== action.payload,
          );
        }
      }
    },
    // Кількість всіх елементів в корзині
    countCartItems: (state) => {
      state.itemCount = state.items.reduce(
        (acc, item) => acc + item.quantity,
        0,
      );
    },
    // Обрахунок ціни всіх елементів в корзині
    calculateTotalPrice: (state) => {
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0,
      );
      if (state.itemCount === 0) {
        state.totalPrice = 0;
      }
    },
  },
});

// Експорт данних
export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  countCartItems,
  calculateTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
