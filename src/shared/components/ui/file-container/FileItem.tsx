import { Download, Eye, FileUser } from 'lucide-react'
import styles from './FileItem.module.scss'

interface FileInfo {
	name: string
	url: string
	size?: string
	format?: string
}

interface FileItemProps {
	file: FileInfo
}

export const FileItem = ({ file }: FileItemProps) => {
	const metaData = [file.format, file.size].filter(Boolean).join(' · ')

	return (
		<div className={styles['file-item']}>
			<FileUser className={styles['file-item__icon']} aria-hidden />

			<span className={styles['file-item__name']}>{file.name}</span>

			{metaData && (
				<span className={styles['file-item__meta']}>[{metaData}]</span>
			)}

			<div className={styles['file-item__actions']}>
				<a
					className={styles['file-item__button']}
					href={file.url}
					target='_blank'
					rel='noopener noreferrer'
					aria-label={`View ${file.name}`}
				>
					<Eye size={24} aria-hidden />
				</a>

				<a
					className={styles['file-item__button']}
					href={file.url}
					download
					aria-label={`Download ${file.name}`}
				>
					<Download size={24} aria-hidden />
				</a>
			</div>
		</div>
	)
}
