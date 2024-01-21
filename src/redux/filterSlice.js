import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  text: '',
    selectedMake: '',
  selectedPrice: null,
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

export const { setFilter, setSelectedMake, setSelectedPrice } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;