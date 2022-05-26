import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DaySlots from 'containers/DaySlots/DaySlots';
import SingleFormattedCompany from 'mocks/resources/single_formatted_company.json';
import { TimeSlotProps } from 'components/TimeSlot/TimeSlot';

afterEach(cleanup);

const testProps = {
	id: 1,
	day: SingleFormattedCompany[0].days[0].day,
	slots: SingleFormattedCompany[0].days[0]
		.slots as unknown as Array<TimeSlotProps>,
};

test('Day slots should match with snapshot', () => {
	// First render component and get as fragment
	const { asFragment } = render(
		<DaySlots
			{...{ day: testProps.day, slots: testProps.slots, id: testProps.id }}
		/>
	);

	// Compare with saved snapshot
	expect(asFragment()).toMatchSnapshot();
});

test('Day slots renders classnames correctly', () => {
	// First render component with props and get as fragment
	const { container } = render(
		<DaySlots
			{...{ day: testProps.day, slots: testProps.slots, id: testProps.id }}
		/>
	);

	// eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
	const centeredBox = container.getElementsByClassName('centered-box');

	// eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
	const row = container.getElementsByClassName('row');

	// Check classes
	expect(centeredBox.length).toBe(2);

	// Check rows also contains time slots row classnames
	expect(row.length).toBe(4);
});
