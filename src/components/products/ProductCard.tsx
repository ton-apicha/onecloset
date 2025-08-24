'use client'

import { useState } from 'react'
import { useCart } from '@/components/cart/CartProvider'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product
  viewMode: 'grid' | 'list'
}

export default function ProductCard({ product, viewMode }: ProductCardProps) {
  const { addToCart } = useCart()
  const [isHovered, setIsHovered] = useState(false)
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB'
    }).format(price)
  }

  const handleAddToCart = async () => {
    setIsAddingToCart(true)
    try {
      // In a real app, you might want to show a modal to select size/color
      // For now, we'll use the first available options
      addToCart({
        productId: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        image: product.images[0],
        size: product.sizes[0],
        color: product.colors[0],
        quantity: 1,
        shopId: product.shopId
      })
    } catch (error) {
      console.error('Failed to add to cart:', error)
    } finally {
      setIsAddingToCart(false)
    }
  }

  if (viewMode === 'list') {
    return (
      <div 
        className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Product Image */}
        <div className="relative w-32 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
          />
          {product.status === 'RENTED' && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <Badge variant="destructive">ไม่ว่าง</Badge>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex-1 min-w-0">
          <Link 
            href={`/products/${product.id}`}
            className="block hover:text-blue-600 transition-colors"
          >
            <h3 className="font-medium text-gray-900 truncate">{product.name}</h3>
          </Link>
          <p className="text-sm text-gray-600">{product.brand}</p>
          
          <div className="flex items-center space-x-4 mt-2">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-gray-600">4.8</span>
              <span className="text-sm text-gray-600">(127)</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">ไซส์:</span>
              <div className="flex space-x-1">
                {product.sizes.slice(0, 3).map((size) => (
                  <Badge key={size} variant="outline" className="text-xs">
                    {size}
                  </Badge>
                ))}
                {product.sizes.length > 3 && (
                  <span className="text-xs text-gray-500">+{product.sizes.length - 3}</span>
                )}
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Price and Actions */}
        <div className="flex flex-col items-end space-y-3">
          <div className="text-right">
            <div className="text-xl font-semibold text-gray-900">
              {formatPrice(product.price)}
            </div>
            <p className="text-sm text-gray-600">ต่อวัน</p>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-600 hover:text-red-600"
            >
              <Heart className="w-4 h-4" />
            </Button>
            
            <Button
              onClick={handleAddToCart}
              disabled={product.status === 'RENTED' || isAddingToCart}
              size="sm"
              className="flex items-center space-x-1"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>{isAddingToCart ? 'เพิ่มแล้ว...' : 'เพิ่มในตะกร้า'}</span>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Grid view
  return (
    <div 
      className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Status Badge */}
        {product.status === 'RENTED' && (
          <div className="absolute top-2 left-2">
            <Badge variant="destructive">ไม่ว่าง</Badge>
          </div>
        )}

        {/* Quick Actions */}
        <div className={`absolute top-2 right-2 flex flex-col space-y-2 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Button
            variant="ghost"
            size="sm"
            className="w-8 h-8 p-0 bg-white/90 hover:bg-white"
          >
            <Heart className="w-4 h-4" />
          </Button>
        </div>

        {/* Add to Cart Overlay */}
        <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
          isHovered && product.status !== 'RENTED' ? 'opacity-100' : 'opacity-0'
        }`}>
          <Button
            onClick={handleAddToCart}
            disabled={product.status === 'RENTED' || isAddingToCart}
            className="flex items-center space-x-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>{isAddingToCart ? 'เพิ่มแล้ว...' : 'เพิ่มในตะกร้า'}</span>
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {product.brand}
          </Badge>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600">4.8</span>
          </div>
        </div>

        <Link 
          href={`/products/${product.id}`}
          className="block hover:text-blue-600 transition-colors"
        >
          <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center space-x-2 mb-3">
          <span className="text-sm text-gray-600">ไซส์:</span>
          <div className="flex space-x-1">
            {product.sizes.slice(0, 3).map((size) => (
              <span key={size} className="text-xs bg-gray-100 px-2 py-1 rounded">
                {size}
              </span>
            ))}
            {product.sizes.length > 3 && (
              <span className="text-xs text-gray-500">+{product.sizes.length - 3}</span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold text-gray-900">
              {formatPrice(product.price)}
            </div>
            <p className="text-sm text-gray-600">ต่อวัน</p>
          </div>

          {product.status === 'RENTED' && (
            <Button variant="outline" size="sm" disabled>
              ไม่ว่าง
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
