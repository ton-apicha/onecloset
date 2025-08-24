'use client'

import React, { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { 
  Home,
  Package,
  Heart,
  User,
  Settings,
  Calendar,
  Star,
  TrendingUp,
  ShoppingBag,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Plus
} from 'lucide-react'
import Link from 'next/link'

// Mock data - replace with API calls
const mockUser = {
  id: '1',
  name: 'สมหญิง ใจดี',
  email: 'somying@example.com',
  trustScore: 95,
  avatar: '/images/avatars/user1.jpg'
}

const mockStats = {
  totalRentals: 12,
  activeRentals: 2,
  totalSpent: 45000,
  wishlistItems: 8,
  reviews: 5
}

const mockRecentRentals = [
  {
    id: '1',
    productName: 'ชุดราตรีสีดำ Zara',
    productImage: '/images/products/dress1.jpg',
    startDate: '2024-01-15',
    endDate: '2024-01-19',
    status: 'active',
    price: 6000
  },
  {
    id: '2',
    productName: 'กระเป๋าแบรนด์เนม Gucci',
    productImage: '/images/products/bag1.jpg',
    startDate: '2024-01-10',
    endDate: '2024-01-12',
    status: 'completed',
    price: 4000
  },
  {
    id: '3',
    productName: 'ชุดไปงานแต่ง H&M',
    productImage: '/images/products/dress2.jpg',
    startDate: '2024-01-05',
    endDate: '2024-01-07',
    status: 'completed',
    price: 2400
  }
]

const mockWishlist = [
  {
    id: '1',
    productName: 'ชุดราตรีสีแดง',
    productImage: '/images/products/dress3.jpg',
    price: 1800,
    brand: 'Zara'
  },
  {
    id: '2',
    productName: 'กระเป๋าแบรนด์เนม',
    productImage: '/images/products/bag2.jpg',
    price: 2500,
    brand: 'Louis Vuitton'
  }
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-blue-600 bg-blue-50'
      case 'completed':
        return 'text-green-600 bg-green-50'
      case 'upcoming':
        return 'text-orange-600 bg-orange-50'
      default:
        return 'text-gray-600 bg-gray-50'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <Clock className="w-4 h-4" />
      case 'completed':
        return <CheckCircle className="w-4 h-4" />
      case 'upcoming':
        return <AlertCircle className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active':
        return 'กำลังเช่า'
      case 'completed':
        return 'เสร็จสิ้น'
      case 'upcoming':
        return 'กำลังจะถึง'
      default:
        return 'ไม่ทราบสถานะ'
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-dark-gray mb-2">แดชบอร์ด</h1>
            <p className="text-gray-600">
              ยินดีต้อนรับกลับ, {mockUser.name}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <Card className="p-6">
                {/* User Profile */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-lavender/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lavender font-semibold text-xl">
                      {mockUser.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-dark-gray">{mockUser.name}</h3>
                  <p className="text-sm text-gray-600">{mockUser.email}</p>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{mockUser.trustScore}</span>
                    <span className="text-xs text-gray-500">Trust Score</span>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="space-y-2">
                  {[
                    { id: 'overview', label: 'ภาพรวม', icon: Home },
                    { id: 'rentals', label: 'การเช่าของฉัน', icon: Package },
                    { id: 'wishlist', label: 'รายการโปรด', icon: Heart },
                    { id: 'profile', label: 'โปรไฟล์', icon: User },
                    { id: 'settings', label: 'การตั้งค่า', icon: Settings }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeTab === item.id
                          ? 'bg-lavender text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  ))}
                </nav>
              </Card>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      {
                        title: 'การเช่าทั้งหมด',
                        value: mockStats.totalRentals,
                        icon: Package,
                        color: 'text-blue-600',
                        bgColor: 'bg-blue-50'
                      },
                      {
                        title: 'กำลังเช่า',
                        value: mockStats.activeRentals,
                        icon: Clock,
                        color: 'text-orange-600',
                        bgColor: 'bg-orange-50'
                      },
                      {
                        title: 'ใช้จ่ายทั้งหมด',
                        value: `฿${mockStats.totalSpent.toLocaleString()}`,
                        icon: TrendingUp,
                        color: 'text-green-600',
                        bgColor: 'bg-green-50'
                      },
                      {
                        title: 'รายการโปรด',
                        value: mockStats.wishlistItems,
                        icon: Heart,
                        color: 'text-red-600',
                        bgColor: 'bg-red-50'
                      }
                    ].map((stat, index) => (
                      <Card key={index} className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                            <p className="text-2xl font-bold text-dark-gray">{stat.value}</p>
                          </div>
                          <div className={`w-12 h-12 ${stat.bgColor} rounded-full flex items-center justify-center`}>
                            <stat.icon className={`w-6 h-6 ${stat.color}`} />
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>

                  {/* Quick Actions */}
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-dark-gray mb-4">การดำเนินการด่วน</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Link href="/rent">
                        <Button className="w-full justify-start">
                          <ShoppingBag className="w-5 h-5 mr-2" />
                          เช่าเสื้อผ้าใหม่
                        </Button>
                      </Link>
                      <Link href="/dashboard/wishlist">
                        <Button variant="outline" className="w-full justify-start">
                          <Heart className="w-5 h-5 mr-2" />
                          ดูรายการโปรด
                        </Button>
                      </Link>
                      <Link href="/dashboard/profile">
                        <Button variant="outline" className="w-full justify-start">
                          <User className="w-5 h-5 mr-2" />
                          แก้ไขโปรไฟล์
                        </Button>
                      </Link>
                    </div>
                  </Card>

                  {/* Recent Rentals */}
                  <Card className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-dark-gray">การเช่าล่าสุด</h3>
                      <Link href="/dashboard/rentals">
                        <Button variant="outline" size="sm">
                          ดูทั้งหมด
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                    <div className="space-y-4">
                      {mockRecentRentals.map((rental) => (
                        <div key={rental.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                          <div className="w-16 h-16 bg-gradient-to-br from-lavender/20 to-emerald/20 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500 text-xs">รูป</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-dark-gray">{rental.productName}</h4>
                            <p className="text-sm text-gray-600">
                              {new Date(rental.startDate).toLocaleDateString('th-TH')} - {new Date(rental.endDate).toLocaleDateString('th-TH')}
                            </p>
                            <p className="text-sm font-medium text-lavender">฿{rental.price.toLocaleString()}</p>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(rental.status)}`}>
                            {getStatusIcon(rental.status)}
                            {getStatusLabel(rental.status)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Wishlist Preview */}
                  <Card className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-dark-gray">รายการโปรด</h3>
                      <Link href="/dashboard/wishlist">
                        <Button variant="outline" size="sm">
                          ดูทั้งหมด
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {mockWishlist.map((item) => (
                        <div key={item.id} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                          <div className="w-12 h-12 bg-gradient-to-br from-lavender/20 to-emerald/20 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500 text-xs">รูป</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-dark-gray text-sm">{item.productName}</h4>
                            <p className="text-xs text-gray-600">{item.brand}</p>
                            <p className="text-sm font-medium text-lavender">฿{item.price.toLocaleString()}</p>
                          </div>
                          <Button size="sm">
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              )}

              {activeTab === 'rentals' && (
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-dark-gray mb-4">การเช่าของฉัน</h3>
                  <p className="text-gray-600">หน้านี้จะแสดงรายการการเช่าทั้งหมด</p>
                </Card>
              )}

              {activeTab === 'wishlist' && (
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-dark-gray mb-4">รายการโปรด</h3>
                  <p className="text-gray-600">หน้านี้จะแสดงรายการโปรดทั้งหมด</p>
                </Card>
              )}

              {activeTab === 'profile' && (
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-dark-gray mb-4">โปรไฟล์และความน่าเชื่อถือ</h3>
                  <p className="text-gray-600">หน้านี้จะแสดงข้อมูลโปรไฟล์และ Trust Score</p>
                </Card>
              )}

              {activeTab === 'settings' && (
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-dark-gray mb-4">การตั้งค่า</h3>
                  <p className="text-gray-600">หน้านี้จะแสดงการตั้งค่าต่างๆ</p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
