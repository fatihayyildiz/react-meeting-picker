import React from 'react';
import 'pages/DateSelect/DateSelect.css';
import CompanyContainer from 'containers/CompanyContainer/CompanyContainer';
import FormattedCompanies from 'mocks/resources/formatted_companies.json';

import { DaySlotsProps } from 'containers/DaySlots/DaySlots';

const DateSelect = () => {
	return (
		<div className="container date-select-container">
			<div className="row">
				{FormattedCompanies.map((company, index) => {
					return (
						<div className="col-3 fit-height-box" key={`company-${index}`}>
							<CompanyContainer
								key={`company-container-${index}`}
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
