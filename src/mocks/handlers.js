import { rest } from 'msw';
import TimeSlots from './resources/time_slots.json';

export const handlers = [
	// Handles a GET /slots request
	rest.get('http://localhost:3000/api/slots', (req, res, ctx) => {
		return res(ctx.delay(100), ctx.status(200), ctx.json(TimeSlots));
	}),
];
