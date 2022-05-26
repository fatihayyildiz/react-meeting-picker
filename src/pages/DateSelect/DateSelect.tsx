import React, { useEffect } from 'react';
import 'pages/DateSelect/DateSelect.css';
import CompanyContainer from 'containers/CompanyContainer/CompanyContainer';
import { fetchSlots } from 'store/slots/actions';
import { useSelector, useDispatch } from 'react-redux';
import { slotSelector } from 'store/slots/slice';
import { AppDispatch } from 'store/store';
import { DaySlotsProps } from 'containers/DaySlots/DaySlots';

const DateSelect = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { loading, companies } = useSelector(slotSelector);

	useEffect(() => {
		dispatch(fetchSlots());
	}, [dispatch]);

	return (
		<div className="container date-select-container">
			<div className="row">
				{loading && <span>Loading ...</span>}
				{!loading &&
					companies.map((company, index) => {
						return (
							<div className="col-3 fit-height-box" key={`company-${index}`}>
								<CompanyContainer
									key={`company-container-${index}`}
									id={company.id}
									name={company.name}
									days={company.days as unknown as Array<DaySlotsProps>}
								/>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default DateSelect;
