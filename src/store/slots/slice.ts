import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	APICompany,
	CompanySelectedSlot,
	CompanySlots,
	SlotsInitialState,
} from 'store/slots/types';
import { fetchSlots } from 'store/slots/actions';
import { RootState } from 'store/store';
import { convertApiResponseToFEModel } from 'utils/dataMapper';
import { TimeSlotProps } from 'components/TimeSlot/TimeSlot';

const initialState: SlotsInitialState = {
	loading: false,
	companies: [] as Array<CompanySlots>,
	selectedCompanySlots: [] as Array<CompanySelectedSlot>,
};

const slotSlice = createSlice({
	name: 'slots',
	initialState,
	reducers: {
		selectSlotForCompany: (state, action: PayloadAction<TimeSlotProps>) => {
			// Check for selected slot exist
			const checkSelectedSlotIndex = state.selectedCompanySlots.findIndex(
				(slot) => slot.id === action.payload.id
			);
			// If agent select slot before, change that slot with new selected one
			if (checkSelectedSlotIndex > -1)
				state.selectedCompanySlots[checkSelectedSlotIndex] = {
					id: action.payload.id,
					selectedSlot: {
						day: action.payload.day,
						start_time: action.payload.start_time,
						end_time: action.payload.end_time,
					},
				};
			// Agent didn't select any slot for this company
			// push new slot to store
			else
				state.selectedCompanySlots.push({
					id: action.payload.id,
					selectedSlot: {
						day: action.payload.day,
						start_time: action.payload.start_time,
						end_time: action.payload.end_time,
					},
				});
		},
		removeSlotForCompany: (state, action: PayloadAction<TimeSlotProps>) => {
			// Find selected company slot index
			const checkSelectedSlotIndex = state.selectedCompanySlots.findIndex(
				(slot) => slot.id === action.payload.id
			);
			// Remove found index value from store
			state.selectedCompanySlots.splice(checkSelectedSlotIndex, 1);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchSlots.pending, (state) => {
			state.loading = true;
			state.companies = [] as Array<CompanySlots>;
			state.selectedCompanySlots = [] as Array<CompanySelectedSlot>;
		});

		builder.addCase(fetchSlots.fulfilled, (state, { payload }) => {
			state.loading = false;
			const formattedCompanySlots = convertApiResponseToFEModel(
				payload as Array<APICompany>
			);
			state.companies = formattedCompanySlots as Array<CompanySlots>;
			state.selectedCompanySlots = [] as Array<CompanySelectedSlot>;
		});

		builder.addCase(fetchSlots.rejected, (state) => {
			state.loading = false;
			state.companies = [] as Array<CompanySlots>;
			state.selectedCompanySlots = [] as Array<CompanySelectedSlot>;
		});
	},
});

export const slotSelector = (state: RootState): SlotsInitialState =>
	state.slots;

export default slotSlice;
