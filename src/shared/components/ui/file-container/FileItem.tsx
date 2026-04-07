// REVIEW: Пересмотреть и принять решение, как именно его закончить

import { Download, Eye, File } from 'lucide-react'
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
	return (
		<div className={styles['file-item']}>
			<File className={styles['file-item__icon']} aria-hidden />
			<div className={styles['file-item__info']}>
				<span className={styles['file-item__name']}>{file.name}</span>
				{(file.format || file.size) && (
					<span className={styles['file-item__meta']}>
						({[file.format, file.size].filter(Boolean).join(' · ')})
					</span>
				)}
			</div>
			<div className={styles['file-item__actions']}>
				<a
					className={styles['file-item__button']}
					href={file.url}
					target='_blank'
					rel='noopener noreferrer'
					aria-label={`View ${file.name}`}
				>
					<Eye aria-hidden />
				</a>

				<a
					className={styles['file-item__button']}
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
