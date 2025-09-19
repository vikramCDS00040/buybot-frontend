'use client'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SearchBar from '@/components/SearchBar'
import ProductGrid from '@/components/ProductGrid'
import RecommendationCarousel from '@/components/RecommendationCarousel'
import ReviewInsights from '@/components/ReviewInsights'
import Product3D from '@/components/Product3D'
import GlowCard from '@/components/GlowCard'
import { Bot, TrendingUp, Users, Award, Zap, Star, Sparkles } from 'lucide-react'

// Mock trending products
const trendingProducts = [
  {
    id: '1',
    name: 'MacBook Pro 14" M3',
    price: 1999,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
    trending: true
  },
  {
    id: '2',
    name: 'iPhone 15 Pro Max',
    price: 1199,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    trending: true
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5',
    price: 399,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    trending: true
  }
]

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({})
  const [shouldSearch, setShouldSearch] = useState(false)

  const { data: products = [] } = useQuery({
    queryKey: ['products', searchQuery, filters],
    queryFn: async () => {
      if (!searchQuery) return []
      const res = await fetch(`/api/search?q=${searchQuery}`)
      const data = await res.json()
      return data.products || []
    },
    enabled: shouldSearch && !!searchQuery
  })

  const { data: recommendations = [] } = useQuery({
    queryKey: ['recommendations'],
    queryFn: async () => {
      const res = await fetch('/api/recommendations')
      const data = await res.json()
      return data.products || []
    }
  })

  const sentimentData = [
    { name: 'Positive', value: 65 },
    { name: 'Neutral', value: 25 },
    { name: 'Negative', value: 10 }
  ]

  const keywords = [
    { text: 'quality', size: 20 },
    { text: 'fast', size: 16 },
    { text: 'durable', size: 18 },
    { text: 'value', size: 14 },
    { text: 'excellent', size: 22 }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section with Gradient Background */}
        <section className="relative py-20 overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent-light/5 to-warning-light/10 dark:from-primary/20 dark:via-accent-dark/10 dark:to-warning-dark/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(3,166,161,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(3,166,161,0.2),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,166,115,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(255,138,76,0.2),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent-light text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Sparkles className="w-4 h-4" />
                AI-Powered Discovery
              </div>
              
              <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl mb-6">
                <span className="bg-gradient-to-r from-primary via-accent-light to-warning-light bg-clip-text text-transparent">
                  Discover Products
                </span>
                <br />
                <span className="text-text-light dark:text-text-dark">
                  with AI Insights
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                Find the best products ranked by sentiment analysis and user reviews with our advanced AI technology
              </p>
            </div>
            
            <SearchBar 
              onSearch={(query, filters) => {
                setSearchQuery(query)
                setFilters(filters)
                setShouldSearch(true)
              }} 
              hasResults={products.length > 0}
            />
          </div>
        </section>

        {/* 3D Trending Products Section */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-warning-light to-accent-light text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                <TrendingUp className="w-4 h-4" />
                Trending Now
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-text-dark mb-4">
                Most Popular Products
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Discover what's trending across the internet right now
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trendingProducts.map((product) => (
                <Product3D key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-light/30 to-accent-light/20 dark:from-secondary-dark/50 dark:to-accent-dark/30"></div>
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <GlowCard glowColor="primary">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-text-light dark:text-text-dark">AI-Powered Rankings</h3>
                  <p className="text-gray-600 dark:text-gray-400">Advanced sentiment analysis for accurate product rankings</p>
                </div>
              </GlowCard>
              
              <GlowCard glowColor="accent">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-light to-warning-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-text-light dark:text-text-dark">Real User Reviews</h3>
                  <p className="text-gray-600 dark:text-gray-400">Millions of verified reviews analyzed in real-time</p>
                </div>
              </GlowCard>
              
              <GlowCard glowColor="warning">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-warning-light to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-text-light dark:text-text-dark">Top Recommendations</h3>
                  <p className="text-gray-600 dark:text-gray-400">Personalized suggestions based on your preferences</p>
                </div>
              </GlowCard>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-16">
          {products.length > 0 && (
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent-light/5 rounded-3xl"></div>
              <div className="relative p-8">
                <ProductGrid products={products} />
              </div>
            </div>
          )}
          
          {recommendations.length > 0 && (
            <RecommendationCarousel products={recommendations} />
          )}
          
          {products.length > 0 && (
            <ReviewInsights sentimentData={sentimentData} keywords={keywords} />
          )}
          
          {!searchQuery && (
            <div className="text-center py-20">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent-light rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <Bot className="relative w-20 h-20 text-primary mx-auto mb-6" />
              </div>
              <h2 className="font-bold text-2xl md:text-3xl mb-4 text-text-light dark:text-text-dark">
                Start Your Product Discovery Journey
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                Search for any product to see AI-powered rankings, sentiment analysis, and personalized recommendations
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
