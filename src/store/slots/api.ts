import { HttpClient } from 'utils/HttpClient';
import { APICompany } from 'store/slots/types';

export class SlotsApi extends HttpClient {
	private static classInstance?: SlotsApi;

	constructor() {
		super('http://localhost:3000/api');
	}

	// To avoid create an instance everytime, pointed to Singleton of static value
	public static getInstance() {
		if (!this.classInstance) {
			this.classInstance = new SlotsApi();
		}
		return this.classInstance;
	}

	public getAllSlots = () => this.instance.get<Array<APICompany>>(`/slots`);
}
