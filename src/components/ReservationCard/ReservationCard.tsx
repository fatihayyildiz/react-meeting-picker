import React from 'react';

export type ReservationCardProps = {
	start_time?: Date
	end_time?: Date
}

const ReservationCard = ({ start_time, end_time }: ReservationCardProps) => {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-12'>Reservation</div>
			</div>
			<div className='row'>
				<div className='col-5'>{start_time?.toLocaleDateString()}</div>
				<div className='col-2'>-</div>
				<div className='col-5'>{end_time?.toLocaleDateString()}</div>
			</div>
		</div>
	);
};

export default ReservationCard;
