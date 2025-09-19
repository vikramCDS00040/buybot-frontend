import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Category3D from '@/components/Category3D'
import { Sparkles } from 'lucide-react'

export default function Categories() {
  const categories = [
    {
      name: 'Electronics',
      description: 'Laptops, computers, and tech gadgets',
      count: '15,000+ products',
      href: '/products?category=electronics',
      color: '#03A6A1'
    },
    {
      name: 'Smartphones',
      description: 'Latest phones and mobile devices',
      count: '5,000+ products',
      href: '/products?category=smartphones',
      color: '#FFA673'
    },
    {
      name: 'Audio',
      description: 'Headphones, speakers, and audio gear',
      count: '8,000+ products',
      href: '/products?category=audio',
      color: '#FF4F0F'
    },
    {
      name: 'Home & Garden',
      description: 'Furniture, appliances, and home decor',
      count: '20,000+ products',
      href: '/products?category=home',
      color: '#10B981'
    },
    {
      name: 'Gaming',
      description: 'Gaming consoles, accessories, and games',
      count: '12,000+ products',
      href: '/products?category=gaming',
      color: '#8B5CF6'
    },
    {
      name: 'Fashion',
      description: 'Clothing, shoes, and accessories',
      count: '25,000+ products',
      href: '/products?category=fashion',
      color: '#F59E0B'
    },
    {
      name: 'Automotive',
      description: 'Car accessories and automotive parts',
      count: '10,000+ products',
      href: '/products?category=automotive',
      color: '#EF4444'
    },
    {
      name: 'Books & Media',
      description: 'Books, movies, and educational content',
      count: '18,000+ products',
      href: '/products?category=books',
      color: '#6366F1'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-light via-gray-50 to-neutral-light dark:from-neutral-dark dark:via-gray-900 dark:to-neutral-dark">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Page Header with gradient */}
        <section className="text-center mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent-light/5 dark:from-primary/10 dark:to-accent-dark/10 rounded-3xl"></div>
          <div className="relative p-8">
            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Browse Categories
            </div>
            <h1 className="font-bold text-3xl md:text-5xl text-text-light dark:text-text-dark mb-6">Product Categories</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Browse products by category to find exactly what you're looking for
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group bg-white dark:bg-neutral-dark rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:scale-105 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex flex-col items-center text-center">
                <Category3D category={category.name} color={category.color} />
                <h3 className="font-bold text-lg mb-2 text-text-light dark:text-text-dark group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center text-sm mb-3">
                  {category.description}
                </p>
                <span className="text-primary text-sm font-medium bg-primary/10 px-3 py-1 rounded-full">
                  {category.count}
                </span>
              </div>
            </Link>
          ))}
        </section>

        {/* Popular Categories */}
        <section className="bg-white dark:bg-neutral-dark rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="font-bold text-2xl text-center mb-8 text-text-light dark:text-text-dark">Most Popular Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent-light/5 dark:from-primary/10 dark:to-accent-dark/10 rounded-xl">
              <div className="text-2xl font-bold text-primary mb-2">Electronics</div>
              <p className="text-gray-600 dark:text-gray-400">Most searched category with highest user engagement</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-accent-light/5 to-warning-light/5 dark:from-accent-dark/10 dark:to-warning-dark/10 rounded-xl">
              <div className="text-2xl font-bold text-accent-light dark:text-accent-dark mb-2">Home & Garden</div>
              <p className="text-gray-600 dark:text-gray-400">Fastest growing category with best sentiment scores</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-warning-light/5 to-primary/5 dark:from-warning-dark/10 dark:to-primary/10 rounded-xl">
              <div className="text-2xl font-bold text-warning-light dark:text-warning-dark mb-2">Fashion</div>
              <p className="text-gray-600 dark:text-gray-400">Largest product selection with daily new arrivals</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
