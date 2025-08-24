import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { 
  TrendingUp,
  Calendar,
  Shield,
  DollarSign,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  MessageCircle,
  Clock,
  Zap
} from 'lucide-react'
import Link from 'next/link'

export default function ForShopsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-lavender/10 to-emerald/10 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-dark-gray mb-6">
                  เปลี่ยนตู้เสื้อผ้าของคุณให้เป็น
                  <span className="block text-lavender">ธุรกิจที่เติบโต</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  โดยไม่ต้องวุ่นวายกับการจัดการ จัดการสต็อก หรือการจัดส่ง 
                  เราเป็น Growth OS ที่จะช่วยให้ร้านค้าของคุณเติบโตอย่างยั่งยืน
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/partner/signup">
                    <Button size="lg" className="w-full sm:w-auto">
                      เริ่มต้นใช้งานฟรี
                    </Button>
                  </Link>
                  <Link href="#how-it-works">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      ดูวิธีการทำงาน
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-lg shadow-xl p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-lavender/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-lavender" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Dashboard ตัวอย่าง</h3>
                    <p className="text-gray-600 mb-4">ดูรายได้และสถิติการขายของคุณ</p>
                    <div className="space-y-3 text-left">
                      <div className="flex justify-between">
                        <span>รายได้เดือนนี้</span>
                        <span className="font-semibold text-emerald">฿45,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>สินค้าที่เช่า</span>
                        <span className="font-semibold">23 ชิ้น</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ลูกค้าใหม่</span>
                        <span className="font-semibold text-lavender">+12</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark-gray mb-4">ปัญหาที่ร้านค้าเจอ</h2>
              <p className="text-gray-600">
                เราเข้าใจปัญหาที่ร้านค้าแฟชั่นต้องเจอ และมีวิธีแก้ไขให้คุณ
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: MessageCircle,
                  title: 'แชทเยอะ',
                  description: 'ต้องตอบลูกค้าหลายคนพร้อมกัน จัดการการจองซ้อนซ้อน'
                },
                {
                  icon: Clock,
                  title: 'จัดการสต็อกวุ่นวาย',
                  description: 'ไม่รู้ว่าชุดไหนเช่าได้เมื่อไหร่ ต้องเช็คหลายที่'
                },
                {
                  icon: DollarSign,
                  title: 'รายได้ไม่แน่นอน',
                  description: 'ขายไม่ได้ก็ไม่มีเงิน ต้องรอลูกค้าเข้ามาเอง'
                }
              ].map((problem, index) => (
                <Card key={index} className="text-center border-red-200 bg-red-50">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <problem.icon className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark-gray mb-2">{problem.title}</h3>
                  <p className="text-gray-600">{problem.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 bg-light-gray">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark-gray mb-4">The Growth OS</h2>
              <p className="text-gray-600">
                ระบบที่ออกแบบมาเพื่อแก้ปัญหาทุกอย่างที่ร้านค้าเจอ
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Calendar,
                  title: 'ปฏิทินอัตโนมัติ',
                  description: 'จัดการการจองและความพร้อมใช้งานอัตโนมัติ ไม่มีจองซ้อน'
                },
                {
                  icon: BarChart3,
                  title: 'จัดการสต็อก',
                  description: 'ดูสถานะสินค้าทั้งหมดในที่เดียว อัพเดทแบบเรียลไทม์'
                },
                {
                  icon: Shield,
                  title: 'รับเงินปลอดภัย',
                  description: 'ระบบชำระเงินที่ปลอดภัย รับเงินอัตโนมัติเมื่อลูกค้าชำระ'
                },
                {
                  icon: Users,
                  title: 'ลูกค้าใหม่',
                  description: 'เข้าถึงลูกค้าใหม่ผ่านแพลตฟอร์มของเรา'
                },
                {
                  icon: Zap,
                  title: 'จัดส่งอัตโนมัติ',
                  description: 'เราเป็นคนจัดส่งและรับคืนให้ ไม่ต้องวุ่นวาย'
                },
                {
                  icon: TrendingUp,
                  title: 'รายได้เพิ่มขึ้น',
                  description: 'ร้านค้าของเรามีรายได้เพิ่มขึ้นเฉลี่ย 40% ต่อเดือน'
                }
              ].map((solution, index) => (
                <Card key={index} className="text-center border-emerald-200 bg-emerald-50">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <solution.icon className="w-8 h-8 text-emerald" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark-gray mb-2">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark-gray mb-4">3 ขั้นตอนง่ายๆ</h2>
              <p className="text-gray-600">
                เริ่มต้นธุรกิจของคุณกับ OneCloset ได้ในไม่กี่นาที
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'สมัคร',
                  description: 'สมัครเป็นพาร์ทเนอร์ฟรี ไม่มีค่าแรกเข้า',
                  details: [
                    'กรอกข้อมูลร้านค้า',
                    'อัพโหลดเอกสาร',
                    'รอการอนุมัติ (24-48 ชม.)'
                  ]
                },
                {
                  step: '2',
                  title: 'ลงสินค้า',
                  description: 'อัพโหลดสินค้าของคุณ พร้อมรูปภาพและรายละเอียด',
                  details: [
                    'ถ่ายรูปสินค้า',
                    'ใส่รายละเอียดและราคา',
                    'ตั้งค่าความพร้อมใช้งาน'
                  ]
                },
                {
                  step: '3',
                  title: 'สร้างรายได้',
                  description: 'เริ่มรับเงินจากลูกค้าทันทีที่สินค้าถูกเช่า',
                  details: [
                    'ลูกค้าจองสินค้า',
                    'เราเป็นคนจัดส่ง',
                    'รับเงินอัตโนมัติ'
                  ]
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-lavender rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-dark-gray mb-4">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.description}</p>
                  <ul className="space-y-2 text-left">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-emerald mr-2" />
                        <span className="text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-light-gray">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark-gray mb-4">โมเดลรายได้</h2>
              <p className="text-gray-600">
                โปร่งใส ยุติธรรม และเป็นประโยชน์ต่อร้านค้า
              </p>
            </div>
            
            <Card className="max-w-2xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-dark-gray mb-4">ไม่มีค่าแรกเข้า</h3>
                <p className="text-gray-600 mb-6">
                  ไม่มีค่าสมาชิกรายเดือน ไม่มีค่าธรรมเนียมซ่อนเร้น
                </p>
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-6">
                  <p className="text-lg font-semibold text-emerald mb-2">
                    เราเก็บค่าคอมมิชชั่นก็ต่อเมื่อคุณมีรายได้
                  </p>
                  <p className="text-gray-600">
                    คอมมิชชั่น 15% จากยอดเช่า (รวมภาษีแล้ว)
                  </p>
                </div>
                <div className="space-y-3 text-left">
                  <div className="flex justify-between">
                    <span>✅ ไม่มีค่าแรกเข้า</span>
                    <span className="font-semibold text-emerald">ฟรี</span>
                  </div>
                  <div className="flex justify-between">
                    <span>✅ ไม่มีค่าสมาชิกรายเดือน</span>
                    <span className="font-semibold text-emerald">ฟรี</span>
                  </div>
                  <div className="flex justify-between">
                    <span>✅ ไม่มีค่าจัดส่ง</span>
                    <span className="font-semibold text-emerald">ฟรี</span>
                  </div>
                  <div className="flex justify-between">
                    <span>✅ ไม่มีค่าบริการ</span>
                    <span className="font-semibold text-emerald">ฟรี</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark-gray mb-4">เสียงจากร้านค้า</h2>
              <p className="text-gray-600">
                ร้านค้าที่เข้าร่วมกับเราและประสบความสำเร็จ
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'ร้านแฟชั่นสวย',
                  owner: 'คุณสมหญิง',
                  content: 'รายได้เพิ่มขึ้น 50% ในเดือนแรก รายได้เพิ่มขึ้น 50% ในเดือนแรก รายได้เพิ่มขึ้น 50% ในเดือนแรก',
                  rating: 5,
                  stats: 'รายได้เพิ่ม 50%'
                },
                {
                  name: 'ร้านเสื้อผ้าสวย',
                  owner: 'คุณธนวัฒน์',
                  content: 'ระบบใช้งานง่ายมาก ไม่ต้องวุ่นวายกับการจัดการสต็อกหรือการจัดส่ง',
                  rating: 5,
                  stats: 'ลูกค้าเพิ่ม 30%'
                },
                {
                  name: 'ร้านแฟชั่นดี',
                  owner: 'คุณมณี',
                  content: 'ลูกค้าใหม่เข้ามาตลอด ระบบจัดการดีมาก แนะนำเลย',
                  rating: 5,
                  stats: 'รายได้เพิ่ม 40%'
                }
              ].map((testimonial, index) => (
                <Card key={index}>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-dark-gray">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 mb-2">{testimonial.owner}</p>
                    <p className="text-sm font-semibold text-emerald">{testimonial.stats}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-light-gray">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark-gray mb-4">คำถามที่พบบ่อย</h2>
              <p className="text-gray-600">
                คำตอบสำหรับคำถามที่ร้านค้าสงสัยบ่อย
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: 'ต้องมีร้านค้าจริงหรือไม่?',
                  answer: 'ไม่จำเป็นต้องมีร้านค้าจริง สามารถเป็นร้านค้าออนไลน์หรือมีสินค้าส่วนตัวก็ได้'
                },
                {
                  question: 'มีค่าธรรมเนียมอะไรบ้าง?',
                  answer: 'ไม่มีค่าธรรมเนียมใดๆ นอกจากคอมมิชชั่น 15% เมื่อมีรายได้เท่านั้น'
                },
                {
                  question: 'ต้องจัดการการจัดส่งเองหรือไม่?',
                  answer: 'ไม่ต้อง เราจะจัดการการจัดส่งและรับคืนให้ทั้งหมด'
                },
                {
                  question: 'สามารถยกเลิกได้เมื่อไหร่ก็ได้หรือไม่?',
                  answer: 'ได้ สามารถยกเลิกได้เมื่อไหร่ก็ได้ ไม่มีข้อผูกมัด'
                },
                {
                  question: 'มีลูกค้าให้หรือไม่?',
                  answer: 'มี เรามีลูกค้าที่ใช้งานแพลตฟอร์มของเราอยู่แล้ว และจะแนะนำร้านค้าของคุณให้'
                }
              ].map((faq, index) => (
                <Card key={index}>
                  <h3 className="text-lg font-semibold text-dark-gray mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-lavender to-emerald text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">พร้อมเริ่มธุรกิจแล้วหรือยัง?</h2>
            <p className="text-xl mb-8 opacity-90">
              เข้าร่วมกับเราและเริ่มสร้างรายได้จากตู้เสื้อผ้าของคุณวันนี้
            </p>
            <Link href="/partner/signup">
              <Button variant="outline" size="lg" className="bg-white text-lavender hover:bg-gray-50">
                สมัครเป็นพาร์ทเนอร์เลย
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
