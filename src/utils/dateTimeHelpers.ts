import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { TimeSlot } from 'store/slots/types';

dayjs.extend(isBetween);

const formatDay = (day: string) => dayjs(day).format('YYYY-MM-DD');

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
		(dayjs(dayjs(`${formatDay(day)} ${start_time}`).add(1, 'minute')).isBetween(
			`${formatDay(day)} ${selectedSlot.start_time}`,
			dayjs(`${formatDay(day)} ${selectedSlot.end_time}`).subtract(1, 'minute'),
			'minutes',
			'[]'
		) ||
			dayjs(
				dayjs(`${formatDay(day)} ${end_time}`).subtract(1, 'minute')
			).isBetween(
				`${formatDay(day)} ${selectedSlot.start_time}`,
				dayjs(`${formatDay(day)} ${selectedSlot.end_time}`).subtract(
					1,
					'minute'
				),
				'minutes',
				'[]'
			)) &&
		dayjs(formatDay(selectedSlot.day)).isBetween(
			dayjs(formatDay(day)).subtract(1, 'day'),
			dayjs(formatDay(day)).add(1, 'day'),
			'day'
		)
	);
};
