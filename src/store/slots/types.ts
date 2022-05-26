// Type declarations of API model
export type APICompany = {
	id: number
	name: string
	type: string
	time_slots: Array<TimeSlot>
}

export type CompanySlots = {
	id: number
	name: string
	days: Array<DaySlots>
}

export type DaySlots = {
	day: string
	slots: Array<TimeSlot>
}

export type TimeSlot = {
	day:string
	start_time: string
	end_time: string
}

export type CompanySelectedSlot = {
	id: number
	selectedSlot: TimeSlot
}

export type SlotsInitialState = {
	loading: boolean
	companies: Array<CompanySlots>,
	selectedCompanySlots: Array<CompanySelectedSlot>
}