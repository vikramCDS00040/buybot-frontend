'use client'
import { Crown, Medal, Award, Star, TrendingUp, CheckCircle, XCircle } from 'lucide-react'

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

interface RankedProductDisplayProps {
  products: Product[]
}

export default function RankedProductDisplay({ products }: RankedProductDisplayProps) {
  const sortedProducts = [...products].sort((a, b) => a.rank - b.rank)
  const topThree = sortedProducts.slice(0, 3)
  const remaining = sortedProducts.slice(3)

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-8 h-8 text-yellow-500" />
      case 2: return <Medal className="w-8 h-8 text-gray-400" />
      case 3: return <Award className="w-8 h-8 text-amber-600" />
      default: return <span className="text-2xl font-bold text-primary">#{rank}</span>
    }
  }

  const getProductInsights = (product: Product, allProducts: Product[]) => {
    const avgPrice = allProducts.reduce((sum, p) => sum + p.price, 0) / allProducts.length
    const avgRating = allProducts.reduce((sum, p) => sum + p.rating, 0) / allProducts.length
    const avgSentiment = allProducts.reduce((sum, p) => sum + p.sentimentScore, 0) / allProducts.length

    const pros = []
    const cons = []

    if (product.rating > avgRating) pros.push(`${product.rating}★ rating (above average)`)
    else cons.push(`${product.rating}★ rating (below average)`)

    if (product.price < avgPrice) pros.push(`$${product.price} (great value)`)
    else cons.push(`$${product.price} (premium pricing)`)

    if (product.sentimentScore > avgSentiment) pros.push(`${product.sentimentScore}% positive sentiment`)
    else cons.push(`${product.sentimentScore}% sentiment score`)

    if (product.reviewCount > 1000) pros.push(`${product.reviewCount.toLocaleString()} reviews`)
    else cons.push(`Limited reviews (${product.reviewCount})`)

    return { pros, cons }
  }

  return (
    <div className="space-y-8">
      {/* Top 3 Podium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topThree.map((product) => {
          const insights = getProductInsights(product, products)
          return (
            <div
              key={product.id}
              className={`relative bg-white dark:bg-neutral-dark rounded-2xl shadow-xl border-2 transition-all duration-300 hover:scale-105 ${
                product.rank === 1 
                  ? 'border-yellow-400 shadow-yellow-400/20 md:scale-110' 
                  : product.rank === 2 
                  ? 'border-gray-400 shadow-gray-400/20 md:scale-105' 
                  : 'border-amber-600 shadow-amber-600/20'
              }`}
            >
              {/* Rank Badge */}
              <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 p-3 rounded-full ${
                product.rank === 1 ? 'bg-yellow-400' : product.rank === 2 ? 'bg-gray-400' : 'bg-amber-600'
              }`}>
                {getRankIcon(product.rank)}
              </div>

              <div className="p-6 pt-12">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                
                <h3 className="font-bold text-xl mb-2 text-text-light dark:text-text-dark">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">${product.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="font-semibold">{product.rating}</span>
                  </div>
                </div>

                {/* Why it's ranked here */}
                <div className="mb-4 p-3 bg-gradient-to-r from-primary/10 to-accent-light/10 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Why #{product.rank}?
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {product.rank === 1 && "Best overall combination of rating, sentiment, and value"}
                    {product.rank === 2 && "Strong performance with excellent user feedback"}
                    {product.rank === 3 && "Great alternative with solid reviews and features"}
                  </p>
                </div>

                {/* Pros */}
                <div className="mb-3">
                  <h5 className="font-semibold text-sm text-green-600 mb-2">Pros:</h5>
                  {insights.pros.slice(0, 2).map((pro, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {pro}
                    </div>
                  ))}
                </div>

                {/* Cons */}
                <div>
                  <h5 className="font-semibold text-sm text-red-600 mb-2">Cons:</h5>
                  {insights.cons.slice(0, 1).map((con, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <XCircle className="w-4 h-4 text-red-500" />
                      {con}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Remaining Products */}
      {remaining.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-text-light dark:text-text-dark">Other Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remaining.map((product) => {
              const insights = getProductInsights(product, products)
              return (
                <div
                  key={product.id}
                  className="bg-white dark:bg-neutral-dark rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">#{product.rank}</span>
                    </div>
                    <h3 className="font-semibold text-lg text-text-light dark:text-text-dark">
                      {product.name}
                    </h3>
                  </div>
                  
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-bold text-primary">${product.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{product.rating}</span>
                    </div>
                  </div>

                  <div className="text-sm">
                    <div className="flex items-center gap-2 text-green-600 mb-1">
                      <CheckCircle className="w-3 h-3" />
                      {insights.pros[0]}
                    </div>
                    <div className="flex items-center gap-2 text-red-600">
                      <XCircle className="w-3 h-3" />
                      {insights.cons[0]}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
