import { Download, Eye, File } from 'lucide-react'
import styles from './FileContainer.module.scss'

interface FileInfo {
	name: string
	url: string
	size?: string
	format?: string
}

interface FileContainerProps {
	file: FileInfo
}

export const FileContainer = ({ file }: FileContainerProps) => {
	return (
		<div className={styles['file-container']}>
			<File className={styles['file-container__icon']} aria-hidden />
			<div className={styles['file-container__info']}>
				<span className={styles['file-container__name']}>{file.name}</span>
				{(file.format || file.size) && (
					<span className={styles['file-container__meta']}>
						({[file.format, file.size].filter(Boolean).join(' · ')})
					</span>
				)}
			</div>
			<div className={styles['file-container__actions']}>
				<a
					className={styles['file-container__button']}
					href={file.url}
					target='_blank'
					rel='noopener noreferrer'
					aria-label={`View ${file.name}`}
				>
					<Eye aria-hidden />
				</a>

				<a
					className={styles['file-container__button']}
					href={file.url}
					download
					aria-label={`Download ${file.name}`}
				>
					<Download aria-hidden />
				</a>
			</div>
		</div>
	)
}
