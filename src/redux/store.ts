import { configureStore } from '@reduxjs/toolkit';
import RootReducer from './RootReducer';
// import { authSlice } from "./authSlice";

export const store = configureStore({
    reducer: RootReducer,
});
// export type AppState = ReturnType<AppStore['getState']>;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export type RooteState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
