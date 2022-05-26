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
		/*expect(JSON.stringify(formattedResult)).toEqual(
			JSON.stringify(FormattedCompaniesSlot as unknown as Array<CompanySlots>)
		);

		 */

		// compare random entry with result
		const randomCompanyIndex = Math.floor(
			Math.random() * formattedResult.length
		);

		// check random entry is correct
		expect(formattedResult[randomCompanyIndex]).toBe(
			FormattedCompaniesSlot[randomCompanyIndex]
		);
	});
});
