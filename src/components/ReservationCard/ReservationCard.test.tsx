import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import ReservationCard from 'components/ReservationCard/ReservationCard';

afterEach(cleanup);

const testProps = {
	day: 'July 9, 2018',
	start_time: '08:00',
	end_time: '09:00',
};

test('Reservation card should match with snapshot', () => {
	// First render component and get as fragment
	const { asFragment } = render(
		<ReservationCard
			{...{
				day: testProps.day,
				start_time: testProps.start_time,
				end_time: testProps.end_time,
			}}
		/>
	);

	// Compare with saved snapshot
	expect(asFragment()).toMatchSnapshot();
});

test('Reservation card render with props should match with snapshot', () => {
	// First render component with props and get as fragment
	const { asFragment } = render(
		<ReservationCard
			{...{
				day: testProps.day,
				start_time: testProps.start_time,
				end_time: testProps.end_time,
			}}
		/>
	);

	// Compare with saved snapshot
	expect(asFragment()).toMatchSnapshot();
});

test('Reservation card renders times correctly', () => {
	// First render component with props and get as fragment
	render(
		<ReservationCard
			{...{
				day: testProps.day,
				start_time: testProps.start_time,
				end_time: testProps.end_time,
			}}
		/>
	);

	// Compare start time
	expect(screen.getByText(testProps.day)).toHaveTextContent(testProps.day);

	// Compare start time
	expect(screen.getByText(testProps.start_time)).toHaveTextContent(
		testProps.start_time
	);

	// Compare end time
	expect(screen.getByText(testProps.end_time)).toHaveTextContent(
		testProps.end_time
	);
});
