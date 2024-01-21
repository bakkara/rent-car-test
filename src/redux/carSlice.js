import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCars, fetchCars } from "./operations";

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
      error: null,
      adverts: [],
      loadMore: true
    },
  extraReducers: builder => {
  builder
    .addCase(fetchCars.pending, handlePending)
    .addCase(fetchCars.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, ...action.payload];
      state.totalCars = state.items.length;
      state.loadMore = action.payload.length > 0;
    })
    .addCase(fetchCars.rejected, handleRejected)
    .addCase(fetchAllCars.pending, handlePending)
    .addCase(fetchAllCars.rejected, handleRejected)
    .addCase(fetchAllCars.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.adverts = action.payload;
    })
}
})


export const carsReducer = carsSlice.reducer