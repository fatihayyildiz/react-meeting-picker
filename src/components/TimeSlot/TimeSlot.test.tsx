import React from 'react';
import { cleanup, screen, RenderResult } from '@testing-library/react';
import TimeSlot from 'components/TimeSlot/TimeSlot';
import { testRenderWithStore } from 'utils/testRenderWithStore';
import { MockReduxStoreInitialState } from 'utils/mockReduxStore';

afterEach(cleanup);

const testProps = {
	id: 1,
	day: 'Monday July 9, 2018',
	start_time: '08:00',
	end_time: '09:00',
	available: true,
	selected: true,
};

const renderTimeSlot = (): RenderResult =>
	testRenderWithStore(
		<TimeSlot
			end_time={testProps.end_time}
			start_time={testProps.start_time}
			id={testProps.id}
			day={testProps.day}
		/>,
		MockReduxStoreInitialState
	);

test('Timeslot should match with snapshot', () => {
	// First render component and get as fragment
	const { asFragment } = renderTimeSlot();

	// Compare with saved snapshot
	expect(asFragment()).toMatchSnapshot();
});

test('Timeslot renders times correctly', () => {
	// First render component with props and get as fragment
	renderTimeSlot();

	// Compare start time
	expect(screen.getByText(testProps.start_time)).toHaveTextContent(
		testProps.start_time
	);

	// Compare end time
	expect(screen.getByText(testProps.end_time)).toHaveTextContent(
		testProps.end_time
	);
});

test('Timeslot renders conditional classnames correctly', () => {
	// First render component with props and get as fragment
	const { container } = renderTimeSlot();

	// eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
	const disabled = container.getElementsByClassName('disabled');

	// eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
	const selected = container.getElementsByClassName('selected');

	// Check disabled slot
	expect(disabled.length).toBe(0);

	// Check selected class
	expect(selected.length).toBe(0);
});
