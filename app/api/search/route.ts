import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q')

  if (!query) {
    return NextResponse.json({ error: 'Query parameter required' }, { status: 400 })
  }

  const mockProducts = [
    {
      id: '1',
      name: 'MacBook Pro 14" M3',
      price: 1999,
      rating: 4.8,
      reviewCount: 1250,
      sentimentScore: 92,
      rank: 1,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop',
      category: 'Laptops'
    },
    {
      id: '2',
      name: 'iPhone 15 Pro Max',
      price: 1199,
      rating: 4.7,
      reviewCount: 2100,
      sentimentScore: 89,
      rank: 2,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop',
      category: 'Smartphones'
    },
    {
      id: '3',
      name: 'Sony WH-1000XM5',
      price: 399,
      rating: 4.6,
      reviewCount: 890,
      sentimentScore: 87,
      rank: 3,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
      category: 'Headphones'
    },
    {
      id: '4',
      name: 'Dell XPS 13',
      price: 1299,
      rating: 4.5,
      reviewCount: 756,
      sentimentScore: 85,
      rank: 4,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop',
      category: 'Laptops'
    }
  ]

  const filteredProducts = mockProducts.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  )

  return NextResponse.json({ products: filteredProducts })
}
