'use client'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface Product {
  id: string
  name: string
  price: number
  rating: number
  aiScore: number
  image: string
}

export default function RecommendationModule() {
  const [recommendations, setRecommendations] = useState<Product[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    // Mock recommendations
    setRecommendations([
      { id: '1', name: 'Recommended Laptop', price: 999, rating: 4.5, aiScore: 8.5, image: '/api/placeholder/200/200' },
      { id: '2', name: 'Top Smartphone', price: 799, rating: 4.7, aiScore: 9.2, image: '/api/placeholder/200/200' },
      { id: '3', name: 'Best Headphones', price: 299, rating: 4.3, aiScore: 8.8, image: '/api/placeholder/200/200' },
      { id: '4', name: 'Gaming Mouse', price: 89, rating: 4.6, aiScore: 8.1, image: '/api/placeholder/200/200' }
    ])
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, recommendations.length - 2))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, recommendations.length - 2)) % Math.max(1, recommendations.length - 2))
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
      <h2 className="font-heading text-2xl font-bold mb-6">Recommended for You</h2>
      
      <div className="relative">
        <div className="flex overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
          >
            {recommendations.map((product) => (
              <div key={product.id} className="w-1/3 flex-shrink-0 px-2">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="aspect-square bg-gray-200 rounded-lg mb-3 overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-3 h-3 fill-accent text-accent" />
                    <span className="text-xs">{product.rating}</span>
                    <span className="text-xs text-gray-500">AI: {product.aiScore}</span>
                  </div>
                  <div className="text-lg font-bold text-primary">${product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
