'use client'
import { useState } from 'react'
import { ArrowUpDown } from 'lucide-react'
import ProductCard from './ProductCard'

interface Product {
  id: string
  name: string
  price: number
  rating: number
  reviewCount: number
  sentimentScore: number
  rank: number
  image: string
  category: string
}

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [sortBy, setSortBy] = useState('rank')
  
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'rating': return b.rating - a.rating
      case 'sentiment': return b.sentimentScore - a.sentimentScore
      case 'popularity': return b.reviewCount - a.reviewCount
      case 'price-low': return a.price - b.price
      case 'price-high': return b.price - a.price
      default: return a.rank - b.rank
    }
  })

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold text-lg md:text-xl">
          {products.length} Products Found
        </h2>
        <div className="flex items-center gap-2">
          <ArrowUpDown className="w-4 h-4" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 border border-gray-200 rounded-lg bg-card-bg"
          >
            <option value="rank">Best Ranked</option>
            <option value="rating">Highest Rated</option>
            <option value="sentiment">Best Sentiment</option>
            <option value="popularity">Most Popular</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  )
}
