'use client'

import { useCart } from '@/components/cart/CartProvider'
import CartItem from '@/components/cart/CartItem'
import CartSummary from '@/components/cart/CartSummary'
import { ShoppingBag, ArrowLeft, Trash2 } from 'lucide-react'
import Link from 'next/link'
import PageLayout from '@/components/layout/PageLayout'

export default function CartPage() {
  const { items, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <PageLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              ตะกร้าสินค้า
            </h1>
            <p className="text-xl text-gray-600">
              ยังไม่มีสินค้าในตะกร้า
            </p>
          </div>

          {/* Empty Cart Content */}
          <div className="max-w-md mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="text-6xl mb-4">🛍️</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                ตะกร้าว่างเปล่า
              </h2>
              <p className="text-gray-600 mb-6">
                เพิ่มสินค้าลงในตะกร้าเพื่อเริ่มต้นการเช่า
              </p>
              <Link href="/products">
                <button className="btn-primary w-full">
                  เริ่มช้อปปิ้ง
                </button>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="text-2xl mb-2">👗</div>
                <h3 className="font-semibold text-gray-900 mb-1">ชุดราตรี</h3>
                <p className="text-sm text-gray-600">150+ ชุด</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="text-2xl mb-2">💼</div>
                <h3 className="font-semibold text-gray-900 mb-1">ชุดทำงาน</h3>
                <p className="text-sm text-gray-600">200+ ชุด</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="text-2xl mb-2">👜</div>
                <h3 className="font-semibold text-gray-900 mb-1">กระเป๋า</h3>
                <p className="text-sm text-gray-600">100+ ชิ้น</p>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                ตะกร้าสินค้า
              </h1>
              <p className="text-gray-600">
                {items.length} รายการ
              </p>
            </div>
          </div>
          
          <button
            onClick={clearCart}
            className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors"
          >
            <Trash2 className="h-4 w-4" />
            <span>ลบทั้งหมด</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900">
                  รายการสินค้า
                </h2>
              </div>
              
              <div className="divide-y divide-gray-100">
                {items.map((item, index) => (
                  <div key={index} className="p-6">
                    <CartItem item={item} />
                  </div>
                ))}
              </div>
            </div>

            {/* Continue Shopping */}
            <div className="mt-6 bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    ต้องการเพิ่มสินค้า?
                  </h3>
                  <p className="text-gray-600">
                    ดูสินค้าเพิ่มเติมในคอลเลกชันของเรา
                  </p>
                </div>
                <Link href="/products">
                  <button className="btn-outline">
                    ดูสินค้าทั้งหมด
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <CartSummary />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
