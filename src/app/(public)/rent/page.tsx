'use client'

import React, { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ProductCard } from '@/components/product/ProductCard'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { 
  Filter, 
  Grid, 
  List, 
  ChevronDown,
  Search,
  SlidersHorizontal
} from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import { Product, ProductStatus } from '@/types'

// Mock data - replace with actual API call
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'ชุดราตรีสีดำ',
    brand: 'Zara',
    category: 'evening-dresses',
    description: 'ชุดราตรีสีดำสวยงาม เหมาะสำหรับงานแต่งงานหรืองานพิเศษ',
    price: 1500,
    images: ['/images/products/dress1.jpg'],
    sizes: ['S', 'M', 'L'],
    colors: ['ดำ'],
    shopId: 'shop1',
    status: ProductStatus.AVAILABLE,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    name: 'กระเป๋าแบรนด์เนม',
    brand: 'Gucci',
    category: 'bags',
    description: 'กระเป๋าแบรนด์เนมคุณภาพดี',
    price: 2000,
    images: ['/images/products/bag1.jpg'],
    sizes: ['One Size'],
    colors: ['น้ำตาล'],
    shopId: 'shop2',
    status: ProductStatus.AVAILABLE,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3',
    name: 'ชุดไปงานแต่ง',
    brand: 'H&M',
    category: 'evening-dresses',
    description: 'ชุดสวยสำหรับไปงานแต่งงาน',
    price: 1200,
    images: ['/images/products/dress2.jpg'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['ชมพู', 'ฟ้า'],
    shopId: 'shop3',
    status: ProductStatus.RENTED,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

const categories = [
  { id: 'all', name: 'ทั้งหมด' },
  { id: 'evening-dresses', name: 'ชุดราตรี' },
  { id: 'bags', name: 'กระเป๋า' },
  { id: 'jewelry', name: 'เครื่องประดับ' },
  { id: 'shoes', name: 'รองเท้า' },
  { id: 'accessories', name: 'อุปกรณ์เสริม' }
]

const brands = [
  'Zara', 'H&M', 'Gucci', 'Louis Vuitton', 'Chanel', 'Nike', 'Adidas'
]

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

const colors = ['ดำ', 'ขาว', 'แดง', 'น้ำเงิน', 'ชมพู', 'เขียว', 'เหลือง', 'ส้ม']

export default function RentPage() {
  const [products, setProducts] = useState(mockProducts)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('recommended')
  const [filters, setFilters] = useState({
    category: '',
    brand: '',
    size: '',
    color: '',
    minPrice: '',
    maxPrice: '',
    availability: ''
  })
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const handleWishlistToggle = (productId: string) => {
    // Wishlist toggle logic
    console.log('Toggle wishlist for product:', productId)
  }

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const clearFilters = () => {
    setFilters({
      category: '',
      brand: '',
      size: '',
      color: '',
      minPrice: '',
      maxPrice: '',
      availability: ''
    })
  }

  const filteredProducts = products.filter(product => {
    if (filters.category && filters.category !== 'all' && product.category !== filters.category) return false
    if (filters.brand && product.brand !== filters.brand) return false
    if (filters.size && !product.sizes.includes(filters.size)) return false
    if (filters.color && !product.colors.includes(filters.color)) return false
    if (filters.minPrice && product.price < parseInt(filters.minPrice)) return false
    if (filters.maxPrice && product.price > parseInt(filters.maxPrice)) return false
    if (filters.availability && product.status !== filters.availability) return false
    return true
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-dark-gray mb-2">เช่าเสื้อผ้า</h1>
            <p className="text-gray-600">
              ค้นพบเสื้อผ้าแบรนด์เนมที่คุณชื่นชอบ
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-64 flex-shrink-0">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-dark-gray">ตัวกรอง</h2>
                  <button
                    onClick={clearFilters}
                    className="text-sm text-lavender hover:underline"
                  >
                    ล้างทั้งหมด
                  </button>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <h3 className="font-medium text-dark-gray mb-3">หมวดหมู่</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <label key={category.id} className="flex items-center">
                        <input
                          type="radio"
                          name="category"
                          value={category.id}
                          checked={filters.category === category.id}
                          onChange={(e) => handleFilterChange('category', e.target.value)}
                          className="mr-2"
                        />
                        <span className="text-sm text-gray-700">{category.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Brand Filter */}
                <div className="mb-6">
                  <h3 className="font-medium text-dark-gray mb-3">แบรนด์</h3>
                  <select
                    value={filters.brand}
                    onChange={(e) => handleFilterChange('brand', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                  >
                    <option value="">ทุกแบรนด์</option>
                    {brands.map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>

                {/* Size Filter */}
                <div className="mb-6">
                  <h3 className="font-medium text-dark-gray mb-3">ไซส์</h3>
                  <select
                    value={filters.size}
                    onChange={(e) => handleFilterChange('size', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                  >
                    <option value="">ทุกไซส์</option>
                    {sizes.map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>

                {/* Color Filter */}
                <div className="mb-6">
                  <h3 className="font-medium text-dark-gray mb-3">สี</h3>
                  <select
                    value={filters.color}
                    onChange={(e) => handleFilterChange('color', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                  >
                    <option value="">ทุกสี</option>
                    {colors.map(color => (
                      <option key={color} value={color}>{color}</option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div className="mb-6">
                  <h3 className="font-medium text-dark-gray mb-3">ช่วงราคา</h3>
                  <div className="space-y-2">
                    <input
                      type="number"
                      placeholder="ราคาต่ำสุด"
                      value={filters.minPrice}
                      onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                    />
                    <input
                      type="number"
                      placeholder="ราคาสูงสุด"
                      value={filters.maxPrice}
                      onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                    />
                  </div>
                </div>

                {/* Availability Filter */}
                <div className="mb-6">
                  <h3 className="font-medium text-dark-gray mb-3">ความพร้อมใช้งาน</h3>
                  <select
                    value={filters.availability}
                    onChange={(e) => handleFilterChange('availability', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                  >
                    <option value="">ทั้งหมด</option>
                    <option value="AVAILABLE">พร้อมเช่า</option>
                    <option value="RENTED">กำลังเช่า</option>
                  </select>
                </div>
              </Card>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="bg-white rounded-lg p-4 mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">
                      พบ {filteredProducts.length} รายการ
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {/* View Mode Toggle */}
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 ${viewMode === 'grid' ? 'bg-lavender text-white' : 'text-gray-600'}`}
                      >
                        <Grid className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 ${viewMode === 'list' ? 'bg-lavender text-white' : 'text-gray-600'}`}
                      >
                        <List className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Sort Dropdown */}
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="p-2 border border-gray-300 rounded-lg text-sm"
                    >
                      <option value="recommended">แนะนำ</option>
                      <option value="price-low">ราคาต่ำไปสูง</option>
                      <option value="price-high">ราคาสูงไปต่ำ</option>
                      <option value="newest">ใหม่ล่าสุด</option>
                      <option value="popular">เป็นที่นิยม</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Product Grid */}
              {filteredProducts.length > 0 ? (
                <div className={
                  viewMode === 'grid' 
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                    : 'space-y-4'
                }>
                  {filteredProducts.map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onWishlistToggle={handleWishlistToggle}
                      isWishlisted={false}
                    />
                  ))}
                </div>
              ) : (
                <Card className="p-12 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-dark-gray mb-2">ไม่พบสินค้า</h3>
                  <p className="text-gray-600 mb-4">
                    ลองเปลี่ยนตัวกรองหรือค้นหาด้วยคำอื่น
                  </p>
                  <Button onClick={clearFilters}>
                    ล้างตัวกรอง
                  </Button>
                </Card>
              )}

              {/* Load More */}
              {filteredProducts.length > 0 && (
                <div className="text-center mt-8">
                  <Button variant="outline">
                    โหลดเพิ่มเติม
                  </Button>
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
