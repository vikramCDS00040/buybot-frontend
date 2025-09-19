'use client'
import { Star, TrendingUp, Award, ShoppingCart } from 'lucide-react'
import { useState } from 'react'

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

interface ProductCardProps {
  product: Product
  index: number
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const isTopThree = index < 3
  const rankColors = ['bg-yellow-500', 'bg-gray-400', 'bg-amber-600']

  return (
    <div 
      className={`flex flex-col items-center p-4 rounded-2xl shadow-card hover:scale-105 transition-transform duration-300 ${
        isTopThree ? 'bg-highlight-bg border border-blue-300' : 'bg-card-bg'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
        {isTopThree && (
          <div className={`absolute top-3 left-3 ${rankColors[index]} text-white px-3 py-1 rounded-full flex items-center gap-1 font-bold text-sm`}>
            <Award className="w-4 h-4" />
            #{index + 1}
          </div>
        )}
        <div className="absolute top-3 right-3 bg-primary text-white px-2 py-1 rounded-lg text-sm font-medium">
          #{product.rank}
        </div>
      </div>

      <h3 className="font-semibold text-lg md:text-xl text-center mb-2 line-clamp-2">
        {product.name}
      </h3>
      
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center">
          <Star className="w-4 h-4 fill-secondary text-secondary" />
          <span className="ml-1 font-medium">{product.rating}</span>
        </div>
        <span className="text-gray-500 text-sm">({product.reviewCount})</span>
        <div className="flex items-center ml-2">
          <TrendingUp className="w-4 h-4 text-primary" />
          <span className="ml-1 text-sm font-medium">{product.sentimentScore}%</span>
        </div>
      </div>

      <div className="w-full flex items-center justify-between mb-4">
        <span className="font-bold text-md text-gray-800">${product.price}</span>
        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
          {product.category}
        </span>
      </div>

      {(isHovered || isTopThree) && (
        <button className="w-full rounded-xl px-4 py-2 bg-primary text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      )}
    </div>
  )
}
