import { createAsyncThunk } from '@reduxjs/toolkit';
import { SlotsApi } from 'store/slots/api';

const fetchSlots = createAsyncThunk(
	'slots/fetchSlots',
	async () => {
		try{
			// Call axios instance to get slots
			return await SlotsApi.getInstance().getAllSlots()
		}catch(error: unknown){
			console.error('fetch slots api call error:',error)
			throw Error('fetch slots api call error')
		}
	});

export {fetchSlots}