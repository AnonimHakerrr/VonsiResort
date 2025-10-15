import React from 'react'
import { cn } from '../lib/utils' // імпорт твоєї функції cn

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	// порожній об’єкт ESLint вважає помилкою, тож можна додати optional проп
	_?: never
}

interface CardSlotProps extends React.HTMLAttributes<HTMLDivElement> {
	_?: never
}

export function Card({ className, ...props }: CardProps) {
	return (
		<div
			data-slot='card'
			className={cn(
				'bg-white text-black flex flex-col gap-6 rounded-xl border py-6 shadow-sm',
				className
			)}
			{...props}
		/>
	)
}

export function CardHeader({ className, ...props }: CardSlotProps) {
	return (
		<div
			data-slot='card-header'
			className={cn(
				'grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6',
				className
			)}
			{...props}
		/>
	)
}

export function CardTitle({ className, ...props }: CardSlotProps) {
	return (
		<div
			data-slot='card-title'
			className={cn('leading-none font-semibold', className)}
			{...props}
		/>
	)
}
