import { rest } from 'msw';
import TimeSlots from './time_slots.json';

export const handlers = [
	// Handles a GET /slots request
	rest.get('/slots', (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json(TimeSlots),
		);
	}),
];