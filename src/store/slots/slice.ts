import {createSlice} from '@reduxjs/toolkit';
import { Company, SlotsInitialState } from 'store/slots/types';
import {fetchSlots} from 'store/slots/actions';
import {RootState} from 'store/store';

const initialState: SlotsInitialState = {
	loading:false,
	companies: [] as Array<Company>
}

const slotSlice = createSlice({
	name: 'slots',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchSlots.pending, (state)=>{
			state.loading = true
			state.companies = [] as Array<Company>
		})

		builder.addCase(fetchSlots.fulfilled, (state,{payload})=>{
			state.loading = false
			state.companies = payload as Array<Company>
		})

		builder.addCase(fetchSlots.rejected, (state)=>{
			state.loading = false
			state.companies = [] as Array<Company>
		})
	}
})

export const slotSelector = (state: RootState): SlotsInitialState => state.slots

export default slotSlice