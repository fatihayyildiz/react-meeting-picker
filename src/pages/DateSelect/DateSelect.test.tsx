import React from 'react';
import {
	cleanup,
	screen,
	RenderResult,
	waitFor,
	fireEvent,
} from '@testing-library/react';
import DateSelect from 'pages/DateSelect/DateSelect';
import { testRenderWithStore } from 'utils/testRenderWithStore';
import { MockReduxStoreInitialState } from 'utils/mockReduxStore';
import MockTimeSlots from 'mocks/resources/time_slots.json';
import { APICompany } from 'store/slots/types';
import { server } from 'mocks/server.js';

const renderDateSelectPage = (): RenderResult =>
	testRenderWithStore(<DateSelect />, MockReduxStoreInitialState);

afterEach(cleanup);

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

test('Date Select page should render loading info', async () => {
	// First render component and get as fragment
	const { asFragment } = renderDateSelectPage();

	// Compare with saved snapshot
	expect(asFragment()).toMatchSnapshot();
});

test('Date Select page should render company name and slots correctly', async () => {
	// First render component and get as fragment
	renderDateSelectPage();

	// wait for page load api data
	await waitFor(() => {
		// Get first company from mock dataset
		const firstCompany = MockTimeSlots[0] as unknown as APICompany;
		expect(screen.getByText(firstCompany.name)).toBeInTheDocument();
	});

	await waitFor(() => {
		const apiCompanyList = MockTimeSlots as unknown as Array<APICompany>;
		const timeSlotsCount = apiCompanyList.reduce((acc, curr) => {
			acc = acc + curr.time_slots.length;
			return acc;
		}, 0);
		const screenTimeSlots = screen.getAllByTestId('time-slot');
		expect(screenTimeSlots.length).toBe(timeSlotsCount);
	});
});

test('Time slot click action should add selected class', async () => {
	// First render component and get as fragment
	const { container } = renderDateSelectPage();

	// Wait until time slots elements appear at screen
	await screen.findAllByTestId('time-slot');

	// get all timeslots at screen
	const screenTimeSlots = screen.getAllByTestId('time-slot');

	// Click first time slot object
	fireEvent.click(screenTimeSlots[0]);

	// eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
	const selected = container.getElementsByClassName('selected');

	expect(selected.length).toBe(1);
});

test('Reservation clear button should remove selected class', async () => {
	// First render component and get as fragment
	const { container } = renderDateSelectPage();

	// Wait until time slots elements appear at screen
	await screen.findAllByTestId('time-slot');

	// get all timeslots at screen
	const screenTimeSlots = screen.getAllByTestId('time-slot');

	// Click first time slot object
	fireEvent.click(screenTimeSlots[0]);

	// eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
	const selected = container.getElementsByClassName('selected');

	// Wait until reservation clear elements appear at screen
	await screen.findAllByTestId('clear');

	// eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
	const clearButton = screen.getAllByTestId('clear');

	// Selected timeslot should appear at screen
	expect(selected.length).toBe(1);

	// Clear reservation button should appear at screen
	expect(clearButton.length).toBe(1);

	// Click clear reservation button
	fireEvent.click(clearButton[0]);

	// Check clear button disappear from screen
	await waitFor(() => {
		expect(clearButton[0]).not.toBeInTheDocument();
	});
});
