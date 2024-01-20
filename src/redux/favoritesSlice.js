import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
        items: [],
        isLoading: false,
        error: null
    },

  reducers: {
      addFavorite: (state, action) => {
      state.items.push(action.payload.car);
    },
    removeFavorite: (state, action) => {
      const carToRemove = action.payload.car;
      state.items = state.items.filter(item => item.id !== carToRemove.id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;