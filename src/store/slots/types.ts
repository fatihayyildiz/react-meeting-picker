// Type declarations of models
export type Company = {
	id: number
	name: string
	type: string
	time_slots: Array<TimeSlot>
}

export type TimeSlot = {
	start_time: Date
	end_time: Date
}

export type SlotsInitialState = {
	loading: boolean
	companies: Array<Company>
}