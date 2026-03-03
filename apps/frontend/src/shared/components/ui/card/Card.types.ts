import React from 'react'

export interface CardProps {
	header?: React.ReactNode
	footer?: React.ReactNode
	children: React.ReactNode
	className?: string
}
