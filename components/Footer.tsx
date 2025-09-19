import Link from 'next/link'
import { Bot, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-text-light dark:bg-text-dark text-white dark:text-text-light mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Bot className="w-8 h-8 text-primary" />
              <span className="font-semibold text-xl">BuyBot</span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-4">
              AI-powered product discovery and recommendation platform with sentiment analysis.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-text-dark transition-colors">Home</Link>
              <Link href="/products" className="block text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-text-dark transition-colors">Products</Link>
              <Link href="/categories" className="block text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-text-dark transition-colors">Categories</Link>
              <Link href="/about" className="block text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-text-dark transition-colors">About</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <div className="space-y-2">
              <Link href="/categories/electronics" className="block text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-text-dark transition-colors">Electronics</Link>
              <Link href="/categories/clothing" className="block text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-text-dark transition-colors">Clothing</Link>
              <Link href="/categories/home" className="block text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-text-dark transition-colors">Home & Garden</Link>
              <Link href="/categories/sports" className="block text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-text-dark transition-colors">Sports</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span className="text-gray-300 dark:text-gray-400">support@buybot.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span className="text-gray-300 dark:text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span className="text-gray-300 dark:text-gray-400">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300 dark:text-gray-400">© 2024 BuyBot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
