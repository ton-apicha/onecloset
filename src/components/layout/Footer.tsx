import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
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
              <li><a href="/products" className="hover:text-white transition-colors">เช่าเสื้อผ้า</a></li>
              <li><a href="/how-it-works" className="hover:text-white transition-colors">วิธีการเช่า</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">เงื่อนไขการเช่า</a></li>
              <li><a href="/shipping" className="hover:text-white transition-colors">การจัดส่ง</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">บริษัท</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white transition-colors">เกี่ยวกับเรา</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">ติดต่อเรา</a></li>
              <li><a href="/careers" className="hover:text-white transition-colors">ร่วมงานกับเรา</a></li>
              <li><a href="/news" className="hover:text-white transition-colors">ข่าวสาร</a></li>
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
          <p>&copy; 2024 OneCloset. สงวนลิขสิทธิ์ทุกประการ</p>
        </div>
      </div>
    </footer>
  )
}
