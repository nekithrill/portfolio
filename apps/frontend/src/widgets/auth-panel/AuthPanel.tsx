import { Avatar } from '@/shared/components/ui/avatar/Avatar'
import { CircleUserRound, LogIn, LogOut, UserRoundPlus } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import styles from './AuthPanel.module.scss'

// Заглушка до реализации auth
const useAuth = () => ({
	isAuthenticated: false,
	user: null as null | { username: string; avatar?: string }
})

export const AuthPanel = () => {
	const { t } = useTranslation()
	const { isAuthenticated, user } = useAuth()

	if (isAuthenticated && user) {
		return (
			<div className={styles['auth-panel']}>
				<div className={styles['auth-panel__user']}>
					<Avatar src={user.avatar} alt={user.username} size='sm' />
					<span className={styles['auth-panel__username']}>
						{user.username}
					</span>
				</div>
				<div className={styles['auth-panel__actions']}>
					<Link to='/profile' className={styles['auth-panel__btn']}>
						<CircleUserRound />
						{t('auth.profile')}
					</Link>
					<Link to='/auth/logout' className={styles['auth-panel__btn']}>
						<LogOut />
						{t('auth.logout')}
					</Link>
				</div>
			</div>
		)
	}

	return (
		<div className={styles['auth-panel']}>
			<Link to='/auth/login' className={styles['auth-panel__btn']}>
				<LogIn />
				{t('auth.login')}
			</Link>
			<Link to='/auth/register' className={styles['auth-panel__btn']}>
				<UserRoundPlus />
				{t('auth.register')}
			</Link>
		</div>
	)
}
