'use client'
import { useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import { useProduct } from '@/contexts/ProductContext'

export default function SearchModule() {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const { setSearchResults } = useProduct()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.length > 2) {
        fetchSearchResults(query)
        fetchSuggestions(query)
      }
    }, 300)
    return () => clearTimeout(timer)
  }, [query])

  const fetchSearchResults = async (q: string) => {
    try {
      const res = await fetch(`/api/search?q=${q}`)
      const data = await res.json()
      setSearchResults(data.products || [])
    } catch (error) {
      console.error('Search failed:', error)
    }
  }

  const fetchSuggestions = (q: string) => {
    const mockSuggestions = [
      `${q} laptop`,
      `${q} smartphone`,
      `${q} headphones`
    ]
    setSuggestions(mockSuggestions)
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products..."
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
      {suggestions.length > 0 && query.length > 2 && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg mt-1 shadow-lg z-10">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => setQuery(suggestion)}
              className="w-full text-left px-4 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
