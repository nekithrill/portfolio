import type { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	loading?: boolean
}

export const Button = ({
	children,
	loading,
	disabled,
	...props
}: ButtonProps) => (
	<button
		className={styles['button']}
		disabled={disabled || loading}
		{...props}
	>
		{loading ? 'Loading...' : children}
	</button>
)
