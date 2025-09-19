'use client'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SearchBar from '@/components/SearchBar'
import RankedProductDisplay from '@/components/RankedProductDisplay'
import { Filter, Sparkles } from 'lucide-react'

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('laptop') // Default search
  const [filters, setFilters] = useState({})

  const { data: products = [] } = useQuery({
    queryKey: ['products', searchQuery, filters],
    queryFn: async () => {
      const res = await fetch(`/api/search?q=${searchQuery}`)
      const data = await res.json()
      return data.products || []
    }
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-light via-gray-50 to-neutral-light dark:from-neutral-dark dark:via-gray-900 dark:to-neutral-dark">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Header with gradient */}
        <section className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent-light/5 dark:from-primary/10 dark:to-accent-dark/10 rounded-3xl"></div>
          <div className="relative p-8">
            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Product Discovery
            </div>
            <h1 className="font-bold text-3xl md:text-4xl text-text-light dark:text-text-dark mb-4">All Products</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
              Discover and compare products with AI-powered insights and rankings
            </p>
            <SearchBar 
              onSearch={(query, filters) => {
                setSearchQuery(query)
                setFilters(filters)
              }} 
              hasResults={products.length > 0}
            />
          </div>
        </section>

        {/* Quick Filters */}
        <section className="bg-white dark:bg-neutral-dark rounded-2xl shadow-lg p-6 mb-8 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="w-5 h-5 text-primary" />
            <h2 className="font-semibold text-lg text-text-light dark:text-text-dark">Quick Filters</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {['Electronics', 'Laptops', 'Smartphones', 'Headphones', 'Gaming', 'Home'].map((category) => (
              <button
                key={category}
                onClick={() => setSearchQuery(category.toLowerCase())}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark rounded-xl hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Products Display */}
        {products.length > 0 ? (
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent-light/5 dark:from-primary/10 dark:to-accent-dark/10 rounded-3xl"></div>
            <div className="relative p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-2">
                  AI-Ranked Results for "{searchQuery}"
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Products ranked by sentiment analysis, reviews, and overall value
                </p>
              </div>
              <RankedProductDisplay products={products} />
            </div>
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-neutral-dark rounded-2xl shadow-lg">
            <p className="text-gray-600 dark:text-gray-400 text-lg">No products found. Try a different search term.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
