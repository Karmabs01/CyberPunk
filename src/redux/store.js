import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './dataSlice';

const store = configureStore({
  reducer: {
    data: dataSlice,
  },
  devTools: true,
});

export default store;
