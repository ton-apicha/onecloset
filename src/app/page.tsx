'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [selectedRentalPeriod, setSelectedRentalPeriod] = useState('4');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const featuredProducts = [
    {
      id: 1,
      name: 'ชุดราตรีสีขาว',
      image: '👗',
      price: '2,500',
      originalPrice: '3,500',
      discount: '29%',
      designer: 'BCHU Collection',
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: 'ชุดทำงานสีดำ',
      image: '👔',
      price: '1,800',
      originalPrice: '2,400',
      discount: '25%',
      designer: 'Premium Brand',
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: 'ชุดแคชชวลสีครีม',
      image: '👕',
      price: '1,200',
      originalPrice: '1,600',
      discount: '25%',
      designer: 'Casual Style',
      rating: 4.7,
      reviews: 156
    },
    {
      id: 4,
      name: 'กระเป๋าแบรนด์เนม',
      image: '👜',
      price: '1,500',
      originalPrice: '2,000',
      discount: '25%',
      designer: 'Luxury Brand',
      rating: 4.8,
      reviews: 67
    },
    {
      id: 5,
      name: 'เครื่องประดับทองคำ',
      image: '💍',
      price: '800',
      originalPrice: '1,200',
      discount: '33%',
      designer: 'Jewelry House',
      rating: 4.9,
      reviews: 203
    },
    {
      id: 6,
      name: 'ชุดออกงานสีชมพู',
      image: '👗',
      price: '2,200',
      originalPrice: '3,000',
      discount: '27%',
      designer: 'Evening Glam',
      rating: 4.8,
      reviews: 98
    }
  ];

  const categories = [
    { name: 'ชุดราตรี', icon: '👗', count: 150, color: 'from-pink-200 to-rose-200' },
    { name: 'ชุดทำงาน', icon: '👔', count: 200, color: 'from-blue-200 to-indigo-200' },
    { name: 'ชุดแคชชวล', icon: '👕', count: 300, color: 'from-green-200 to-emerald-200' },
    { name: 'กระเป๋า', icon: '👜', count: 100, color: 'from-purple-200 to-violet-200' },
    { name: 'เครื่องประดับ', icon: '💍', count: 80, color: 'from-yellow-200 to-amber-200' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar */}
          <div className="flex justify-between items-center py-2 text-sm text-gray-600">
            <div className="flex items-center space-x-4">
              <span className="font-medium">EN | TH</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="hover:text-green-600 transition-colors">
                เข้าสู่ระบบ
              </Link>
              <button className="relative p-2 text-gray-600 hover:text-green-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                  <path d="M3 6h18"></path>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </button>
              <button className="relative p-2 text-gray-600 hover:text-green-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Main Header */}
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Ω</span>
              </div>
              <Link href="/">
                <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent cursor-pointer">
                  OneCloset
                </span>
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/promotion" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">
                PROMOTION
              </Link>
              <Link href="/for-you" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">
                ONE FOR YOU
              </Link>
              <Link href="/new" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">
                สินค้าใหม่
              </Link>
              <Link href="/products" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">
                สินค้า
              </Link>
              <Link href="/mens" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">
                ชุดผู้ชาย
              </Link>
              <Link href="/accessories" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">
                เครื่องประดับ
              </Link>
              <Link href="/designers" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">
                ดีไซเนอร์
              </Link>
              <Link href="/occasions" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">
                โอกาสพิเศษ
              </Link>
              <Link href="/lookbook" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">
                ลุคบุ๊ค
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">
                บล็อก
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Product Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100 group cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center mb-4 relative overflow-hidden">
                    <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
                      {product.image}
                    </div>
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      {product.discount} OFF
                    </div>
                    <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      ⭐ {product.rating}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
                    <p className="text-sm text-green-600 font-medium mb-2">{product.designer}</p>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-green-600">฿{product.price}</span>
                        <span className="text-sm text-gray-400 line-through">฿{product.originalPrice}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{product.reviews} รีวิว</span>
                      <span className="text-green-600 font-medium">เช่าได้เลย</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100 sticky top-24">
              {/* Rental Period Tabs */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">ระยะเวลาเช่า</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedRentalPeriod('4')}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedRentalPeriod === '4'
                        ? 'bg-green-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    4 วัน
                  </button>
                  <button
                    onClick={() => setSelectedRentalPeriod('8')}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedRentalPeriod === '8'
                        ? 'bg-green-500 text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    8 วัน
                  </button>
                </div>
              </div>

              {/* Search Form */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">วันที่จัดส่ง</label>
                  <input
                    type="date"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ไซส์</label>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">เลือกไซส์</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </select>
                </div>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  ค้นหา
                </button>
              </div>

              {/* Member Club */}
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6 text-center">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                  WELCOME TO ONECLOSET
                </h3>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Member Club</h4>
                <p className="text-gray-600 text-sm mb-4">
                  สมาชิกพิเศษ รับส่วนลดสูงสุด 50% และสิทธิพิเศษมากมาย
                </p>
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">หมวดหมู่ยอดนิยม</h2>
            <p className="text-lg text-gray-600">เลือกจากหมวดหมู่ที่หลากหลาย</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100 group cursor-pointer transform hover:-translate-y-2">
                <div className={`aspect-square bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                  <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} ชุด</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Promotion Banner */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">NEW PRICE ADJUSTMENTS WITH NEW STYLES IN STORE</h2>
            <p className="text-lg mb-6 opacity-90">
              ราคาใหม่ที่ปรับปรุงแล้ว พร้อมสไตล์ใหม่ในร้าน
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              ดูสินค้าใหม่
            </button>
          </div>
        </section>

        {/* Service Description */}
        <section className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            บริการเช่าชุดราตรี ชุดออกงาน เสื้อผ้าแบรนด์เนม
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            เช่าชุดง่ายๆเพียง 3 ขั้นตอน เช่า-ใส่-ส่งคืน
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">1. เช่า</h4>
              <p className="text-gray-600">เลือกชุดที่ชอบและจองวันจัดส่ง</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👗</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">2. ใส่</h4>
              <p className="text-gray-600">รับชุดที่หน้าบ้านและสวมใส่ได้เลย</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">3. ส่งคืน</h4>
              <p className="text-gray-600">ส่งคืนชุดได้ง่ายๆ ไม่มีค่าใช้จ่ายเพิ่ม</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">Ω</span>
                </div>
                <span className="text-xl font-bold">OneCloset</span>
              </div>
              <p className="text-gray-400">
                แพลตฟอร์มเช่าเสื้อผ้าแบรนด์เนมออนไลน์ที่ดีที่สุดในประเทศไทย
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">บริการ</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/products" className="hover:text-white transition-colors">เช่าเสื้อผ้า</Link></li>
                <li><Link href="/how-it-works" className="hover:text-white transition-colors">วิธีการเช่า</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">เงื่อนไขการเช่า</Link></li>
                <li><Link href="/shipping" className="hover:text-white transition-colors">การจัดส่ง</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">บริษัท</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">เกี่ยวกับเรา</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">ติดต่อเรา</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">ร่วมงานกับเรา</Link></li>
                <li><Link href="/news" className="hover:text-white transition-colors">ข่าวสาร</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">ติดต่อ</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📧 info@onecloset.com</li>
                <li>📞 02-123-4567</li>
                <li>📍 กรุงเทพมหานคร, ประเทศไทย</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 OneCloset. สงวนลิขสิทธิ์ทุกประการ</p>
          </div>
        </div>
      </footer>

      {/* Floating LINE Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button className="w-14 h-14 bg-red-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 flex items-center justify-center">
          <span className="font-bold text-sm">LINE</span>
        </button>
      </div>
    </div>
  );
}
