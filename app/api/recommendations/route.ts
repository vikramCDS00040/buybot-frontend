import { NextResponse } from 'next/server'

export async function GET() {
  const mockRecommendations = [
    {
      id: 'r1',
      name: 'Gaming Laptop ASUS ROG',
      price: 1599,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300&h=300&fit=crop',
      reason: 'Based on your interest in high-performance laptops'
    },
    {
      id: 'r2',
      name: 'Samsung Galaxy S24',
      price: 899,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop',
      reason: 'Popular among users who viewed similar phones'
    },
    {
      id: 'r3',
      name: 'Bose QuietComfort',
      price: 329,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=300&fit=crop',
      reason: 'Great alternative to Sony headphones'
    },
    {
      id: 'r4',
      name: 'iPad Pro 12.9"',
      price: 1099,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop',
      reason: 'Perfect for creative professionals'
    }
  ]

  return NextResponse.json({ products: mockRecommendations })
}
