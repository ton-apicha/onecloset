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
  CreditCard,
  Truck,
  Shield,
  Clock,
  Star,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-lavender/10 to-emerald/10 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-dark-gray mb-6">วิธีการเช่า</h1>
            <p className="text-xl text-gray-600 mb-8">
              เรียนรู้วิธีการเช่าเสื้อผ้าผ่าน OneCloset ใน 4 ขั้นตอนง่ายๆ
            </p>
            <Link href="/rent">
              <Button size="lg">
                เริ่มเช่าเลย
              </Button>
            </Link>
          </div>
        </section>

        {/* Step by Step Process */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Step 1 */}
              <div className="order-1 lg:order-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-lavender rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    1
                  </div>
                  <h2 className="text-2xl font-bold text-dark-gray">ค้นหาและเลือก</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  ค้นหาชุดที่คุณต้องการจากคอลเลกชันมากมายของเรา ใช้ฟิลเตอร์เพื่อหาไซส์ สี และแบรนด์ที่ต้องการ
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald mr-3" />
                    <span>ค้นหาจากหมวดหมู่ต่างๆ</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald mr-3" />
                    <span>ดูรายละเอียดและรูปภาพ</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald mr-3" />
                    <span>ตรวจสอบความพร้อมใช้งาน</span>
                  </li>
                </ul>
              </div>
              <div className="order-2 lg:order-2">
                <Card className="p-8">
                  <div className="w-16 h-16 bg-lavender/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-8 h-8 text-lavender" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4">ค้นหาสินค้า</h3>
                  <p className="text-gray-600 text-center">
                    ใช้แถบค้นหาหรือเลือกจากหมวดหมู่เพื่อหาเสื้อผ้าที่ต้องการ
                  </p>
                </Card>
              </div>

              {/* Step 2 */}
              <div className="order-4 lg:order-3">
                <Card className="p-8">
                  <div className="w-16 h-16 bg-lavender/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-8 h-8 text-lavender" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4">เลือกวันที่</h3>
                  <p className="text-gray-600 text-center">
                    เลือกวันที่ต้องการเช่าและวันที่ส่งคืน
                  </p>
                </Card>
              </div>
              <div className="order-3 lg:order-4">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-lavender rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    2
                  </div>
                  <h2 className="text-2xl font-bold text-dark-gray">จองและชำระเงิน</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  เลือกวันที่ต้องการเช่าและชำระเงินผ่านระบบที่ปลอดภัยของเรา
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald mr-3" />
                    <span>เลือกวันที่เช่าและส่งคืน</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald mr-3" />
                    <span>ชำระเงินผ่านระบบที่ปลอดภัย</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald mr-3" />
                    <span>รับการยืนยันการจอง</span>
                  </li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="order-5 lg:order-5">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-lavender rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    3
                  </div>
                  <h2 className="text-2xl font-bold text-dark-gray">รับและสวมใส่</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  รับชุดที่บ้านและสวมใส่ได้เลย เราจัดส่งให้คุณถึงหน้าบ้าน
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald mr-3" />
                    <span>จัดส่งถึงหน้าบ้าน</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald mr-3" />
                    <span>ตรวจสอบสินค้าเมื่อได้รับ</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald mr-3" />
                    <span>สวมใส่และถ่ายรูปสวยๆ</span>
                  </li>
                </ul>
              </div>
              <div className="order-6 lg:order-6">
                <Card className="p-8">
                  <div className="w-16 h-16 bg-lavender/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Package className="w-8 h-8 text-lavender" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4">รับสินค้า</h3>
                  <p className="text-gray-600 text-center">
                    รับชุดที่บ้านและสวมใส่ได้เลย
                  </p>
                </Card>
              </div>

              {/* Step 4 */}
              <div className="order-8 lg:order-7">
                <Card className="p-8">
                  <div className="w-16 h-16 bg-lavender/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <RotateCcw className="w-8 h-8 text-lavender" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4">ส่งคืน</h3>
                  <p className="text-gray-600 text-center">
                    ส่งคืนชุดหลังจากใช้งานเสร็จ
                  </p>
                </Card>
              </div>
              <div className="order-7 lg:order-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-lavender rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    4
                  </div>
                  <h2 className="text-2xl font-bold text-dark-gray">ส่งคืน</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  ส่งคืนชุดหลังจากใช้งานเสร็จ ง่ายและสะดวก
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald mr-3" />
                    <span>แพ็คชุดกลับในกล่องเดิม</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald mr-3" />
                    <span>นัดรับจากหน้าบ้าน</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald mr-3" />
                    <span>เสร็จสิ้นการเช่า</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-light-gray">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark-gray mb-4">ทำไมต้องเลือก OneCloset?</h2>
              <p className="text-gray-600">
                ประโยชน์มากมายที่คุณจะได้รับจากการเช่าเสื้อผ้า
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: CreditCard,
                  title: 'ประหยัดเงิน',
                  description: 'ไม่ต้องซื้อชุดแพงๆ ใส่ครั้งเดียวแล้วส่งคืน'
                },
                {
                  icon: Truck,
                  title: 'จัดส่งฟรี',
                  description: 'จัดส่งและรับคืนฟรีถึงหน้าบ้าน'
                },
                {
                  icon: Shield,
                  title: 'ปลอดภัย',
                  description: 'ชุดทุกชิ้นผ่านการทำความสะอาดและตรวจสอบคุณภาพ'
                },
                {
                  icon: Clock,
                  title: 'ประหยัดเวลา',
                  description: 'ไม่ต้องเสียเวลาไปช้อปปิ้งหรือซักรีด'
                },
                {
                  icon: Star,
                  title: 'แบรนด์เนม',
                  description: 'ชุดแบรนด์เนมคุณภาพดี ราคาไม่แพง'
                },
                {
                  icon: CheckCircle,
                  title: 'ง่ายดาย',
                  description: 'ใช้งานง่าย ผ่านแอปหรือเว็บไซต์'
                }
              ].map((benefit, index) => (
                <Card key={index} className="text-center">
                  <div className="w-16 h-16 bg-lavender/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-lavender" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark-gray mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark-gray mb-4">คำถามที่พบบ่อย</h2>
              <p className="text-gray-600">
                คำตอบสำหรับคำถามที่ลูกค้าสงสัยบ่อย
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: 'ต้องเช่าอย่างน้อยกี่วัน?',
                  answer: 'สามารถเช่าได้ตั้งแต่ 1 วันขึ้นไป ขึ้นอยู่กับความต้องการของคุณ'
                },
                {
                  question: 'มีค่าจัดส่งหรือไม่?',
                  answer: 'ไม่มีค่าจัดส่ง เราจัดส่งและรับคืนฟรีถึงหน้าบ้าน'
                },
                {
                  question: 'ชุดสะอาดหรือไม่?',
                  answer: 'ชุดทุกชิ้นผ่านการทำความสะอาดและตรวจสอบคุณภาพก่อนส่งให้คุณ'
                },
                {
                  question: 'สามารถยกเลิกการจองได้หรือไม่?',
                  answer: 'สามารถยกเลิกได้ก่อนวันที่จัดส่ง 24 ชั่วโมง'
                },
                {
                  question: 'มีประกันความเสียหายหรือไม่?',
                  answer: 'มีประกันความเสียหายเบื้องต้น แต่หากเสียหายรุนแรงอาจมีค่าใช้จ่ายเพิ่มเติม'
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
            <h2 className="text-3xl font-bold mb-4">พร้อมเริ่มเช่าแล้วหรือยัง?</h2>
            <p className="text-xl mb-8 opacity-90">
              เริ่มต้นการเดินทางแฟชั่นของคุณกับ OneCloset วันนี้
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/rent">
                <Button variant="outline" size="lg" className="bg-white text-lavender hover:bg-gray-50">
                  เริ่มเช่าเลย
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-lavender">
                  ติดต่อเรา
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
