import React from 'react';
import 'components/ReservationCard/ReservationCard.css';
import slotSlice from 'store/slots/slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/store';

export type ReservationCardProps = {
	id: number;
	day: string;
	start_time: string;
	end_time: string;
};

const ReservationCard = ({
	id,
	day,
	start_time,
	end_time,
}: ReservationCardProps) => {
	const dispatch = useDispatch<AppDispatch>();

	const removeSelectedReservation = () => {
		dispatch(
			slotSlice.actions.removeSlotForCompany({ id, day, start_time, end_time })
		);
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-9">Reservation</div>
				<div
					className="col-3 my-auto"
					onClick={() => removeSelectedReservation()}
					data-testid="clear"
				>
					<span className="clear-link">clear</span>
				</div>
			</div>
			<div className="row">
				<div className="col-12">{day}</div>
			</div>
			<div className="row">
				<div className="col-5">{start_time}</div>
				<div className="col-2">-</div>
				<div className="col-5">{end_time}</div>
			</div>
		</div>
	);
};

export default ReservationCard;
