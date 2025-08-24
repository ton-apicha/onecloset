'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Ω</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">OneCloset</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              ชุดสวย
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              หมวดหมู่
            </Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              วิธีการเช่า
            </Link>
            <Link href="/for-shops" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              สำหรับร้านค้า
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
              เข้าสู่ระบบ
            </Link>
            <Link href="/signup">
              <button className="bg-emerald-600 text-white px-6 py-2 rounded-full font-medium hover:bg-emerald-700 transition-colors">
                สมัครสมาชิก
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/products" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                ชุดสวย
              </Link>
              <Link href="/categories" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                หมวดหมู่
              </Link>
              <Link href="/how-it-works" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                วิธีการเช่า
              </Link>
              <Link href="/for-shops" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                สำหรับร้านค้า
              </Link>
              <div className="pt-4 border-t border-gray-100">
                <Link href="/login" className="block text-gray-700 hover:text-emerald-600 font-medium transition-colors mb-2">
                  เข้าสู่ระบบ
                </Link>
                <Link href="/signup">
                  <button className="w-full bg-emerald-600 text-white px-6 py-2 rounded-full font-medium hover:bg-emerald-700 transition-colors">
                    สมัครสมาชิก
                  </button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
