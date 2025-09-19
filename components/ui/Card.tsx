import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div className={`
      bg-white dark:bg-neutral-dark 
      border border-gray-200 dark:border-gray-700 
      rounded-lg shadow-sm 
      ${hover ? 'hover:shadow-md hover:scale-105 transition-all duration-200' : ''}
      ${className}
    `}>
      {children}
    </div>
  )
}
