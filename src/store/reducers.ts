import { combineReducers } from '@reduxjs/toolkit';
import slotSlice from 'store/slots/slice';

export const reducers = {
	slots: slotSlice.reducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
