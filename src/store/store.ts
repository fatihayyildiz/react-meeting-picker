import { configureStore } from '@reduxjs/toolkit';
import rootReducer from 'store/reducers';

export const store = configureStore({
	reducer: rootReducer,
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type { RootState, AppDispatch };
