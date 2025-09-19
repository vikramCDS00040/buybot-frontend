'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Info, Star } from 'lucide-react'

interface Product {
  id: string
  name: string
  price: number
  rating: number
  image: string
  reason: string
}

interface RecommendationCarouselProps {
  products: Product[]
}

export default function RecommendationCarousel({ products }: RecommendationCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showTooltip, setShowTooltip] = useState<string | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, products.length - 3))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, products.length - 3)) % Math.max(1, products.length - 3))
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Recommended for You</h2>
      
      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="w-1/4 flex-shrink-0 px-2">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 relative">
                  <button
                    className="absolute top-2 right-2 text-gray-400 hover:text-primary"
                    onMouseEnter={() => setShowTooltip(product.id)}
                    onMouseLeave={() => setShowTooltip(null)}
                  >
                    <Info className="w-4 h-4" />
                  </button>
                  
                  {showTooltip === product.id && (
                    <div className="absolute top-8 right-2 bg-black text-white text-xs p-2 rounded z-10 w-48">
                      {product.reason}
                    </div>
                  )}
                  
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-32 object-cover rounded mb-3"
                  />
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-3 h-3 fill-accent text-accent" />
                    <span className="text-xs">{product.rating}</span>
                  </div>
                  <div className="text-lg font-bold text-primary">${product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 shadow-lg rounded-full p-2 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 shadow-lg rounded-full p-2 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
