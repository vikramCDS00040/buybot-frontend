'use client'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts'

interface ReviewInsightsProps {
  sentimentData: Array<{ name: string; value: number }>
  keywords: Array<{ text: string; size: number }>
}

export default function ReviewInsights({ sentimentData, keywords }: ReviewInsightsProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Review Insights</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Sentiment Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sentimentData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="value" fill="#2563eb" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Common Keywords</h3>
          <div className="flex flex-wrap gap-2">
            {keywords.map((keyword, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                style={{ fontSize: `${Math.max(12, keyword.size)}px` }}
              >
                {keyword.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
