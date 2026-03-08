import type { InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
	error?: string
}

export const Input = ({ label, error, id, ...props }: InputProps) => (
	<div className={styles['input']}>
		{label && (
			<label className={styles['input__label']} htmlFor={id}>
				{label}
			</label>
		)}
		<input className={styles['input__field']} id={id} {...props} />
		{error && <span className={styles['input__error']}>{error}</span>}
	</div>
)
