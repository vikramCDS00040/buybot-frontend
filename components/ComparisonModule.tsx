'use client'
import { X, Check, Minus } from 'lucide-react'
import { useProduct } from '@/contexts/ProductContext'

export default function ComparisonModule() {
  const { selectedProducts, removeFromComparison } = useProduct()

  if (selectedProducts.length === 0) return null

  const features = [
    { name: 'Price', key: 'price', format: (val: any) => `$${val}` },
    { name: 'Rating', key: 'rating', format: (val: any) => `${val}/5` },
    { name: 'Reviews', key: 'reviewCount', format: (val: any) => val },
    { name: 'AI Score', key: 'aiScore', format: (val: any) => `${val}/10` },
    { name: 'Category', key: 'category', format: (val: any) => val }
  ]

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
      <h2 className="font-heading text-2xl font-bold mb-6">Product Comparison</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-4 border-b">Feature</th>
              {selectedProducts.map((product) => (
                <th key={product.id} className="text-center p-4 border-b min-w-48">
                  <div className="relative">
                    <button
                      onClick={() => removeFromComparison(product.id)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                    >
                      <X className="w-3 h-3" />
                    </button>
                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded mx-auto mb-2" />
                    <h3 className="font-semibold text-sm">{product.name}</h3>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature) => (
              <tr key={feature.key} className="border-b">
                <td className="p-4 font-medium">{feature.name}</td>
                {selectedProducts.map((product) => (
                  <td key={product.id} className="p-4 text-center">
                    {feature.format((product as any)[feature.key])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {selectedProducts.map((product) => (
          <div key={product.id} className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Pros & Cons</h4>
            <div className="space-y-2">
              <div className="flex items-center text-green-600 text-sm">
                <Check className="w-4 h-4 mr-2" />
                High AI Score ({product.aiScore}/10)
              </div>
              <div className="flex items-center text-red-600 text-sm">
                <Minus className="w-4 h-4 mr-2" />
                Price: ${product.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
