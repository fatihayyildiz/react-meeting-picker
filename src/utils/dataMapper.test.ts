import { convertApiResponseToFEModel } from 'utils/dataMapper';
import ApiTimeSlots from 'mocks/resources/time_slots.json';
import FormattedCompaniesSlot from 'mocks/resources/formatted_companies.json';
import { APICompany } from 'store/slots/types';

describe('Mapper Test', () => {
	it('convertApiResponseToFEModel data mapper should map data correctly', () => {
		// call mapper and get results
		const formattedResult = convertApiResponseToFEModel(
			ApiTimeSlots as unknown as Array<APICompany>
		);

		// Compare deeply with json file
		expect(formattedResult).toStrictEqual(FormattedCompaniesSlot);

		// compare random entry with result
		const randomCompanyIndex = Math.floor(
			Math.random() * formattedResult.length
		);

		// check random entry is correct
		expect(formattedResult[randomCompanyIndex]).toStrictEqual(
			FormattedCompaniesSlot[randomCompanyIndex]
		);
	});
});
