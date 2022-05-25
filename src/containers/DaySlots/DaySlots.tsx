import React from 'react';
import { TimeSlotProps } from 'components/TimeSlot/TimeSlot';
import TimeSlot from 'components/TimeSlot/TimeSlot';
import 'containers/DaySlots/DaySlots.css';

export type DaySlotsProps = {
	day: string
	slots: Array<TimeSlotProps>
}

const DaySlots = ({ day, slots }: DaySlotsProps) => {
	return (
		<div className='container centered-box'>
			<div className="row">
				<div className="col-12">{day}</div>
			</div>
			<div className="row g-0 centered-box">
				{
					slots.map((slot,index)=>{
						return <TimeSlot key={`slot-${index}`} {...{
							start_time: slot.start_time,
							end_time: slot.end_time
						}} />
					})
				}
			</div>
		</div>
	);
};

export default DaySlots;
