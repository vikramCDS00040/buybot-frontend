'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

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

interface ProductContextType {
  selectedProducts: Product[]
  searchResults: Product[]
  addToComparison: (product: Product) => void
  removeFromComparison: (productId: string) => void
  setSearchResults: (products: Product[]) => void
}

const ProductContext = createContext<ProductContextType | undefined>(undefined)

export function ProductProvider({ children }: { children: ReactNode }) {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])
  const [searchResults, setSearchResults] = useState<Product[]>([])

  const addToComparison = (product: Product) => {
    if (selectedProducts.length < 3 && !selectedProducts.find(p => p.id === product.id)) {
      setSelectedProducts([...selectedProducts, product])
    }
  }

  const removeFromComparison = (productId: string) => {
    setSelectedProducts(selectedProducts.filter(p => p.id !== productId))
  }

  return (
    <ProductContext.Provider value={{
      selectedProducts,
      searchResults,
      addToComparison,
      removeFromComparison,
      setSearchResults
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProduct = () => {
  const context = useContext(ProductContext)
  if (!context) throw new Error('useProduct must be used within ProductProvider')
  return context
}
