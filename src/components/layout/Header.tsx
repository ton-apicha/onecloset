'use client'

import { useState } from 'react'
import { Search, ShoppingBag, User, Menu } from 'lucide-react'
import { useCart } from '@/components/cart/CartProvider'
import Link from 'next/link'

interface HeaderProps {
  showSearch?: boolean
  showAuth?: boolean
  showCart?: boolean
  showMobileMenu?: boolean
}

export function Header({
  showSearch = true,
  showAuth = true,
  showCart = true,
  showMobileMenu = true
}: HeaderProps) {
  const { items = [], toggleCart } = useCart()
  const [searchQuery, setSearchQuery] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic
    console.log('Searching for:', searchQuery)
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center cursor-pointer">
                <span className="text-white font-bold text-xl">Ω</span>
              </div>
            </Link>
            <Link href="/">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer">
                OneCloset
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">หน้าแรก</Link>
            <Link href="/products" className="nav-link">สินค้าทั้งหมด</Link>
            <Link href="/how-it-works" className="nav-link">วิธีการเช่า</Link>
            <Link href="/about" className="nav-link">เกี่ยวกับเรา</Link>
          </nav>

          {/* Search Bar */}
          {showSearch && (
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <form onSubmit={handleSearch} className="search-bar">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="ค้นหาเสื้อผ้า, แบรนด์, หมวดหมู่..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
              </form>
            </div>
          )}

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {showAuth && (
              <>
                <Link href="/auth/login">
                  <button className="btn-outline hidden sm:flex">
                    <User className="h-4 w-4 mr-2" />
                    เข้าสู่ระบบ
                  </button>
                </Link>
                <Link href="/auth/signup">
                  <button className="btn-primary hidden sm:flex">
                    สมัครสมาชิก
                  </button>
                </Link>
              </>
            )}
            
            {/* Cart Button */}
            {showCart && (
              <button
                onClick={toggleCart}
                className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ShoppingBag className="h-6 w-6" />
                {items && items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </button>
            )}

            {/* Mobile Menu Button */}
            {showMobileMenu && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Search */}
        {showSearch && (
          <div className="lg:hidden pb-4">
            <form onSubmit={handleSearch} className="search-bar">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="ค้นหาเสื้อผ้า, แบรนด์, หมวดหมู่..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </form>
          </div>
        )}

        {/* Mobile Menu */}
        {showMobileMenu && isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="nav-link">หน้าแรก</Link>
              <Link href="/products" className="nav-link">สินค้าทั้งหมด</Link>
              <Link href="/how-it-works" className="nav-link">วิธีการเช่า</Link>
              <Link href="/about" className="nav-link">เกี่ยวกับเรา</Link>
              {showAuth && (
                <>
                  <Link href="/auth/login" className="nav-link">เข้าสู่ระบบ</Link>
                  <Link href="/auth/signup" className="nav-link">สมัครสมาชิก</Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
