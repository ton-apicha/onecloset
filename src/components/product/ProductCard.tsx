'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, Star, ShoppingBag } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { formatPrice } from '@/lib/utils'
import { ProductCardProps } from '@/types'

export function ProductCard({ 
  product, 
  onWishlistToggle, 
  isWishlisted = false 
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    onWishlistToggle?.(product.id)
  }

  const handleImageHover = () => {
    setIsHovered(true)
    if (product.images.length > 1) {
      setImageIndex(1)
    }
  }

  const handleImageLeave = () => {
    setIsHovered(false)
    setImageIndex(0)
  }

  return (
    <Link href={`/rent/${product.id}`}>
      <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300">
        {/* Product Image */}
        <div 
          className="relative aspect-[3/4] bg-gray-100 overflow-hidden"
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageLeave}
        >
          {product.images.length > 0 ? (
            <Image
              src={product.images[imageIndex]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-lavender/20 to-emerald/20 flex items-center justify-center">
              <span className="text-gray-500">ไม่มีรูปภาพ</span>
            </div>
          )}
          
          {/* Wishlist Button */}
          <button
            onClick={handleWishlistToggle}
            className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
          >
            <Heart 
              className={`w-5 h-5 transition-colors duration-200 ${
                isWishlisted 
                  ? 'fill-red-500 text-red-500' 
                  : 'text-gray-600 hover:text-red-500'
              }`}
            />
          </button>

          {/* Quick Add to Bag */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button 
              size="sm" 
              className="w-full bg-white text-dark-gray hover:bg-gray-50"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                // Add to bag logic
              }}
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              เพิ่มลงตะกร้า
            </Button>
          </div>

          {/* Product Status Badge */}
          {product.status === 'RENTED' && (
            <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              กำลังเช่า
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Brand */}
          <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
          
          {/* Product Name */}
          <h3 className="font-semibold text-dark-gray mb-2 line-clamp-2 group-hover:text-lavender transition-colors duration-200">
            {product.name}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${
                    i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-1">(4.5)</span>
          </div>
          
          {/* Price */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-bold text-dark-gray">
                {formatPrice(product.price)}
              </p>
              <p className="text-sm text-gray-500">ต่อวัน</p>
            </div>
            
            {/* Available Sizes */}
            {product.sizes.length > 0 && (
              <div className="text-right">
                <p className="text-xs text-gray-500 mb-1">ไซส์</p>
                <div className="flex gap-1">
                  {product.sizes.slice(0, 3).map((size, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-gray-100 px-2 py-1 rounded"
                    >
                      {size}
                    </span>
                  ))}
                  {product.sizes.length > 3 && (
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      +{product.sizes.length - 3}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>
    </Link>
  )
}
