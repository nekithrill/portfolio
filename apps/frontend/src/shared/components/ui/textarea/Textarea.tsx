import type { TextareaHTMLAttributes } from 'react'
import styles from './Textarea.module.scss'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string
	error?: string
}

export const Textarea = ({ label, error, id, ...props }: TextareaProps) => (
	<div className={styles['textarea']}>
		{label && (
			<label className={styles['textarea__label']} htmlFor={id}>
				{label}
			</label>
		)}
		<textarea className={styles['textarea__field']} id={id} {...props} />
		{error && <span className={styles['textarea__error']}>{error}</span>}
	</div>
)
