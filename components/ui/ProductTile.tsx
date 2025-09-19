import { Star, TrendingUp, Heart } from 'lucide-react'
import Card from './Card'
import Button from './Button'
import { Product } from '@/lib/api'

interface ProductTileProps {
  product: Product
}

export default function ProductTile({ product }: ProductTileProps) {
  return (
    <Card hover className="p-4">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        {product.trending && (
          <div className="absolute top-2 left-2 bg-warning-light dark:bg-warning-dark text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            Trending
          </div>
        )}
        {product.liked && (
          <div className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full">
            <Heart className="w-4 h-4 fill-current" />
          </div>
        )}
      </div>

      <h3 className="font-semibold text-lg mb-2 text-text-light dark:text-text-dark line-clamp-2">
        {product.name}
      </h3>
      
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center">
          <Star className="w-4 h-4 fill-accent-light text-accent-light dark:fill-accent-dark dark:text-accent-dark" />
          <span className="ml-1 text-sm">{product.rating}</span>
        </div>
        <span className="text-gray-500 text-sm">({product.reviewCount})</span>
        <div className="ml-auto bg-primary text-white px-2 py-1 rounded text-xs font-medium">
          Score: {product.recommendationScore}
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <span className="text-xl font-bold text-primary">${product.price}</span>
        <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
          {product.category}
        </span>
      </div>

      <Button variant="primary" className="w-full">
        View Details
      </Button>
    </Card>
  )
}
