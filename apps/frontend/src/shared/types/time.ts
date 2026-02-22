export const DATE_TIME_OPTIONS = {
	clock: {
		hour: '2-digit' as const,
		minute: '2-digit' as const,
		second: '2-digit' as const
	},
	date: {
		weekday: 'short' as const,
		year: 'numeric' as const,
		month: 'long' as const,
		day: 'numeric' as const
	}
}
