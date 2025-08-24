'use client'

import React, { useState } from 'react'
import { useCart } from './CartProvider'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { 
  X, 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus,
  Calendar,
  Truck,
  CreditCard
} from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import Link from 'next/link'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { state, removeFromCart, updateQuantity, getCartTotal, getCartItemCount } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const handleCheckout = async () => {
    setIsCheckingOut(true)
    // Mock checkout process
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsCheckingOut(false)
    // Redirect to checkout page
    window.location.href = '/checkout'
  }

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity)
    }
  }

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-lavender" />
            <h2 className="text-xl font-semibold text-dark-gray">ตะกร้าสินค้า</h2>
            {getCartItemCount() > 0 && (
              <span className="bg-lavender text-white text-xs px-2 py-1 rounded-full">
                {getCartItemCount()}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {state.items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">ตะกร้าว่างเปล่า</h3>
              <p className="text-gray-500 mb-6">เพิ่มสินค้าลงในตะกร้าเพื่อเริ่มต้นการเช่า</p>
              <Link href="/rent">
                <Button onClick={onClose}>
                  เริ่มช้อปปิ้ง
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <Card key={item.productId} className="p-4">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-20 h-20 bg-gradient-to-br from-lavender/20 to-emerald/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-500 text-xs">รูป</span>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-dark-gray text-sm mb-1 truncate">
                        {item.productName}
                      </h4>
                      <p className="text-xs text-gray-600 mb-2">{item.brand}</p>
                      
                      {/* Date Range */}
                      <div className="flex items-center gap-1 text-xs text-gray-600 mb-3">
                        <Calendar className="w-3 h-3" />
                        <span>
                          {new Date(item.startDate).toLocaleDateString('th-TH')} - {new Date(item.endDate).toLocaleDateString('th-TH')}
                        </span>
                      </div>

                      {/* Price */}
                      <p className="text-sm font-semibold text-lavender">
                        ฿{item.price.toLocaleString()}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex flex-col items-end gap-2">
                      <button
                        onClick={() => removeFromCart(item.productId)}
                        className="p-1 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                      
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleQuantityChange(item.productId, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.productId, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t border-gray-200 p-6">
            {/* Shipping Info */}
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <Truck className="w-4 h-4 text-emerald" />
              <span>จัดส่งฟรีถึงหน้าบ้าน</span>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg font-semibold text-dark-gray">ราคารวม</span>
              <span className="text-2xl font-bold text-lavender">
                ฿{getCartTotal().toLocaleString()}
              </span>
            </div>

            {/* Checkout Button */}
            <Button 
              size="lg" 
              className="w-full mb-3"
              loading={isCheckingOut}
              onClick={handleCheckout}
            >
              <CreditCard className="w-5 h-5 mr-2" />
              {isCheckingOut ? 'กำลังดำเนินการ...' : 'ดำเนินการสั่งซื้อ'}
            </Button>

            {/* Continue Shopping */}
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full"
              onClick={onClose}
            >
              ช้อปปิ้งต่อ
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
