'use client'

import React, { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { 
  Heart, 
  Star, 
  Calendar, 
  MapPin, 
  Truck, 
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Play,
  Share2,
  MessageCircle
} from 'lucide-react'
import { formatPrice, calculateRentalDays, calculateRentalPrice } from '@/lib/utils'
import { Product, ProductStatus } from '@/types'

// Mock product data - replace with API call
const mockProduct: Product = {
  id: '1',
  name: 'ชุดราตรีสีดำ Zara',
  brand: 'Zara',
  category: 'evening-dresses',
  description: 'ชุดราตรีสีดำสวยงาม เหมาะสำหรับงานแต่งงานหรืองานพิเศษ เนื้อผ้าคุณภาพดี ใส่สบาย มีการตัดเย็บที่ประณีต',
  price: 1500,
  images: [
    '/images/products/dress1-1.jpg',
    '/images/products/dress1-2.jpg',
    '/images/products/dress1-3.jpg',
    '/images/products/dress1-4.jpg'
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  colors: ['ดำ'],
  shopId: 'shop1',
  status: ProductStatus.AVAILABLE,
  createdAt: new Date(),
  updatedAt: new Date()
}

const mockShop = {
  id: 'shop1',
  name: 'ร้านแฟชั่นสวย',
  rating: 4.8,
  reviewCount: 127,
  location: 'กรุงเทพฯ'
}

export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [activeTab, setActiveTab] = useState('details')

  const product = mockProduct
  const shop = mockShop

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted)
  }

  const handleImageChange = (index: number) => {
    setSelectedImage(index)
  }

  const handleDateChange = (type: 'start' | 'end', value: string) => {
    if (type === 'start') {
      setStartDate(value)
      // Auto-set end date to 4 days later if not set
      if (!endDate) {
        const start = new Date(value)
        const end = new Date(start)
        end.setDate(end.getDate() + 4)
        setEndDate(end.toISOString().split('T')[0])
      }
    } else {
      setEndDate(value)
    }
  }

  const calculateTotalPrice = () => {
    if (startDate && endDate) {
      const start = new Date(startDate)
      const end = new Date(endDate)
      return calculateRentalPrice(product.price, start, end)
    }
    return 0
  }

  const totalPrice = calculateTotalPrice()
  const rentalDays = startDate && endDate ? calculateRentalDays(new Date(startDate), new Date(endDate)) : 0

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-light-gray py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li><a href="/" className="hover:text-lavender">หน้าแรก</a></li>
              <li>/</li>
              <li><a href="/rent" className="hover:text-lavender">เช่าเสื้อผ้า</a></li>
              <li>/</li>
              <li><a href={`/rent/categories/${product.category}`} className="hover:text-lavender">
                {product.category === 'evening-dresses' ? 'ชุดราตรี' : product.category}
              </a></li>
              <li>/</li>
              <li className="text-dark-gray">{product.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Images */}
            <div>
              {/* Main Image */}
              <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-4">
                {product.images.length > 0 ? (
                  <div className="w-full h-full bg-gradient-to-br from-lavender/20 to-emerald/20 flex items-center justify-center">
                    <span className="text-gray-500">รูปภาพ {selectedImage + 1}</span>
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-lavender/20 to-emerald/20 flex items-center justify-center">
                    <span className="text-gray-500">ไม่มีรูปภาพ</span>
                  </div>
                )}
                
                {/* Video Play Button */}
                <button className="absolute top-4 left-4 p-2 bg-white/80 backdrop-blur-sm rounded-full">
                  <Play className="w-5 h-5 text-dark-gray" />
                </button>

                {/* Share Button */}
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full">
                  <Share2 className="w-5 h-5 text-dark-gray" />
                </button>
              </div>

              {/* Thumbnail Images */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => handleImageChange(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 ${
                        selectedImage === index ? 'border-lavender' : 'border-gray-200'
                      }`}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-lavender/20 to-emerald/20 flex items-center justify-center">
                        <span className="text-xs text-gray-500">{index + 1}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column - Product Info */}
            <div>
              {/* Brand & Title */}
              <div className="mb-6">
                <a href={`/rent/brands/${product.brand}`} className="text-lavender hover:underline">
                  {product.brand}
                </a>
                <h1 className="text-3xl font-bold text-dark-gray mt-2 mb-4">{product.name}</h1>
                
                {/* Rating */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${
                          i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">4.5 (127 รีวิว)</span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <p className="text-3xl font-bold text-dark-gray">
                    {formatPrice(product.price)}
                  </p>
                  <p className="text-gray-600">ต่อวัน</p>
                </div>
              </div>

              {/* Shop Info */}
              <Card className="p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-lavender/10 rounded-full flex items-center justify-center">
                      <span className="text-lavender font-semibold">ร</span>
                    </div>
                    <div>
                      <a href={`/shops/${shop.id}`} className="font-semibold text-dark-gray hover:text-lavender">
                        {shop.name}
                      </a>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{shop.rating}</span>
                        <span>({shop.reviewCount} รีวิว)</span>
                        <MapPin className="w-4 h-4" />
                        <span>{shop.location}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    แชท
                  </Button>
                </div>
              </Card>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="font-semibold text-dark-gray mb-3">เลือกไซส์</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                        selectedSize === size
                          ? 'border-lavender bg-lavender text-white'
                          : 'border-gray-300 text-gray-700 hover:border-lavender'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date Selection */}
              <div className="mb-6">
                <h3 className="font-semibold text-dark-gray mb-3">เลือกวันที่เช่า</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">วันที่เริ่มเช่า</label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => handleDateChange('start', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">วันที่ส่งคืน</label>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => handleDateChange('end', e.target.value)}
                      min={startDate}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender"
                    />
                  </div>
                </div>
              </div>

              {/* Price Calculation */}
              {totalPrice > 0 && (
                <Card className="p-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>ราคาต่อวัน</span>
                      <span>{formatPrice(product.price)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>จำนวนวัน</span>
                      <span>{rentalDays} วัน</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between font-semibold text-lg">
                        <span>ราคารวม</span>
                        <span className="text-lavender">{formatPrice(totalPrice)}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="flex-1"
                  disabled={!selectedSize || !startDate || !endDate}
                >
                  เพิ่มลงตะกร้า
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handleWishlistToggle}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
              </div>

              {/* Shipping Info */}
              <Card className="p-4 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <Truck className="w-5 h-5 text-emerald" />
                  <span className="font-semibold text-dark-gray">จัดส่งฟรี</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  จัดส่งและรับคืนฟรีถึงหน้าบ้าน
                </p>
                <div className="flex items-center gap-3">
                  <RotateCcw className="w-5 h-5 text-emerald" />
                  <span className="text-sm text-gray-600">
                    ส่งคืนง่าย ไม่มีค่าธรรมเนียม
                  </span>
                </div>
              </Card>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-12">
            <div className="border-b border-gray-200 mb-8">
              <nav className="flex space-x-8">
                {[
                  { id: 'details', label: 'รายละเอียด' },
                  { id: 'size-fit', label: 'ขนาดและไซส์' },
                  { id: 'shipping', label: 'การจัดส่งและส่งคืน' },
                  { id: 'reviews', label: 'รีวิวจากลูกค้า' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-lavender text-lavender'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {activeTab === 'details' && (
                <div>
                  <h3 className="text-xl font-semibold text-dark-gray mb-4">รายละเอียดสินค้า</h3>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h4 className="font-semibold text-dark-gray mb-2">คุณสมบัติ</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• เนื้อผ้าคุณภาพดี</li>
                        <li>• การตัดเย็บประณีต</li>
                        <li>• เหมาะสำหรับงานพิเศษ</li>
                        <li>• ใส่สบาย</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-gray mb-2">การดูแล</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• ซักแห้งเท่านั้น</li>
                        <li>• ไม่ใช้สารฟอกขาว</li>
                        <li>• เก็บในที่แห้ง</li>
                        <li>• หลีกเลี่ยงแสงแดด</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'size-fit' && (
                <div>
                  <h3 className="text-xl font-semibold text-dark-gray mb-4">ขนาดและไซส์</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 p-3 text-left">ไซส์</th>
                          <th className="border border-gray-300 p-3 text-left">อก (ซม.)</th>
                          <th className="border border-gray-300 p-3 text-left">เอว (ซม.)</th>
                          <th className="border border-gray-300 p-3 text-left">สะโพก (ซม.)</th>
                          <th className="border border-gray-300 p-3 text-left">ความยาว (ซม.)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { size: 'XS', chest: 78, waist: 60, hip: 84, length: 95 },
                          { size: 'S', chest: 82, waist: 64, hip: 88, length: 96 },
                          { size: 'M', chest: 86, waist: 68, hip: 92, length: 97 },
                          { size: 'L', chest: 90, waist: 72, hip: 96, length: 98 },
                          { size: 'XL', chest: 94, waist: 76, hip: 100, length: 99 }
                        ].map((row) => (
                          <tr key={row.size}>
                            <td className="border border-gray-300 p-3 font-medium">{row.size}</td>
                            <td className="border border-gray-300 p-3">{row.chest}</td>
                            <td className="border border-gray-300 p-3">{row.waist}</td>
                            <td className="border border-gray-300 p-3">{row.hip}</td>
                            <td className="border border-gray-300 p-3">{row.length}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === 'shipping' && (
                <div>
                  <h3 className="text-xl font-semibold text-dark-gray mb-4">การจัดส่งและส่งคืน</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-dark-gray mb-3">การจัดส่ง</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start gap-2">
                          <Truck className="w-5 h-5 text-emerald mt-0.5" />
                          <span>จัดส่งฟรีถึงหน้าบ้าน</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Calendar className="w-5 h-5 text-emerald mt-0.5" />
                          <span>จัดส่งภายใน 1-2 วันทำการ</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <MapPin className="w-5 h-5 text-emerald mt-0.5" />
                          <span>จัดส่งทั่วประเทศไทย</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-gray mb-3">การส่งคืน</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start gap-2">
                          <RotateCcw className="w-5 h-5 text-emerald mt-0.5" />
                          <span>รับคืนฟรีถึงหน้าบ้าน</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Calendar className="w-5 h-5 text-emerald mt-0.5" />
                          <span>รับคืนตามวันที่กำหนด</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Truck className="w-5 h-5 text-emerald mt-0.5" />
                          <span>ไม่ต้องแพ็คเอง เรามารับให้</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <h3 className="text-xl font-semibold text-dark-gray mb-4">รีวิวจากลูกค้า</h3>
                  <div className="space-y-6">
                    {[
                      {
                        name: 'สมหญิง ใจดี',
                        rating: 5,
                        date: '2024-01-15',
                        comment: 'ชุดสวยมาก ใส่แล้วดูดี ราคาไม่แพงเลย แนะนำมากๆ'
                      },
                      {
                        name: 'ธนวัฒน์ รักแฟชั่น',
                        rating: 4,
                        date: '2024-01-10',
                        comment: 'คุณภาพดี ใส่สบาย แต่ไซส์เล็กไปนิดหน่อย'
                      },
                      {
                        name: 'มณี สวยงาม',
                        rating: 5,
                        date: '2024-01-05',
                        comment: 'ชอบมาก ใส่ไปงานแต่งงานแล้วสวยมาก'
                      }
                    ].map((review, index) => (
                      <Card key={index} className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="font-semibold text-dark-gray">{review.name}</p>
                            <div className="flex items-center gap-2 mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-4 h-4 ${
                                    i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
