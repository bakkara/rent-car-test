import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  text: '',
    selectedMake: '',
    selectedPrice: null,
  mileage: {
    from: null,
    to: null,
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter: {
      reducer(state, action) {
        return {
          ...state,
          text: action.payload,
        };
      },
      },
    setMileage: (state, action) => {
      state.mileage = action.payload;
    },
    setSelectedMake: {
      reducer(state, action) {
        return {
          ...state,
          selectedMake: action.payload,
        };
      },
      },
    setSelectedPrice: (state, action) => {
      state.selectedPrice = action.payload;
      },
    },
  
});

export const { setFilter, setSelectedMake, setSelectedPrice, setMileage } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;