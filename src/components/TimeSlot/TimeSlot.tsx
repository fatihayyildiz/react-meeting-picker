import React from 'react';
import 'components/TimeSlot/TimeSlot.css';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/store';
import slotSlice from 'store/slots/slice';

export type TimeSlotProps = {
	id: number;
	day: string;
	start_time: string;
	end_time: string;
	available?: boolean;
	selected?: boolean;
};

const TimeSlot = ({
	id,
	day,
	start_time,
	end_time,
	available = true,
	selected = false,
}: TimeSlotProps) => {
	const dispatch = useDispatch<AppDispatch>();

	const onSlotClick = () => {
		dispatch(
			slotSlice.actions.selectSlotForCompany({ id, day, start_time, end_time })
		);
	};

	return (
		<div
			className={classNames('row', 'time-slot-box', {
				available: available,
				selected: selected,
			})}
			onClick={() => onSlotClick()}
		>
			<div className="col-4">{start_time}</div>
			<div className="col-2">-</div>
			<div className="col-4">{end_time}</div>
		</div>
	);
};

export default TimeSlot;
