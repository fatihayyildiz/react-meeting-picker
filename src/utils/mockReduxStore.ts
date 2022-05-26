import { CompanySelectedSlot, CompanySlots } from 'store/slots/types';

export const MockReduxStoreInitialState = {
	slots: {
		loading: false,
		companies: [] as Array<CompanySlots>,
		selectedCompanySlots: [] as Array<CompanySelectedSlot>,
	},
};
