import { DATE_TIME_OPTIONS } from '@/shared/types/time'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

export interface UseClockResult {
	time: string
	date: string
}

export const useClock = (): UseClockResult => {
	const { i18n } = useTranslation()
	const [now, setNow] = useState(() => new Date())
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

	const formatters = useMemo(
		() => ({
			time: new Intl.DateTimeFormat(i18n.language, DATE_TIME_OPTIONS.clock),
			date: new Intl.DateTimeFormat(i18n.language, DATE_TIME_OPTIONS.date)
		}),
		[i18n.language]
	)

	useEffect(() => {
		const msToNextSecond = 1000 - new Date().getMilliseconds()
		const timeoutId = setTimeout(() => {
			setNow(new Date())

			intervalRef.current = setInterval(() => {
				setNow(new Date())
			}, 1000)
		}, msToNextSecond)

		return () => {
			clearTimeout(timeoutId)
			if (intervalRef.current !== null) {
				clearInterval(intervalRef.current)
			}
		}
	}, [])

	return {
		time: formatters.time.format(now),
		date: formatters.date.format(now)
	}
}
