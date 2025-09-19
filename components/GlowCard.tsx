import { ReactNode } from 'react'

interface GlowCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

export default function GlowCard({ children, className = '', glowColor = 'primary' }: GlowCardProps) {
  const glowColors = {
    primary: 'shadow-primary/50 hover:shadow-primary/70',
    accent: 'shadow-accent-light/50 hover:shadow-accent-light/70',
    warning: 'shadow-warning-light/50 hover:shadow-warning-light/70'
  }

  return (
    <div className={`
      relative group cursor-pointer
      bg-gradient-to-br from-white via-gray-50 to-white 
      dark:from-neutral-dark dark:via-gray-800 dark:to-neutral-dark
      rounded-2xl p-6 border border-gray-200 dark:border-gray-700
      transition-all duration-500 hover:scale-105
      shadow-xl ${className}
    `}>
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10 animate-pulse"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  )
}
