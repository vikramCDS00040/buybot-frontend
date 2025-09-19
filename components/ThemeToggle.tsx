'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    console.log('Current theme:', theme)
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    console.log('Setting theme to:', newTheme)
    setTheme(newTheme)
  }

  if (!mounted) {
    return (
      <button className="p-3 rounded-xl bg-primary text-white">
        <Moon className="w-5 h-5" />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors"
      title="Toggle Theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  )
}
