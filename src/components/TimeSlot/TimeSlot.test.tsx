import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import TimeSlot from 'components/TimeSlot/TimeSlot';

afterEach(cleanup);

const testProps = {
	id: 1,
	day: 'July 9, 2018',
	start_time: '08:00',
	end_time: '09:00',
	available: true,
	selected: true,
};

test('Timeslot should match with snapshot', () => {
	// First render component and get as fragment
	const { asFragment } = render(
		<TimeSlot
			end_time={testProps.end_time}
			start_time={testProps.start_time}
			id={testProps.id}
			day={testProps.day}
		/>
	);

	// Compare with saved snapshot
	expect(asFragment()).toMatchSnapshot();
});

test('Timeslot renders times correctly', () => {
	// First render component with props and get as fragment
	render(
		<TimeSlot
			day={testProps.day}
			start_time={testProps.start_time}
			end_time={testProps.end_time}
			id={testProps.id}
		/>
	);

	// Compare start time
	expect(screen.getByText(testProps.start_time)).toHaveTextContent(
		testProps.start_time
	);

	// Compare end time
	expect(screen.getByText(testProps.end_time)).toHaveTextContent(
		testProps.end_time
	);
});

test('Timeslot renders conditional classnames correctly | All true', () => {
	// First render component with props and get as fragment
	const { container } = render(
		<TimeSlot
			day={testProps.day}
			start_time={testProps.start_time}
			end_time={testProps.end_time}
			available={testProps.available}
			selected={testProps.selected}
			id={testProps.id}
		/>
	);

	// eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
	const available = container.getElementsByClassName('available');

	// eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
	const selected = container.getElementsByClassName('selected');

	// Check available slot
	expect(available.length).toBe(1);

	// Check selected class
	expect(selected.length).toBe(1);
});

test('Timeslot renders conditional classnames correctly | All FALSE', () => {
	// First render component with props and get as fragment
	const { container } = render(
		<TimeSlot
			day={testProps.day}
			start_time={testProps.start_time}
			end_time={testProps.end_time}
			available={false}
			selected={false}
			id={testProps.id}
		/>
	);

	// eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
	const available = container.getElementsByClassName('available');

	// eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
	const selected = container.getElementsByClassName('selected');

	// Check available slot
	expect(available.length).toBe(0);

	// Check selected class
	expect(selected.length).toBe(0);
});
