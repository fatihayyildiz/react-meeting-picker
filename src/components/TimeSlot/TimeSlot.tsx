import React from 'react';
import 'components/TimeSlot/TimeSlot.css';
import classNames from 'classnames';

export type TimeSlotProps = {
	start_time: string
	end_time: string
	available?: boolean
	selected?: boolean
}

const TimeSlot = ({ start_time, end_time, available = true, selected= false }: TimeSlotProps) => {
	return (
			<div className={classNames('row','time-slot-box', {'available':available, 'selected':selected})}>
				<div className='col-4'>{start_time}</div>
				<div className='col-2'>-</div>
				<div className='col-4'>{end_time}</div>
			</div>
	);
};

export default TimeSlot;
