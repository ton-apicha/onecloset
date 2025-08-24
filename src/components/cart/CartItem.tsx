'use client'

import { useState } from 'react'
import { useCart } from './CartProvider'
import { Minus, Plus, Trash2, Heart, Eye } from 'lucide-react'

interface CartItemProps {
  item: {
    productId: string
    name: string
    brand: string
    price: number
    image: string
    size: string
    color: string
    quantity: number
    shopId: string
  }
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart()
  const [isUpdating, setIsUpdating] = useState(false)

  const handleQuantityChange = async (newQuantity: number) => {
    if (newQuantity < 1) return
    setIsUpdating(true)
    try {
      await updateQuantity(item.productId, newQuantity)
    } catch (error) {
      console.error('Failed to update quantity:', error)
    } finally {
      setIsUpdating(false)
    }
  }

  const handleRemove = async () => {
    setIsUpdating(true)
    try {
      await removeFromCart(item.productId)
    } catch (error) {
      console.error('Failed to remove item:', error)
    } finally {
      setIsUpdating(false)
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB',
    }).format(price)
  }

  return (
    <div className="flex items-center space-x-4">
      {/* Product Image */}
      <div className="relative flex-shrink-0">
        <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center overflow-hidden">
          <div className="text-2xl">👗</div>
        </div>
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">{item.quantity}</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 truncate">
              {item.name}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              {item.brand}
            </p>
            
            {/* Size and Color */}
            <div className="flex items-center space-x-4 mb-3">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500">ไซส์:</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">
                  {item.size}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500">สี:</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">
                  {item.color}
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-blue-600">
                {formatPrice(item.price)}
              </span>
              <span className="text-sm text-gray-500">/ วัน</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2 ml-4">
            <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
              <Heart className="h-4 w-4" />
            </button>
            <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
              <Eye className="h-4 w-4" />
            </button>
            <button
              onClick={handleRemove}
              disabled={isUpdating}
              className="p-2 text-red-400 hover:text-red-600 transition-colors disabled:opacity-50"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-600">จำนวนวัน:</span>
            <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-1">
              <button
                onClick={() => handleQuantityChange(item.quantity - 1)}
                disabled={isUpdating || item.quantity <= 1}
                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-white rounded-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Minus className="h-3 w-3" />
              </button>
              <span className="w-8 text-center font-semibold text-gray-900">
                {item.quantity}
              </span>
              <button
                onClick={() => handleQuantityChange(item.quantity + 1)}
                disabled={isUpdating}
                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-white rounded-md transition-all disabled:opacity-50"
              >
                <Plus className="h-3 w-3" />
              </button>
            </div>
          </div>

          {/* Total Price */}
          <div className="text-right">
            <div className="text-sm text-gray-500">รวม</div>
            <div className="text-lg font-bold text-gray-900">
              {formatPrice(item.price * item.quantity)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
