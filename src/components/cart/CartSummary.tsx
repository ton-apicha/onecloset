'use client'

import { useCart } from './CartProvider'
import { ShoppingBag, Truck, Shield, CreditCard } from 'lucide-react'
import Link from 'next/link'

export default function CartSummary() {
  const { items, totalPrice, totalItems } = useCart()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB',
    }).format(price)
  }

  const shippingFee = 0
  const finalTotal = totalPrice + shippingFee

  if (items.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShoppingBag className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            ตะกร้าว่างเปล่า
          </h3>
          <p className="text-gray-600 mb-6">
            เพิ่มสินค้าลงในตะกร้าเพื่อเริ่มต้นการเช่า
          </p>
          <Link href="/products">
            <button className="btn-primary w-full">
              เริ่มช้อปปิ้ง
            </button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">สรุปคำสั่งซื้อ</h2>
            <p className="text-blue-100">{totalItems} รายการ</p>
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <ShoppingBag className="h-6 w-6" />
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">ราคาสินค้า</span>
            <span className="font-semibold text-gray-900">{formatPrice(totalPrice)}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600">ค่าจัดส่ง</span>
            <span className="font-semibold text-green-600">ฟรี</span>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-900">รวมทั้งหมด</span>
              <span className="text-2xl font-bold text-blue-600">{formatPrice(finalTotal)}</span>
            </div>
          </div>
        </div>

        {/* Shipping Info */}
        <div className="mt-6 p-4 bg-blue-50 rounded-xl">
          <div className="flex items-center space-x-3 mb-3">
            <Truck className="h-5 w-5 text-blue-600" />
            <h4 className="font-semibold text-blue-900">ข้อมูลการจัดส่ง</h4>
          </div>
          <div className="space-y-2 text-sm text-blue-800">
            <p>• จัดส่งฟรีทั่วประเทศ</p>
            <p>• รับสินค้าภายใน 1-2 วันทำการ</p>
            <p>• ส่งคืนฟรีเมื่อครบกำหนด</p>
          </div>
        </div>

        {/* Security Info */}
        <div className="mt-4 p-4 bg-green-50 rounded-xl">
          <div className="flex items-center space-x-3 mb-3">
            <Shield className="h-5 w-5 text-green-600" />
            <h4 className="font-semibold text-green-900">การรับประกัน</h4>
          </div>
          <div className="space-y-2 text-sm text-green-800">
            <p>• รับประกันความสะอาด 100%</p>
            <p>• รับประกันคุณภาพสินค้า</p>
            <p>• เงินคืนเต็มจำนวนหากไม่พอใจ</p>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-6">
          <h4 className="font-semibold text-gray-900 mb-3">วิธีการชำระเงิน</h4>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg">
              <CreditCard className="h-4 w-4 text-blue-600" />
              <span className="text-sm">บัตรเครดิต</span>
            </div>
            <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-sm">PromptPay</span>
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="mt-6 space-y-3">
          <Link href="/checkout">
            <button className="btn-primary w-full">
              ดำเนินการเช่า
            </button>
          </Link>
          
          <Link href="/products">
            <button className="btn-outline w-full">
              เลือกสินค้าเพิ่มเติม
            </button>
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            โดยการดำเนินการ คุณยอมรับ{' '}
            <a href="#" className="text-blue-600 hover:underline">
              เงื่อนไขการเช่า
            </a>{' '}
            และ{' '}
            <a href="#" className="text-blue-600 hover:underline">
              นโยบายความเป็นส่วนตัว
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
