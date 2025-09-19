'use client'
import { useState, useEffect } from 'react'
import { Search, Filter, X, Sparkles, Brain, Zap } from 'lucide-react'

interface SearchBarProps {
  onSearch: (query: string, filters: any) => void
  hasResults?: boolean
}

export default function SearchBar({ onSearch, hasResults = false }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isFocused, setIsFocused] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [isAIProcessing, setIsAIProcessing] = useState(false)
  const [filters, setFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
    minRating: ''
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.length > 2) {
        setIsAIProcessing(true)
        setSuggestions([
          `${query} laptop`,
          `${query} reviews`,
          `${query} best deals`,
        ])

        setTimeout(() => {
          setIsAIProcessing(false)
        }, 1500)
      } else {
        setSuggestions([])
        setIsAIProcessing(false)
      }
    }, 300)
    return () => clearTimeout(timer)
  }, [query])

  const handleSearch = () => {
    setIsSearching(true)
    setIsAIProcessing(true)
    setTimeout(() => {
      setIsSearching(false)
      setIsAIProcessing(false)
    }, 2000)
    onSearch(query, filters)
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative">
        <div className="flex gap-4">
          {/* AI-powered search input with glowing effects */}
          <div className="relative flex-1 group">
            {/* Focus Glow Effect */}
            <div className={`
              absolute inset-0 rounded-2xl transition-all duration-100 blur-sm
              ${isFocused && !isAIProcessing && !hasResults
                ? 'bg-gradient-to-r from-primary/30 via-accent-light/30 to-primary/30 opacity-100 scale-105'
                : 'opacity-0 scale-100'
              }
            `}></div>

            {/* Results Found Glow Effect */}
            <div className={`
              absolute inset-0 rounded-2xl transition-all duration-200
              ${hasResults && query.length > 0 && !isAIProcessing
                ? 'bg-gradient-to-r from-green-400/40 via-primary/40 to-green-400/40 opacity-100 blur-md scale-110 animate-pulse'
                : 'opacity-0'
              }
            `}></div>

            {/* AI Processing Glow Effect */}
            <div className={`
              absolute inset-0 rounded-2xl transition-all duration-200
              ${isAIProcessing
                ? 'bg-gradient-to-r from-primary/40 via-accent-light/40 to-primary/40 opacity-100 blur-md scale-105 animate-pulse'
                : 'opacity-0 scale-100'
              }
            `}></div>

            {/* Outer glow ring for AI processing */}
            <div className={`
              absolute inset-0 rounded-2xl transition-all duration-500
              ${isAIProcessing
                ? 'bg-gradient-to-r from-primary/20 via-accent-light/20 to-primary/20 blur-xl scale-110 animate-ping'
                : 'opacity-0'
              }
            `}></div>

            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6 z-10" />

              {/* AI Brain Icon - shows when processing */}
              <Brain className={`absolute left-12 top-1/2 transform -translate-y-1/2 w-5 h-5 z-10 transition-all duration-500 ${isAIProcessing ? 'text-primary animate-pulse opacity-100' : 'opacity-0'
                }`} />

              <Sparkles className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 z-10 transition-all duration-500 ${isFocused || isAIProcessing ? 'text-primary animate-spin' : hasResults ? 'text-green-500 animate-pulse' : 'text-gray-300'
                }`} />

              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder={isAIProcessing ? "AI is analyzing..." : "Search for trending products..."}
                className={`
                  w-full py-4 text-lg rounded-2xl backdrop-blur-sm
                  border-2 transition-all duration-200
                  text-text-light dark:text-text-dark
                  focus:outline-none focus:ring-0
                  ${isAIProcessing
                    ? 'pl-20 pr-12 bg-white/95 dark:bg-neutral-dark/95 border-primary focus:shadow-[0_0_12px_#03A6A1]'
                    : hasResults && query.length > 0
                      ? 'pl-12 pr-12 bg-white/95 dark:bg-neutral-dark/95 border-green-400 focus:shadow-[0_0_12px_#10b981]'
                      : isFocused
                        ? 'pl-12 pr-12 bg-white/95 dark:bg-neutral-dark/95 border-primary focus:shadow-[0_0_12px_#03A6A1]'
                        : 'pl-12 pr-12 bg-white dark:bg-neutral-dark border-gray-200 dark:border-gray-600 shadow-lg focus:shadow-[0_0_12px_#03A6A1]'
                  }
                `}
                disabled={isAIProcessing}
              />

              {/* AI Processing indicator */}
              {isAIProcessing && (
                <div className="absolute right-12 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                  <div className="w-1 h-1 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              )}
            </div>

            {suggestions.length > 0 && query.length > 2 && !isAIProcessing && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-neutral-dark/95 backdrop-blur-sm border border-gray-200 dark:border-gray-600 rounded-xl shadow-2xl z-20">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(suggestion)}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 text-text-light dark:text-text-dark transition-all duration-200 first:rounded-t-xl last:rounded-b-xl flex items-center gap-2"
                  >
                    <Zap className="w-4 h-4 text-primary" />
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Enhanced Search button */}
          <button
            onClick={handleSearch}
            disabled={isAIProcessing}
            className={`
              px-8 py-4 rounded-2xl font-medium text-white
              flex items-center gap-2 transition-all duration-300
              relative overflow-hidden group
              ${isSearching || isAIProcessing
                ? 'bg-primary/80 scale-95 shadow-lg'
                : 'bg-primary hover:bg-primary/90 hover:scale-105 hover:shadow-xl active:scale-95'
              }
            `}
          >
            {/* Button glow effect */}
            {/* <div className={`absolute inset-0 bg-gradient-to-r from-primary to-accent-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              isSearching ? 'animate-pulse' : ''
            }`}></div> */}

            <Search className={`relative w-5 h-5 z-10 ${isSearching ? 'animate-spin' : ''}`} />
            <span className="relative z-10">
              {isSearching ? 'Searching...' : isAIProcessing ? 'AI Processing...' : 'Search'}
            </span>

            {/* Shimmer effect */}
            {(isSearching || isAIProcessing) && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            )}
          </button>

          {/* Enhanced Filter button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`
              px-6 py-4 rounded-2xl font-medium
              flex items-center gap-2 transition-all duration-300
              relative overflow-hidden group
              ${showFilters
                ? 'bg-primary text-white scale-105 shadow-xl'
                : 'bg-gray-100 dark:bg-gray-700 text-text-light dark:text-text-dark hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105'
              }
            `}
          >
            {/* Filter button glow when active */}
            {showFilters && (
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent-light/20 blur-sm animate-pulse"></div>
            )}

            <Filter className={`relative w-5 h-5 z-10 transition-transform duration-300 ${showFilters ? 'rotate-0' : 'rotate-180'
              }`} />
            <span className="relative z-10">Filters</span>

            {/* Active indicator */}
            {showFilters && (
              <div className="absolute top-1 right-1 w-2 h-2 bg-accent-light rounded-full animate-ping"></div>
            )}
          </button>
        </div>

        {showFilters && (
          <div className="mt-6 p-6 bg-white/95 dark:bg-neutral-dark/95 backdrop-blur-sm border border-gray-200 dark:border-gray-600 rounded-2xl shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-lg text-text-light dark:text-text-dark flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Advanced Filters
              </h3>
              <button
                onClick={() => setShowFilters(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { key: 'category', placeholder: 'All Categories', options: ['electronics', 'clothing', 'home'] },
                { key: 'minPrice', placeholder: 'Min Price', type: 'number' },
                { key: 'maxPrice', placeholder: 'Max Price', type: 'number' },
                { key: 'minRating', placeholder: 'Any Rating', options: ['4', '3'] }
              ].map((field) => (
                <div key={field.key} className="relative group">
                  {field.options ? (
                    <select
                      value={filters[field.key as keyof typeof filters]}
                      onChange={(e) => setFilters({ ...filters, [field.key]: e.target.value })}
                      className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-neutral-dark text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 group-hover:shadow-md"
                    >
                      <option value="">{field.placeholder}</option>
                      {field.options.map(option => (
                        <option key={option} value={option}>
                          {option === '4' ? '4+ Stars' : option === '3' ? '3+ Stars' : option.charAt(0).toUpperCase() + option.slice(1)}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type || 'text'}
                      placeholder={field.placeholder}
                      value={filters[field.key as keyof typeof filters]}
                      onChange={(e) => setFilters({ ...filters, [field.key]: e.target.value })}
                      className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-white dark:bg-neutral-dark text-text-light dark:text-text-dark focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 group-hover:shadow-md"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
