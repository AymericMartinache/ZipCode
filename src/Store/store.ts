//* ---- TOOLKIT
import { configureStore } from '@reduxjs/toolkit';

//* --- REDUCER
import zipCodeReducer from './zipCodeReducer';

const store = configureStore({
  reducer: zipCodeReducer,
});

export default store;

// exports du type du state et de la fonction dispatch pour nos customs hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
