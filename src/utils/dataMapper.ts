import {
	APICompany,
	CompanySelectedSlot,
	CompanySlots,
	DaySlots,
	TimeSlot,
} from 'store/slots/types';
import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(LocalizedFormat);

const convertApiResponseToFEModel = (companies: Array<APICompany>) => {
	return companies.map((company: APICompany) => {
		const daysArray = company.time_slots.reduce(
			(acc: Array<DaySlots>, curr) => {
				let currentDay = `${dayjs(curr.start_time).format('dddd')} ${dayjs(
					curr.start_time
				).format('LL')}`;
				let foundIndexInDays = acc.findIndex((day) => day.day === currentDay);

				if (foundIndexInDays > -1) {
					const foundedCurrentDay = acc[foundIndexInDays] as DaySlots;
					foundedCurrentDay.slots.push({
						day: currentDay,
						start_time: dayjs(curr.start_time).format('HH:mm'),
						end_time: dayjs(curr.end_time).format('HH:mm'),
					});
				} else {
					const newDaySlot = {
						day: currentDay,
						start_time: dayjs(curr.start_time).format('HH:mm'),
						end_time: dayjs(curr.end_time).format('HH:mm'),
					} as TimeSlot;
					acc.push({
						day: currentDay,
						slots: [newDaySlot],
					});
				}
				return acc;
			},
			[]
		);
		return {
			id: company.id,
			name: company.name,
			days: daysArray as Array<DaySlots>,
		};
	}) as Array<CompanySlots>;
};

const convertFEModelToAPIRequest = (
	selectedSlot: Array<CompanySelectedSlot>
) => {
	return selectedSlot?.map((slot) => {
		let formattedStartTimeSlot = `${dayjs(
			`${slot.selectedSlot.day} ${slot.selectedSlot.start_time}`
		).format('YYYY-MM-DDTHH:mm:ss.sssZ')}`;

		let formattedEndTimeSlot = `${dayjs(
			`${slot.selectedSlot.day} ${slot.selectedSlot.end_time}`
		).format('YYYY-MM-DDTHH:mm:ss.sssZ')}`;

		return {
			id: slot.id,
			time_slots: [
				{
					start_time: formattedStartTimeSlot,
					end_time: formattedEndTimeSlot,
				},
			],
		};
	});
};

export { convertApiResponseToFEModel, convertFEModelToAPIRequest };
