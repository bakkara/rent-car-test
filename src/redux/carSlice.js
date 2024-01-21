import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
      items: [],
      totalCars: 0,
        isLoading: false,
        error: null
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCars.pending, handlePending)
            .addCase(fetchCars.fulfilled, (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = [...state.items, ...action.payload]; // Замініть на додавання до існуючого списку
  state.totalCars = state.items.length; // Оновлення загальної кількості машин
})
            .addCase(fetchCars.rejected, handleRejected)
    }
})


export const carsReducer = carsSlice.reducer