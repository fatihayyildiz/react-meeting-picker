import React from 'react';
import { cleanup, screen, RenderResult } from '@testing-library/react';
import ReservationCard from 'components/ReservationCard/ReservationCard';
import { testRenderWithStore } from 'utils/testRenderWithStore';
import { MockReduxStoreInitialState } from 'utils/mockReduxStore';

const testProps = {
	id: 1,
	day: 'Monday July 9, 2018',
	start_time: '08:00',
	end_time: '09:00',
};

const renderReservationCard = (): RenderResult =>
	testRenderWithStore(
		<ReservationCard
			{...{
				id: testProps.id,
				day: testProps.day,
				start_time: testProps.start_time,
				end_time: testProps.end_time,
			}}
		/>,
		MockReduxStoreInitialState
	);

afterEach(cleanup);

test('Reservation card should match with snapshot', () => {
	// First render component and get as fragment
	const { asFragment } = renderReservationCard();

	// Compare with saved snapshot
	expect(asFragment()).toMatchSnapshot();
});

test('Reservation card renders times correctly', () => {
	// First render component with props and get as fragment
	renderReservationCard();

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
