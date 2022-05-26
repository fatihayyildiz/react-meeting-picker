import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CompanyContainer from 'containers/CompanyContainer/CompanyContainer';
import SingleFormattedCompany from 'mocks/resources/single_formatted_company.json';

afterEach(cleanup);

const testProps = {
	name: SingleFormattedCompany[0].name,
	days: SingleFormattedCompany[0].days,
};

test('Company Container should match with snapshot', () => {
	// First render component and get as fragment
	const { asFragment } = render(
		<CompanyContainer {...{ name: testProps.name, days: testProps.days }} />
	);

	// Compare with saved snapshot
	expect(asFragment()).toMatchSnapshot();
});
