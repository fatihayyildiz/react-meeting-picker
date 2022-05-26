import React from 'react';

export type ReservationCardProps = {
	start_time?: string;
	end_time?: string;
};

const ReservationCard = ({ start_time, end_time }: ReservationCardProps) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12">Reservation</div>
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
