import { configureStore } from '@reduxjs/toolkit';
import selectCatReducers from './reducers/selectCatReducer';

export const store = configureStore({
  reducer: {
    selectedCats: selectCatReducers,

  },

})