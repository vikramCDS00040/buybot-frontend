const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

export interface Product {
  id: string
  name: string
  price: number
  rating: number
  reviewCount: number
  recommendationScore: number
  category: string
  image: string
  trending?: boolean
  liked?: boolean
}

export interface DashboardStats {
  totalProducts: number
  trendingProducts: Product[]
  mostLikedProducts: Product[]
  successRate: number
}

export const api = {
  // Dashboard
  getDashboardStats: async (): Promise<DashboardStats> => {
    const response = await fetch(`${API_BASE_URL}/dashboard/stats`)
    if (!response.ok) throw new Error('Failed to fetch dashboard stats')
    return response.json()
  },

  // Products
  searchProducts: async (query: string): Promise<Product[]> => {
    const response = await fetch(`${API_BASE_URL}/products/search?q=${encodeURIComponent(query)}`)
    if (!response.ok) throw new Error('Failed to search products')
    return response.json()
  },

  getAllProducts: async (): Promise<Product[]> => {
    const response = await fetch(`${API_BASE_URL}/products`)
    if (!response.ok) throw new Error('Failed to fetch products')
    return response.json()
  },

  getProductById: async (id: string): Promise<Product> => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`)
    if (!response.ok) throw new Error('Failed to fetch product')
    return response.json()
  },
}
