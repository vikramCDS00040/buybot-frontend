'use client'
import { useState } from 'react'
import { Star, TrendingUp, ShoppingCart } from 'lucide-react'

interface Product3DProps {
  product: {
    id: string
    name: string
    price: number
    rating: number
    image: string
    trending?: boolean
  }
}

export default function Product3D({ product }: Product3DProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle glow effect */}
      <div className={`
        absolute inset-0 rounded-2xl transition-all duration-700
        ${isHovered 
          ? 'bg-gradient-to-br from-primary/20 via-accent-light/10 to-primary/20 blur-xl scale-110 opacity-60' 
          : 'opacity-0'
        }
      `}></div>
      
      <div className={`
        relative group cursor-pointer
        bg-gradient-to-br from-white via-gray-50 to-white 
        dark:from-neutral-dark dark:via-gray-800 dark:to-neutral-dark
        rounded-2xl p-6 border border-gray-200 dark:border-gray-700
        transition-all duration-500
        shadow-xl
        ${isHovered 
          ? 'scale-105 shadow-2xl shadow-primary/10 border-primary/10 -translate-y-1' 
          : 'hover:scale-105'
        }
      `}>
        
        {/* Trending badge */}
        {product.trending && (
          <div className="absolute -top-2 -right-2 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 animate-bounce">
            <TrendingUp className="w-3 h-3" />
            TRENDING
          </div>
        )}

        {/* Product image with slide effect */}
        <div className="relative mb-4 overflow-hidden rounded-xl">
          <img 
            src={product.image} 
            alt={product.name}
            className={`w-full h-48 object-cover transition-all duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-opacity duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}></div>
          
          {/* Overlay content on hover */}
          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center bg-primary/90 transition-all duration-300">
              <button className="bg-white text-primary px-4 py-2 rounded-lg font-medium flex items-center gap-2 transform scale-110 hover:scale-125 transition-transform">
                <ShoppingCart className="w-4 h-4" />
                Quick View
              </button>
            </div>
          )}
        </div>

        {/* Product info */}
        <div className="space-y-3">
          <h3 className="font-bold text-lg text-text-light dark:text-text-dark line-clamp-2">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-accent-light text-accent-light" />
              <span className="ml-1 font-medium">{product.rating}</span>
            </div>
          </div>

          <div className="text-2xl font-bold text-primary">
            ${product.price}
          </div>
        </div>

        {/* Subtle accent dots */}
        <div className={`absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full transition-all duration-500 ${
          isHovered ? 'scale-150 bg-primary/60' : ''
        }`}></div>
        <div className={`absolute bottom-4 left-4 w-1 h-1 bg-accent-light/40 rounded-full transition-all duration-700 ${
          isHovered ? 'scale-200 bg-accent-light/80' : ''
        }`}></div>
      </div>
    </div>
  )
}
