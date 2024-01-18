import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = "https://651bdb34194f77f2a5aef818.mockapi.io"

export const fetchCars = createAsyncThunk (
  "cars/fetchAll",
  async (_, thunkAPI) => {
    try {
        const { data } = await axios.get("/adverts");
        console.log(data)
      return data;
    } catch (error) {
        toast.error('Oops. Something is wrong. Please try again!');
        console.log(error)
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);