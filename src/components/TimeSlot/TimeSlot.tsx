import React, { useEffect, useState } from 'react';
import 'components/TimeSlot/TimeSlot.css';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'store/store';
import slotSlice, { slotSelector } from 'store/slots/slice';
import { CompanySelectedSlot } from 'store/slots/types';
import { checkDateIsBetween } from 'utils/dateTimeHelpers';

export type TimeSlotProps = {
	id: number;
	day: string;
	start_time: string;
	end_time: string;
};

const TimeSlot = ({ id, day, start_time, end_time }: TimeSlotProps) => {
	const dispatch = useDispatch<AppDispatch>();

	const [isBetweenSelectedSlot, setIsBetweenSelectedSlot] =
		useState<boolean>(false);
	const [selectedCompanySlot, setSelectedCompanySlot] =
		useState<CompanySelectedSlot>();

	const { selectedCompanySlots } = useSelector(slotSelector);

	useEffect(() => {
		if (selectedCompanySlots.length > 0) {
			// Check selected time is between time slot
			// https://day.js.org/docs/en/plugin/is-between
			const isBetweenSlotIndex = selectedCompanySlots.findIndex((slot) =>
				checkDateIsBetween({
					selectedSlot: slot.selectedSlot,
					day,
					start_time,
					end_time,
				})
			);

			const foundCompanyIndex = selectedCompanySlots.findIndex(
				(slot) =>
					slot.id === id &&
					slot.selectedSlot.day === day &&
					slot.selectedSlot.start_time === start_time &&
					slot.selectedSlot.end_time === end_time
			);

			if (isBetweenSlotIndex > -1) setIsBetweenSelectedSlot(true);
			else setIsBetweenSelectedSlot(false);

			if (foundCompanyIndex > -1)
				setSelectedCompanySlot(selectedCompanySlots[foundCompanyIndex]);
			else setSelectedCompanySlot(undefined);
		} else {
			setIsBetweenSelectedSlot(false);
			setSelectedCompanySlot(undefined);
		}
	}, [selectedCompanySlots, id, day, start_time, end_time]);

	const onSlotClick = () => {
		if (!isBetweenSelectedSlot)
			dispatch(
				slotSlice.actions.selectSlotForCompany({
					id,
					day,
					start_time,
					end_time,
				})
			);
	};

	return (
		<div
			className={classNames('row', 'time-slot-box', {
				disabled: isBetweenSelectedSlot,
				selected: selectedCompanySlot,
			})}
			onClick={() => onSlotClick()}
			data-testid="time-slot"
		>
			<div className="col-4">{start_time}</div>
			<div className="col-2">-</div>
			<div className="col-4">{end_time}</div>
		</div>
	);
};

export default TimeSlot;
