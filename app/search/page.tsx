'use client'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Header from '@/components/Header'
import ProductTile from '@/components/ui/ProductTile'
import Button from '@/components/ui/Button'
import { Search, Filter } from 'lucide-react'

// Mock products data
const mockProducts = [
  {
    id: '1',
    name: 'MacBook Pro 14" M3',
    price: 1999,
    rating: 4.8,
    reviewCount: 1250,
    recommendationScore: 95,
    category: 'Laptops',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop'
  },
  {
    id: '2',
    name: 'iPhone 15 Pro',
    price: 999,
    rating: 4.7,
    reviewCount: 2100,
    recommendationScore: 92,
    category: 'Smartphones',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop'
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5',
    price: 399,
    rating: 4.9,
    reviewCount: 890,
    recommendationScore: 88,
    category: 'Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop'
  },
  {
    id: '4',
    name: 'Dell XPS 13',
    price: 1299,
    rating: 4.6,
    reviewCount: 756,
    recommendationScore: 85,
    category: 'Laptops',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop'
  }
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('recommendationScore')

  const { data: products = [] } = useQuery({
    queryKey: ['search-products', searchQuery],
    queryFn: async () => {
      // This will be replaced with actual API call
      if (!searchQuery) return mockProducts
      return mockProducts.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
  })

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'recommendationScore':
        return b.recommendationScore - a.recommendationScore
      case 'price':
        return a.price - b.price
      case 'rating':
        return b.rating - a.rating
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-neutral-light dark:bg-neutral-dark">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-light dark:text-text-dark mb-6">
            Product Search
          </h1>
          
          {/* Search Bar */}
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-neutral-dark text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <Button variant="primary" className="px-6">
              <Search className="w-4 h-4" />
            </Button>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4 mb-6">
            <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-neutral-dark text-text-light dark:text-text-dark"
            >
              <option value="recommendationScore">Best Recommendation Score</option>
              <option value="price">Price: Low to High</option>
              <option value="rating">Highest Rating</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            Found {sortedProducts.length} products
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <ProductTile key={product.id} product={product} />
          ))}
        </div>

        {sortedProducts.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No products found for "{searchQuery}"
            </p>
            <p className="text-gray-500 dark:text-gray-500 mt-2">
              Try searching with different keywords
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
