'use client'
import { useState } from 'react'
import { Star, Plus } from 'lucide-react'
import { useProduct } from '@/contexts/ProductContext'

interface Product {
  id: string
  name: string
  price: number
  rating: number
  reviewCount: number
  aiScore: number
  image: string
  category: string
}

export default function ProductListModule() {
  const { searchResults, addToComparison } = useProduct()
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {searchResults.map((product) => (
        <div
          key={product.id}
          className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4"
          onMouseEnter={() => setHoveredProduct(product.id)}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          <div className="aspect-square bg-gray-200 rounded-lg mb-4 relative overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-sm font-medium">
              AI: {product.aiScore}/10
            </div>
          </div>
          
          <h3 className="font-heading font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
          
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="ml-1 text-sm">{product.rating}</span>
            </div>
            <span className="text-gray-500 text-sm">({product.reviewCount})</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-primary">${product.price}</span>
            <button
              onClick={() => addToComparison(product)}
              className="bg-secondary text-white p-2 rounded-lg hover:bg-secondary/90 transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {hoveredProduct === product.id && (
            <div className="absolute inset-0 bg-black/80 rounded-lg flex items-center justify-center text-white p-4">
              <div className="text-center">
                <h4 className="font-semibold mb-2">Quick View</h4>
                <p className="text-sm mb-2">Category: {product.category}</p>
                <p className="text-sm">AI Score: {product.aiScore}/10</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
