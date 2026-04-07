export const DATE_TIME_OPTIONS = {
	clock: {
		hour: '2-digit' as const,
		minute: '2-digit' as const,
		second: '2-digit' as const
	},
	date: {
		year: 'numeric' as const,
		month: 'long' as const,
		weekday: 'short' as const,
		day: 'numeric' as const
	}
}
