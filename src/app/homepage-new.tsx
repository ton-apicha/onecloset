'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HomePageNew() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('new');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const featuredCollections = {
    new: [
      {
        id: 1,
        name: 'Azaelea Lace Dress',
        brand: 'Self-Portrait',
        price: '1,800',
        image: '👗',
        rating: 4.9,
        reviews: 124
      },
      {
        id: 2,
        name: 'Silk Evening Gown',
        brand: 'Reformation',
        price: '2,500',
        image: '👗',
        rating: 4.8,
        reviews: 89
      },
      {
        id: 3,
        name: 'Velvet Cocktail Dress',
        brand: 'Zimmermann',
        price: '2,200',
        image: '👗',
        rating: 4.7,
        reviews: 156
      },
      {
        id: 4,
        name: 'Floral Maxi Dress',
        brand: 'For Love & Lemons',
        price: '1,900',
        image: '👗',
        rating: 4.6,
        reviews: 78
      }
    ],
    popular: [
      {
        id: 5,
        name: 'Classic Black Dress',
        brand: 'LBD Collection',
        price: '1,500',
        image: '👗',
        rating: 4.9,
        reviews: 203
      },
      {
        id: 6,
        name: 'Summer Boho Dress',
        brand: 'Free People',
        price: '1,600',
        image: '👗',
        rating: 4.8,
        reviews: 167
      },
      {
        id: 7,
        name: 'Elegant Evening Dress',
        brand: 'Ted Baker',
        price: '2,800',
        image: '👗',
        rating: 4.9,
        reviews: 134
      },
      {
        id: 8,
        name: 'Casual Chic Dress',
        brand: 'Anthropologie',
        price: '1,400',
        image: '👗',
        rating: 4.7,
        reviews: 98
      }
    ],
    bridesmaid: [
      {
        id: 9,
        name: 'Bridesmaid Dress - Rose Gold',
        brand: 'Bridesmaid Collection',
        price: '1,200',
        image: '👗',
        rating: 4.8,
        reviews: 89
      },
      {
        id: 10,
        name: 'Bridesmaid Dress - Sage Green',
        brand: 'Bridesmaid Collection',
        price: '1,200',
        image: '👗',
        rating: 4.7,
        reviews: 76
      },
      {
        id: 11,
        name: 'Bridesmaid Dress - Navy Blue',
        brand: 'Bridesmaid Collection',
        price: '1,200',
        image: '👗',
        rating: 4.8,
        reviews: 92
      },
      {
        id: 12,
        name: 'Bridesmaid Dress - Blush Pink',
        brand: 'Bridesmaid Collection',
        price: '1,200',
        image: '👗',
        rating: 4.9,
        reviews: 105
      }
    ]
  };

  const testimonials = [
    {
      id: 1,
      quote: "ชุดสวยมาก สะอาดเหมือนใหม่เลยค่ะ ประทับใจสุดๆ การส่งคืนก็ง่ายมากๆ ไว้ใช้บริการอีกแน่นอนค่ะ!",
      name: "คุณอลิสา พ.",
      rating: 5
    },
    {
      id: 2,
      quote: "เป็นครั้งแรกที่เช่าชุด รู้สึกกังวลตอนแรก แต่พอได้ใช้จริงแล้วประทับใจมาก ชุดสวยและไซส์พอดีเป๊ะ!",
      name: "คุณนิดา ส.",
      rating: 5
    },
    {
      id: 3,
      quote: "บริการดีมาก ชุดมาถึงตรงเวลา สะอาดและสวยงาม ราคาก็คุ้มค่ามาก จะแนะนำเพื่อนๆ ให้ใช้บริการค่ะ",
      name: "คุณมณี ก.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1: Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-100 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            ตู้เสื้อผ้าในฝัน
            <br />
            <span className="text-emerald-600">อยู่แค่ปลายนิ้ว</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            เช่าชุดดีไซเนอร์และแบรนด์เนมกว่า 10,000+ สไตล์ สำหรับทุกโอกาสพิเศษของคุณ
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="คุณกำลังมองหาชุดสำหรับงานอะไร?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-full focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 bg-white shadow-lg"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                ค้นหา
              </button>
            </div>
          </form>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products?category=wedding" className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
              ชุดออกงานแต่งงาน
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/products?category=bag" className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
              กระเป๋าแบรนด์เนม
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/products?category=new" className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
              มาใหม่ล่าสุด
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: How It Works */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            เช่าสไตล์ที่ใช่ ใน 4 ขั้นตอนง่ายๆ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. ค้นพบ (Discover)</h3>
              <p className="text-gray-600 leading-relaxed">
                เลือกชมสไตล์ที่หลากหลายจากตู้เสื้อผ้าของร้านค้าและแฟชั่นนิสต้าทั่วประเทศ
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. จอง (Reserve)</h3>
              <p className="text-gray-600 leading-relaxed">
                เลือกวันที่ต้องการใช้งานและชำระเงินอย่างปลอดภัยผ่านระบบของเรา
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. สวมใส่ (Wear)</h3>
              <p className="text-gray-600 leading-relaxed">
                รับชุดสวยที่ผ่านการทำความสะอาดและตรวจสอบคุณภาพ พร้อมสำหรับวันสำคัญของคุณ
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4. ส่งคืน (Return)</h3>
              <p className="text-gray-600 leading-relaxed">
                ส่งคืนง่ายๆ ด้วยชุดสำหรับส่งคืนที่เราเตรียมไว้ให้ ไม่ต้องซักรีด
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Featured Collections */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            คอลเลกชันแนะนำสำหรับคุณ
          </h2>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-1 bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setActiveTab('new')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === 'new'
                    ? 'bg-white text-emerald-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                มาใหม่ล่าสุด
              </button>
              <button
                onClick={() => setActiveTab('popular')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === 'popular'
                    ? 'bg-white text-emerald-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                ได้รับความนิยมสูงสุด
              </button>
              <button
                onClick={() => setActiveTab('bridesmaid')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === 'bridesmaid'
                    ? 'bg-white text-emerald-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                สำหรับเพื่อนเจ้าสาว
              </button>
            </div>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCollections[activeTab as keyof typeof featuredCollections].map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-4 relative overflow-hidden">
                  <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
                    {product.image}
                  </div>
                  <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5 text-gray-400 hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <p className="text-sm text-emerald-600 font-medium mb-1">{product.brand}</p>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">฿{product.price} / 4 วัน</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Trust & Credibility */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            มั่นใจทุกครั้งที่เช่ากับ OneCloset
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Column 1: Features */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">OneCloset Guarantee</h3>
                  <p className="text-gray-600 leading-relaxed">
                    เรารับประกันสินค้าตรงปกและความสะอาดระดับมืออาชีพทุกชิ้น
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Trust Score System</h3>
                  <p className="text-gray-600 leading-relaxed">
                    เช่าอย่างสบายใจกับร้านค้าและผู้เช่าที่ผ่านการตรวจสอบและมีคะแนนความน่าเชื่อถือ
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Fit Predictor</h3>
                  <p className="text-gray-600 leading-relaxed">
                    เทคโนโลยี AI ช่วยทำนายความพอดี ลดความกังวลเรื่องไซส์
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Testimonials */}
            <div className="space-y-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.quote}"</p>
                  <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Shop with Us */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            เปลี่ยนตู้เสื้อผ้าของคุณให้เป็นรายได้
          </h2>
          <p className="text-xl mb-8 leading-relaxed opacity-90">
            เข้าร่วมกับร้านค้าและแฟชั่นนิสต้านับพันที่สร้างรายได้เสริมอย่างยั่งยืนกับ OneCloset เรามีเครื่องมือจัดการที่ช่วยให้การปล่อยเช่าเป็นเรื่องง่ายและปลอดภัย
          </p>
          <Link href="/for-shops">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
              เริ่มต้นเป็นพาร์ทเนอร์
            </button>
          </Link>
        </div>
      </section>

      {/* SECTION 6: Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1: Logo and Social */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Ω</span>
                </div>
                <span className="text-2xl font-bold">OneCloset</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                ตู้เสื้อผ้าตู้เดียวที่คุณต้องการ เช่าชุดดีไซเนอร์และแบรนด์เนมสำหรับทุกโอกาสพิเศษ
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: OneCloset */}
            <div>
              <h3 className="font-semibold mb-4">OneCloset</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">เกี่ยวกับเรา</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ร่วมงานกับเรา</a></li>
                <li><a href="#" className="hover:text-white transition-colors">สำหรับสื่อ</a></li>
              </ul>
            </div>

            {/* Column 3: Help */}
            <div>
              <h3 className="font-semibold mb-4">ช่วยเหลือ</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">วิธีการเช่า</a></li>
                <li><a href="#" className="hover:text-white transition-colors">คำถามที่พบบ่อย (FAQ)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ติดต่อเรา</a></li>
                <li><a href="#" className="hover:text-white transition-colors">การจัดการข้อพิพาท</a></li>
              </ul>
            </div>

            {/* Column 4: Legal */}
            <div>
              <h3 className="font-semibold mb-4">กฎหมาย</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">ข้อตกลงและเงื่อนไข</a></li>
                <li><a href="#" className="hover:text-white transition-colors">นโยบายความเป็นส่วนตัว</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 OneCloset Thailand. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
