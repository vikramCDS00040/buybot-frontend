'use client'
import { useEffect, useRef } from 'react'

interface Category3DProps {
  category: string
  color: string
}

export default function Category3D({ category, color }: Category3DProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let rotation = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(rotation)
      
      // Set gradient
      const gradient = ctx.createLinearGradient(-30, -30, 30, 30)
      gradient.addColorStop(0, color)
      gradient.addColorStop(1, color + '80')
      ctx.fillStyle = gradient
      
      // Draw shape based on category
      switch (category.toLowerCase()) {
        case 'electronics':
          ctx.fillRect(-25, -15, 50, 30)
          ctx.fillStyle = color + '40'
          ctx.fillRect(-20, -10, 40, 20)
          break
        case 'smartphones':
          ctx.fillRect(-12, -25, 24, 50)
          ctx.fillStyle = color + '40'
          ctx.fillRect(-8, -20, 16, 40)
          break
        case 'audio':
          ctx.beginPath()
          ctx.arc(0, 0, 25, 0, Math.PI * 2)
          ctx.fill()
          ctx.fillStyle = color + '40'
          ctx.beginPath()
          ctx.arc(0, 0, 15, 0, Math.PI * 2)
          ctx.fill()
          break
        case 'gaming':
          ctx.fillRect(-20, -20, 40, 40)
          ctx.fillStyle = color + '60'
          ctx.beginPath()
          ctx.arc(-8, -8, 4, 0, Math.PI * 2)
          ctx.arc(8, -8, 4, 0, Math.PI * 2)
          ctx.fill()
          break
        default:
          ctx.fillRect(-20, -20, 40, 40)
      }
      
      ctx.restore()
      rotation += 0.02
      animationId = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animationId)
  }, [category, color])

  return (
    <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
      <canvas
        ref={canvasRef}
        width={80}
        height={80}
        className="drop-shadow-lg"
      />
    </div>
  )
}
