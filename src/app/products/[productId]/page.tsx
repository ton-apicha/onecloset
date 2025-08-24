'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { useProduct } from '@/hooks/useProducts'
import { useCart } from '@/components/cart/CartProvider'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Star, Heart, Share2, Truck, Shield, Clock, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.productId as string
  
  const { product, shop, relatedProducts, loading, error } = useProduct({
    productId,
    autoFetch: true
  })
  
  const { addToCart } = useCart()
  
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [selectedColor, setSelectedColor] = useState<string>('')
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-gray-200 h-96 rounded-lg"></div>
              <div className="flex space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-gray-200 h-20 w-20 rounded-lg"></div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-200 h-8 w-3/4 rounded"></div>
              <div className="bg-gray-200 h-6 w-1/2 rounded"></div>
              <div className="bg-gray-200 h-4 w-full rounded"></div>
              <div className="bg-gray-200 h-4 w-2/3 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">ไม่พบสินค้า</h1>
          <p className="text-gray-600 mb-6">{error || 'สินค้าที่คุณค้นหาอาจถูกลบหรือย้ายไปแล้ว'}</p>
          <Link href="/products">
            <Button>กลับไปดูสินค้าอื่น</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('กรุณาเลือกไซส์และสี')
      return
    }

    addToCart({
      productId: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor,
      quantity,
      shopId: product.shopId
    })
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB'
    }).format(price)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <Link href="/" className="hover:text-gray-900">หน้าแรก</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-gray-900">สินค้า</Link>
        <span>/</span>
        <Link href={`/products?category=${product.category}`} className="hover:text-gray-900">
          {product.category === 'evening-dresses' ? 'ชุดราตรี' : 
           product.category === 'bags' ? 'กระเป๋า' : product.category}
        </Link>
        <span>/</span>
        <span className="text-gray-900">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Thumbnail Images */}
          <div className="flex space-x-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Brand & Name */}
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Badge variant="secondary">{product.brand}</Badge>
              {product.status === 'RENTED' && (
                <Badge variant="destructive">ไม่ว่าง</Badge>
              )}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>4.8</span>
                <span>(127 รีวิว)</span>
              </div>
              <div className="flex items-center space-x-1">
                <Heart className="w-4 h-4" />
                <span>เพิ่มในรายการโปรด</span>
              </div>
              <button className="flex items-center space-x-1 hover:text-gray-900">
                <Share2 className="w-4 h-4" />
                <span>แชร์</span>
              </button>
            </div>
          </div>

          {/* Price */}
          <div>
            <div className="text-3xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </div>
            <p className="text-sm text-gray-600">ราคาเช่าต่อวัน</p>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">รายละเอียด</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">ไซส์</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                    selectedSize === size
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">สี</h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                    selectedColor === color
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">จำนวนวัน</h3>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
              >
                -
              </button>
              <span className="w-16 text-center font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="space-y-3">
            <Button
              onClick={handleAddToCart}
              disabled={product.status === 'RENTED' || !selectedSize || !selectedColor}
              className="w-full h-12 text-lg"
            >
              {product.status === 'RENTED' ? 'ไม่ว่าง' : 'เพิ่มในตะกร้า'}
            </Button>
            
            {product.status === 'RENTED' && (
              <p className="text-sm text-red-600 text-center">
                สินค้านี้ถูกเช่าแล้ว กรุณาตรวจสอบสินค้าอื่น
              </p>
            )}
          </div>

          {/* Shop Info */}
          {shop && (
            <div className="border-t pt-6">
              <h3 className="font-semibold text-gray-900 mb-3">ข้อมูลร้านค้า</h3>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">
                    {shop.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{shop.name}</h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{shop.rating}</span>
                      <span>({shop.reviewCount} รีวิว)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{shop.location}</span>
                    </div>
                  </div>
                </div>
                <Link href={`/shops/${shop.id}`}>
                  <Button variant="outline" size="sm">
                    ดูร้านค้า
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {/* Shipping Info */}
          <div className="border-t pt-6">
            <h3 className="font-semibold text-gray-900 mb-3">ข้อมูลการจัดส่ง</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Truck className="w-5 h-5 text-green-600" />
                <span>จัดส่งฟรีทั่วประเทศ</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Clock className="w-5 h-5 text-blue-600" />
                <span>จัดส่งภายใน 1-2 วันทำการ</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Shield className="w-5 h-5 text-purple-600" />
                <span>รับประกันสินค้า 100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="border-t pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">สินค้าที่เกี่ยวข้อง</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/products/${relatedProduct.id}`}
                className="group block"
              >
                <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
                  <Image
                    src={relatedProduct.images[0]}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                  {relatedProduct.status === 'RENTED' && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <Badge variant="destructive">ไม่ว่าง</Badge>
                    </div>
                  )}
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {relatedProduct.name}
                </h3>
                <p className="text-sm text-gray-600">{relatedProduct.brand}</p>
                <p className="font-semibold text-gray-900">
                  {formatPrice(relatedProduct.price)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
