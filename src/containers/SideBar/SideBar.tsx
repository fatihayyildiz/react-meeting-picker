import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { slotSelector } from 'store/slots/slice';
import { convertFEModelToAPIRequest } from 'utils/dataMapper';

const SideBar = () => {
	const { selectedCompanySlots } = useSelector(slotSelector);

	const onSubmitClick = () => {
		alert('API request body prepared. Please check console log');
		console.log(convertFEModelToAPIRequest(selectedCompanySlots));
	};

	return (
		<div className="col-3 extra-info-container">
			<span>
				Current Timezone:
				<br />
				{dayjs.tz.guess()}
			</span>
			<br />
			<Link to={'/about'}>About</Link>
			<br />
			<br />
			<button
				className={'btn btn-primary'}
				onClick={() => onSubmitClick()}
				type="button"
				disabled={selectedCompanySlots?.length === 0}
			>
				Submit
			</button>
		</div>
	);
};

export default SideBar;
