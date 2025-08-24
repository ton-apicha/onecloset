'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { X, Filter } from 'lucide-react'

interface ProductFiltersProps {
  categories: { id: string; name: string; count: number }[]
  currentFilters: Record<string, any>
  onFilterChange: (filterName: string, value: any) => void
  onClearFilters: () => void
}

export default function ProductFilters({
  categories,
  currentFilters,
  onFilterChange,
  onClearFilters
}: ProductFiltersProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['category'])

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    )
  }

  const isSectionExpanded = (section: string) => expandedSections.includes(section)

  const hasActiveFilters = Object.values(currentFilters).some(value => 
    value !== undefined && value !== '' && value !== 'all'
  )

  const clearFilter = (filterName: string) => {
    onFilterChange(filterName, undefined)
  }

  const clearAllFilters = () => {
    onClearFilters()
  }

  // Mock data for filters
  const brands = [
    { id: 'zara', name: 'Zara', count: 15 },
    { id: 'hm', name: 'H&M', count: 12 },
    { id: 'gucci', name: 'Gucci', count: 8 },
    { id: 'louis-vuitton', name: 'Louis Vuitton', count: 6 },
    { id: 'chanel', name: 'Chanel', count: 4 }
  ]

  const sizes = [
    { id: 'xs', name: 'XS', count: 20 },
    { id: 's', name: 'S', count: 35 },
    { id: 'm', name: 'M', count: 42 },
    { id: 'l', name: 'L', count: 28 },
    { id: 'xl', name: 'XL', count: 15 },
    { id: 'one-size', name: 'One Size', count: 8 }
  ]

  const colors = [
    { id: 'black', name: 'ดำ', count: 25 },
    { id: 'white', name: 'ขาว', count: 18 },
    { id: 'red', name: 'แดง', count: 12 },
    { id: 'blue', name: 'ฟ้า', count: 15 },
    { id: 'pink', name: 'ชมพู', count: 10 },
    { id: 'brown', name: 'น้ำตาล', count: 8 }
  ]

  const priceRanges = [
    { id: '0-500', name: 'ต่ำกว่า 500 บาท', min: 0, max: 500 },
    { id: '500-1000', name: '500 - 1,000 บาท', min: 500, max: 1000 },
    { id: '1000-2000', name: '1,000 - 2,000 บาท', min: 1000, max: 2000 },
    { id: '2000-5000', name: '2,000 - 5,000 บาท', min: 2000, max: 5000 },
    { id: '5000+', name: 'มากกว่า 5,000 บาท', min: 5000, max: null }
  ]

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Filter className="w-5 h-5 mr-2" />
          ตัวกรอง
        </h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-red-600 hover:text-red-700"
          >
            ล้างทั้งหมด
          </Button>
        )}
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-900 mb-3">ตัวกรองที่ใช้งาน:</h4>
          <div className="flex flex-wrap gap-2">
            {Object.entries(currentFilters).map(([key, value]) => {
              if (!value || value === 'all') return null
              
              let displayValue = value
              if (key === 'category') {
                displayValue = categories.find(c => c.id === value)?.name || value
              } else if (key === 'brand') {
                displayValue = brands.find(b => b.id === value)?.name || value
              } else if (key === 'size') {
                displayValue = sizes.find(s => s.id === value)?.name || value
              } else if (key === 'color') {
                displayValue = colors.find(c => c.id === value)?.name || value
              } else if (key === 'minPrice' || key === 'maxPrice') {
                displayValue = `${value} บาท`
              }

              return (
                <Badge
                  key={key}
                  variant="secondary"
                  className="flex items-center space-x-1"
                >
                  <span>{displayValue}</span>
                  <button
                    onClick={() => clearFilter(key)}
                    className="ml-1 hover:text-red-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )
            })}
          </div>
        </div>
      )}

      {/* Category Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          หมวดหมู่
          <span className={`transform transition-transform ${isSectionExpanded('category') ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        
        {isSectionExpanded('category') && (
          <div className="space-y-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                value="all"
                checked={!currentFilters.category || currentFilters.category === 'all'}
                onChange={(e) => onFilterChange('category', e.target.value === 'all' ? undefined : e.target.value)}
                className="text-blue-600"
              />
              <span className="text-sm text-gray-700">ทั้งหมด</span>
            </label>
            
            {categories.map((category) => (
              <label key={category.id} className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="category"
                    value={category.id}
                    checked={currentFilters.category === category.id}
                    onChange={(e) => onFilterChange('category', e.target.value)}
                    className="text-blue-600"
                  />
                  <span className="text-sm text-gray-700">{category.name}</span>
                </div>
                <span className="text-xs text-gray-500">({category.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <Separator />

      {/* Brand Filter */}
      <div className="mb-6 mt-6">
        <button
          onClick={() => toggleSection('brand')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          แบรนด์
          <span className={`transform transition-transform ${isSectionExpanded('brand') ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        
        {isSectionExpanded('brand') && (
          <div className="space-y-2">
            {brands.map((brand) => (
              <label key={brand.id} className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={currentFilters.brand === brand.id}
                    onChange={(e) => onFilterChange('brand', e.target.checked ? brand.id : undefined)}
                    className="text-blue-600"
                  />
                  <span className="text-sm text-gray-700">{brand.name}</span>
                </div>
                <span className="text-xs text-gray-500">({brand.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <Separator />

      {/* Price Range Filter */}
      <div className="mb-6 mt-6">
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          ช่วงราคา
          <span className={`transform transition-transform ${isSectionExpanded('price') ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        
        {isSectionExpanded('price') && (
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <label key={range.id} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="priceRange"
                  value={range.id}
                  checked={currentFilters.minPrice === range.min?.toString() && currentFilters.maxPrice === range.max?.toString()}
                  onChange={() => {
                    onFilterChange('minPrice', range.min?.toString())
                    onFilterChange('maxPrice', range.max?.toString())
                  }}
                  className="text-blue-600"
                />
                <span className="text-sm text-gray-700">{range.name}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <Separator />

      {/* Size Filter */}
      <div className="mb-6 mt-6">
        <button
          onClick={() => toggleSection('size')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          ไซส์
          <span className={`transform transition-transform ${isSectionExpanded('size') ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        
        {isSectionExpanded('size') && (
          <div className="space-y-2">
            {sizes.map((size) => (
              <label key={size.id} className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={currentFilters.size === size.id}
                    onChange={(e) => onFilterChange('size', e.target.checked ? size.id : undefined)}
                    className="text-blue-600"
                  />
                  <span className="text-sm text-gray-700">{size.name}</span>
                </div>
                <span className="text-xs text-gray-500">({size.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <Separator />

      {/* Color Filter */}
      <div className="mb-6 mt-6">
        <button
          onClick={() => toggleSection('color')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          สี
          <span className={`transform transition-transform ${isSectionExpanded('color') ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        
        {isSectionExpanded('color') && (
          <div className="space-y-2">
            {colors.map((color) => (
              <label key={color.id} className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={currentFilters.color === color.id}
                    onChange={(e) => onFilterChange('color', e.target.checked ? color.id : undefined)}
                    className="text-blue-600"
                  />
                  <span className="text-sm text-gray-700">{color.name}</span>
                </div>
                <span className="text-xs text-gray-500">({color.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <Separator />

      {/* Availability Filter */}
      <div className="mt-6">
        <button
          onClick={() => toggleSection('availability')}
          className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
        >
          ความพร้อมใช้งาน
          <span className={`transform transition-transform ${isSectionExpanded('availability') ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        
        {isSectionExpanded('availability') && (
          <div className="space-y-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="availability"
                value="all"
                checked={!currentFilters.availability || currentFilters.availability === 'all'}
                onChange={(e) => onFilterChange('availability', e.target.value === 'all' ? undefined : e.target.value)}
                className="text-blue-600"
              />
              <span className="text-sm text-gray-700">ทั้งหมด</span>
            </label>
            
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="availability"
                value="AVAILABLE"
                checked={currentFilters.availability === 'AVAILABLE'}
                onChange={(e) => onFilterChange('availability', e.target.value)}
                className="text-blue-600"
              />
              <span className="text-sm text-gray-700">ว่าง</span>
            </label>
            
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="availability"
                value="RENTED"
                checked={currentFilters.availability === 'RENTED'}
                onChange={(e) => onFilterChange('availability', e.target.value)}
                className="text-blue-600"
              />
              <span className="text-sm text-gray-700">ไม่ว่าง</span>
            </label>
          </div>
        )}
      </div>
    </div>
  )
}
