import React, { useEffect, useState } from 'react';
import DaySlots, { DaySlotsProps } from 'containers/DaySlots/DaySlots';
import ReservationCard from 'components/ReservationCard/ReservationCard';
import { useSelector } from 'react-redux';
import { slotSelector } from 'store/slots/slice';
import 'containers/CompanyContainer/CompanyContainer.css';
import { CompanySelectedSlot } from '../../store/slots/types';

export type CompanyContainerProps = {
	id: number;
	name: string;
	days: Array<DaySlotsProps>;
};

const CompanyContainer = ({ id, name, days }: CompanyContainerProps) => {
	const [selectedSlot, setSelectedSlot] = useState<CompanySelectedSlot>();

	const { selectedCompanySlots } = useSelector(slotSelector);

	useEffect(() => {
		if (selectedCompanySlots.length > 0) {
			const foundCompanyIndex = selectedCompanySlots.findIndex(
				(slot) => slot.id === id
			);
			if (foundCompanyIndex > -1) {
				console.log('Selected company slot:', selectedCompanySlots);
				setSelectedSlot(selectedCompanySlots[foundCompanyIndex]);
			} else setSelectedSlot(undefined);
		} else setSelectedSlot(undefined);
	}, [selectedCompanySlots, id]);

	return (
		<div className="container">
			<div className="top-sticky">
				<div className="row centered-box">
					<span>{name}</span>
				</div>
				{selectedSlot && (
					<div className="row centered-box">
						<ReservationCard
							id={id}
							day={selectedSlot.selectedSlot.day}
							start_time={selectedSlot.selectedSlot.start_time}
							end_time={selectedSlot.selectedSlot.end_time}
						/>
					</div>
				)}
			</div>
			<div className="row">
				{days.map((daySlots, index) => {
					return (
						<DaySlots
							key={`day-${index}`}
							id={id}
							day={daySlots.day}
							slots={daySlots.slots}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default CompanyContainer;
