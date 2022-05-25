import { rest } from 'msw';
import TimeSlots from './time_slots.json';

export const handlers = [
	// Handles a GET /slots request
	rest.get('/api/slots', (req, res, ctx) => {
		return res(
			ctx.delay(1000),
			ctx.status(200),
			ctx.json(TimeSlots),
		);
	}),
];