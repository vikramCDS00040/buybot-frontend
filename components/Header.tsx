'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bot, Menu, X } from 'lucide-react'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/categories', label: 'Categories' },
    { href: '/about', label: 'About' }
  ]

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3">
            <Bot className="w-8 h-8 text-primary" />
            <span className="font-semibold text-xl text-primary">BuyBot</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <div
                key={item.href}
                className={`px-4 py-3 rounded-lg border-b-2 transition-all ${
                  pathname === item.href 
                    ? 'bg-gray-50 dark:bg-gray-700 border-transparent' 
                    : 'border-transparent hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <Link
                  href={item.href}
                  className={`font-medium transition-colors ${
                    pathname === item.href 
                      ? 'text-primary font-semibold' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
