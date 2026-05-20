import { useTranslation } from 'react-i18next'
import styles from './Header.module.scss'

const STATUS_KEYS = {
	open: 'sections.bio.data.statusOpen',
	busy: 'sections.bio.data.statusBusy'
}

const STATUS: 'open' | 'busy' = 'open'

export const Header = () => {
	const { t } = useTranslation()

	return (
		<header className={styles['header']}>
			<div>
				<h1 className={styles['header__name']}>
					{t('sections.bio.data.name')}
				</h1>
				<p className={styles['header__role']}>{t('sections.bio.data.role')}</p>

				<div className={styles['status']} data-status={STATUS}>
					<span className={styles['status__dot']} />
					<span className={styles['status__label']}>
						{t(STATUS_KEYS[STATUS])}
					</span>
				</div>
			</div>
		</header>
	)
}
