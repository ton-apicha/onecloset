import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { 
  Search, 
  Calendar, 
  Package, 
  RotateCcw,
  Star,
  ArrowRight,
  Heart
} from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-lavender/10 to-emerald/10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-dark-gray mb-6">
                ตู้เสื้อผ้าในฝัน
                <span className="block text-lavender">แค่ปลายนิ้ว</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                เช่าเสื้อผ้าแบรนด์เนม ใส่ครั้งเดียว ส่งคืนง่าย
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="ค้นหาชุดที่คุณต้องการ..."
                    className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent"
                  />
                  <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    ค้นหา
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark-gray mb-4">วิธีการเช่า</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                เพียง 4 ขั้นตอนง่ายๆ คุณก็สามารถเช่าเสื้อผ้าที่ชอบได้แล้ว
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Search,
                  title: 'ค้นหา',
                  description: 'เลือกชุดที่ชอบจากคอลเลกชันมากมาย'
                },
                {
                  icon: Calendar,
                  title: 'จอง',
                  description: 'เลือกวันที่ต้องการเช่าและชำระเงิน'
                },
                {
                  icon: Package,
                  title: 'สวมใส่',
                  description: 'รับชุดที่บ้านและสวมใส่ได้เลย'
                },
                {
                  icon: RotateCcw,
                  title: 'ส่งคืน',
                  description: 'ส่งกลับหลังใช้งานเสร็จ'
                }
              ].map((step, index) => (
                <Card key={index} className="text-center">
                  <div className="w-16 h-16 bg-lavender/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-lavender" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark-gray mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="py-16 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark-gray mb-4">คอลเลกชันแนะนำ</h2>
              <p className="text-gray-600">
                ค้นพบคอลเลกชันที่คัดสรรมาให้คุณโดยเฉพาะ
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'New Arrivals',
                  subtitle: 'มาใหม่ล่าสุด',
                  image: '/images/collections/new-arrivals.jpg',
                  href: '/rent/new-arrivals'
                },
                {
                  title: 'Wedding Guest Edit',
                  subtitle: 'ชุดไปงานแต่ง',
                  image: '/images/collections/wedding.jpg',
                  href: '/rent/collections/wedding'
                },
                {
                  title: 'Top Rated Items',
                  subtitle: 'สินค้าขายดี',
                  image: '/images/collections/top-rated.jpg',
                  href: '/rent/trending'
                }
              ].map((collection, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 mb-4">
                    <div className="w-full h-48 bg-gradient-to-br from-lavender/20 to-emerald/20 flex items-center justify-center">
                      <span className="text-gray-500">รูปภาพ {collection.title}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-dark-gray mb-1">{collection.title}</h3>
                  <p className="text-gray-600 mb-4">{collection.subtitle}</p>
                  <Link href={collection.href}>
                    <Button variant="outline" className="w-full">
                      ดูคอลเลกชัน
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Shop by Category */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark-gray mb-4">เลือกตามหมวดหมู่</h2>
              <p className="text-gray-600">
                ค้นหาสิ่งที่คุณต้องการได้อย่างรวดเร็ว
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: 'ชุดราตรี', icon: '👗', href: '/rent/categories/evening-dresses' },
                { name: 'กระเป๋า', icon: '👜', href: '/rent/categories/bags' },
                { name: 'เครื่องประดับ', icon: '💎', href: '/rent/categories/jewelry' },
                { name: 'รองเท้า', icon: '👠', href: '/rent/categories/shoes' },
                { name: 'อุปกรณ์เสริม', icon: '🕶️', href: '/rent/categories/accessories' }
              ].map((category, index) => (
                <Link key={index} href={category.href}>
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="font-medium text-dark-gray">{category.name}</h3>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark-gray mb-4">เสียงจากลูกค้า</h2>
              <p className="text-gray-600">
                ลูกค้าของเราพูดถึงประสบการณ์การใช้งาน OneCloset
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'สมหญิง ใจดี',
                  role: 'ผู้เช่า',
                  content: 'ใช้งานง่ายมาก ชุดสวยและคุณภาพดี ราคาไม่แพงเลย',
                  rating: 5
                },
                {
                  name: 'ธนวัฒน์ รักแฟชั่น',
                  role: 'ผู้เช่า',
                  content: 'สะดวกมาก ไม่ต้องซื้อชุดแพงๆ ใส่ครั้งเดียวแล้วส่งคืน',
                  rating: 5
                },
                {
                  name: 'ร้านแฟชั่นสวย',
                  role: 'ร้านค้า',
                  content: 'รายได้เพิ่มขึ้นมาก ระบบจัดการง่าย ดีมากๆ',
                  rating: 5
                }
              ].map((testimonial, index) => (
                <Card key={index}>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-dark-gray">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* For Shops CTA */}
        <section className="py-16 bg-gradient-to-r from-lavender to-emerald text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">มาสร้างรายได้จากตู้เสื้อผ้าของคุณ</h2>
            <p className="text-xl mb-8 opacity-90">
              เปลี่ยนเสื้อผ้าที่ไม่ได้ใส่ให้เป็นเงิน
            </p>
            <Link href="/for-shops">
              <Button variant="outline" size="lg" className="bg-white text-lavender hover:bg-gray-50">
                ดูรายละเอียด
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
