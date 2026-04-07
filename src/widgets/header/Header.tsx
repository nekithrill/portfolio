import { useTranslation } from 'react-i18next'
import styles from './Header.module.scss'
import { headerData } from './HeaderData'

const STATUS_CONFIG = {
	open: {
		key: 'sections.bio.data.statusOpen',
		color: 'var(--clr-success-text)'
	},
	busy: {
		key: 'sections.bio.data.statusBusy',
		color: 'var(--clr-danger-text)'
	}
}

const { key, color } = STATUS_CONFIG[headerData.status]

export const Header = () => {
	const { t } = useTranslation()

	return (
		<header className={styles['header']}>
			<div>
				<h1 className={styles['header__name']}>
					{t('sections.bio.data.name')}
				</h1>
				<p className={styles['header__role']}>{t('sections.bio.data.role')}</p>
				<div className={styles['status']}>
					<span
						className={styles['status__dot']}
						style={{ background: color }}
					/>
					<span className={styles['status__label']} style={{ color }}>
						{t(key)}
					</span>
				</div>
			</div>
		</header>
	)
}
