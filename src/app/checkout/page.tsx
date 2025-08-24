'use client'

import { useState } from 'react'
import { useCart } from '@/components/cart/CartProvider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, CreditCard, Banknote, QrCode, Truck, Shield, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart()
  
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    province: ''
  })
  
  const [paymentMethod, setPaymentMethod] = useState('credit-card')
  const [isProcessing, setIsProcessing] = useState(false)

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">ไม่มีสินค้าในตะกร้า</h1>
          <p className="text-gray-600 mb-6">กรุณาเลือกสินค้าก่อนดำเนินการสั่งซื้อ</p>
          <Link href="/products">
            <Button>เลือกสินค้า</Button>
          </Link>
        </div>
      </div>
    )
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB'
    }).format(price)
  }

  const shippingFee = 0 // Free shipping
  const finalTotal = totalPrice + shippingFee

  const handleInputChange = (field: string, value: string) => {
    setShippingInfo(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    try {
      // In a real app, you would submit the order to your API
      console.log('Order submitted:', {
        items,
        shippingInfo,
        paymentMethod,
        total: finalTotal
      })

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Clear cart and redirect to success page
      clearCart()
      // router.push('/checkout/success')
      alert('สั่งซื้อสำเร็จ!')
    } catch (error) {
      console.error('Checkout error:', error)
      alert('เกิดข้อผิดพลาดในการสั่งซื้อ กรุณาลองใหม่อีกครั้ง')
    } finally {
      setIsProcessing(false)
    }
  }

  const isFormValid = Object.values(shippingInfo).every(value => value.trim() !== '')

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <Link href="/cart">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            กลับไปตะกร้า
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">ดำเนินการสั่งซื้อ</h1>
          <p className="text-gray-600">กรอกข้อมูลการจัดส่งและเลือกวิธีการชำระเงิน</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Shipping Information */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">ข้อมูลการจัดส่ง</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">ชื่อ *</Label>
                <Input
                  id="firstName"
                  value={shippingInfo.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="lastName">นามสกุล *</Label>
                <Input
                  id="lastName"
                  value={shippingInfo.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">อีเมล *</Label>
                <Input
                  id="email"
                  type="email"
                  value={shippingInfo.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone">เบอร์โทรศัพท์ *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={shippingInfo.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <Label htmlFor="address">ที่อยู่ *</Label>
                <Textarea
                  id="address"
                  value={shippingInfo.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  required
                  rows={3}
                />
              </div>
              
              <div>
                <Label htmlFor="city">อำเภอ/เขต *</Label>
                <Input
                  id="city"
                  value={shippingInfo.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="province">จังหวัด *</Label>
                <Input
                  id="province"
                  value={shippingInfo.province}
                  onChange={(e) => handleInputChange('province', e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="postalCode">รหัสไปรษณีย์ *</Label>
                <Input
                  id="postalCode"
                  value={shippingInfo.postalCode}
                  onChange={(e) => handleInputChange('postalCode', e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">วิธีการชำระเงิน</h2>
            
            <div className="space-y-4">
              <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit-card"
                  checked={paymentMethod === 'credit-card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-blue-600"
                />
                <CreditCard className="w-6 h-6 text-gray-600" />
                <div>
                  <div className="font-medium text-gray-900">บัตรเครดิต/เดบิต</div>
                  <div className="text-sm text-gray-600">Visa, Mastercard, JCB</div>
                </div>
              </label>

              <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank-transfer"
                  checked={paymentMethod === 'bank-transfer'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-blue-600"
                />
                <Banknote className="w-6 h-6 text-gray-600" />
                <div>
                  <div className="font-medium text-gray-900">โอนเงินผ่านธนาคาร</div>
                  <div className="text-sm text-gray-600">โอนเงินผ่านบัญชีธนาคาร</div>
                </div>
              </label>

              <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="promptpay"
                  checked={paymentMethod === 'promptpay'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-blue-600"
                />
                <QrCode className="w-6 h-6 text-gray-600" />
                <div>
                  <div className="font-medium text-gray-900">PromptPay</div>
                  <div className="text-sm text-gray-600">สแกน QR Code ชำระเงิน</div>
                </div>
              </label>
            </div>
          </div>

          {/* Shipping Info */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-4">ข้อมูลการจัดส่ง</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Truck className="w-4 h-4 text-green-600" />
                <span>จัดส่งฟรีทั่วประเทศ</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>จัดส่งภายใน 1-2 วันทำการ</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-purple-600" />
                <span>รับประกันสินค้า 100%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg border border-gray-200 sticky top-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">สรุปคำสั่งซื้อ</h2>
            
            {/* Order Items */}
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.productId} className="flex items-center space-x-3">
                  <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 text-sm truncate">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.brand}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="outline" className="text-xs">{item.size}</Badge>
                      <Badge variant="outline" className="text-xs">{item.color}</Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-gray-900 text-sm">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                    <div className="text-xs text-gray-600">
                      {item.quantity} วัน
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Separator />

            {/* Price Summary */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">จำนวนสินค้า ({items.length} ชิ้น)</span>
                <span className="font-medium">{formatPrice(totalPrice)}</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">ค่าจัดส่ง</span>
                <span className="font-medium text-green-600">
                  {shippingFee === 0 ? 'ฟรี' : formatPrice(shippingFee)}
                </span>
              </div>
              
              <Separator />
              
              <div className="flex justify-between text-lg font-semibold">
                <span>ยอดรวมทั้งหมด</span>
                <span className="text-blue-600">{formatPrice(finalTotal)}</span>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-12 text-lg"
              disabled={!isFormValid || isProcessing}
            >
              {isProcessing ? 'กำลังดำเนินการ...' : `ชำระเงิน ${formatPrice(finalTotal)}`}
            </Button>

            <p className="text-xs text-gray-500 text-center mt-4">
              การคลิก "ชำระเงิน" หมายความว่าคุณยอมรับ{' '}
              <Link href="/terms" className="text-blue-600 hover:underline">
                เงื่อนไขการให้บริการ
              </Link>
              {' '}และ{' '}
              <Link href="/privacy" className="text-blue-600 hover:underline">
                นโยบายความเป็นส่วนตัว
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}
