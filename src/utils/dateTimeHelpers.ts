import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { TimeSlot } from 'store/slots/types';

dayjs.extend(isBetween);

export const checkDateIsBetween = ({
	selectedSlot,
	day,
	start_time,
	end_time,
}: {
	selectedSlot: TimeSlot;
	day: string;
	start_time: string;
	end_time: string;
}): boolean => {
	// Logic for detect selected time slot is between other time slots
	// Used for disable other time slots if agent occupied with these times
	// add and removes one minute to calculate correct range
	return (
		(dayjs(
			dayjs(`${dayjs(day).format('YYYY-MM-DD')} ${start_time}`).add(1, 'minute')
		).isBetween(
			`${dayjs(day).format('YYYY-MM-DD')} ${selectedSlot.start_time}`,
			dayjs(
				`${dayjs(day).format('YYYY-MM-DD')} ${selectedSlot.end_time}`
			).subtract(1, 'minute'),
			'minutes',
			'[]'
		) ||
			dayjs(
				dayjs(`${dayjs(day).format('YYYY-MM-DD')} ${end_time}`).subtract(
					1,
					'minute'
				)
			).isBetween(
				`${dayjs(day).format('YYYY-MM-DD')} ${selectedSlot.start_time}`,
				dayjs(
					`${dayjs(day).format('YYYY-MM-DD')} ${selectedSlot.end_time}`
				).subtract(1, 'minute'),
				'minutes',
				'[]'
			)) &&
		dayjs(dayjs(selectedSlot.day).format('YYYY-MM-DD')).isBetween(
			dayjs(dayjs(day).format('YYYY-MM-DD')).subtract(1, 'day'),
			dayjs(dayjs(day).format('YYYY-MM-DD')).add(1, 'day'),
			'day'
		)
	);
};
