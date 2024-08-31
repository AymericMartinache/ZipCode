//* ---- TOOLKIT
import { createReducer } from '@reduxjs/toolkit';

//* --- THUNK
import thunkGetCity from './thunkGetCity';

//* --- TYPES
import { ICity } from '../components/@types/city';

interface CityState {
  cityInfo: ICity | null;
  error: string;
  isLoading: boolean;
}

//* INITIAL STATE
const initialState: CityState = {
  cityInfo: null,
  error: '',
  isLoading: false,
};

const zipCodeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(thunkGetCity.pending, (state) => {
      state.error = '';
      state.isLoading = true;
    })

    .addCase(thunkGetCity.fulfilled, (state, action) => {
      state.cityInfo = action.payload;
      state.isLoading = false;
    })

    .addCase(thunkGetCity.rejected, (state) => {
      state.error = 'Code postal invalide';
      state.cityInfo = null;
      state.isLoading = false;
    });
});

export default zipCodeReducer;
