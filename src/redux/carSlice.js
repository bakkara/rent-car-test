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
    isLoading: false,
    error: null,
    currentPage: 1,
    loadMore: true,
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setLoadMore: (state, action) => {
      state.loadMore = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, ...action.payload];
        state.hasMore = action.payload.length > 0;
      })
      .addCase(fetchCars.rejected, handleRejected);
  },
});

export const { setPage, setLoadMore } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;