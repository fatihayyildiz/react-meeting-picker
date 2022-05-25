import React from 'react';
import DaySlots, { DaySlotsProps } from 'containers/DaySlots/DaySlots';
import ReservationCard from 'components/ReservationCard/ReservationCard';
import 'containers/CompanyContainer/CompanyContainer.css';

export type CompanyContainerProps = {
	name: string
	days: Array<DaySlotsProps>
}

const CompanyContainer = ({ name, days }: CompanyContainerProps) => {
	return (
		<div className='container'>
			<div className='top-sticky'>
				<div className='row centered-box'>
					<span>{name}</span>
				</div>
				<div className='row centered-box'>
					<ReservationCard />
				</div>
			</div>
			<div className='row'>
				{
					days.map((daySlots, index) => {
						return <DaySlots key={`day-${index}`} day={daySlots.day} slots={daySlots.slots} />;
					})
				}
			</div>
		</div>
	);
};

export default CompanyContainer;
