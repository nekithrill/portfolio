import styles from './Clock.module.scss'
import { useClock } from './useClock'

export const Clock = () => {
	const { time, date } = useClock()

	return (
		<div className={styles['clock']}>
			<div className={styles['clock__time']}>{time}</div>
			<div className={styles['clock__date']}>{date}</div>
		</div>
	)
}
