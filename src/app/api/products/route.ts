import { NextRequest, NextResponse } from 'next/server'
import { Product, ProductStatus } from '@/types'

// Mock database - replace with actual Prisma queries
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'ชุดราตรีสีดำ Zara',
    brand: 'Zara',
    category: 'evening-dresses',
    description: 'ชุดราตรีสีดำสวยงาม เหมาะสำหรับงานแต่งงานหรืองานพิเศษ เนื้อผ้าคุณภาพดี ใส่สบาย มีการตัดเย็บที่ประณีต',
    price: 1500,
    images: [
      '/images/products/dress1-1.jpg',
      '/images/products/dress1-2.jpg',
      '/images/products/dress1-3.jpg',
      '/images/products/dress1-4.jpg'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['ดำ'],
    shopId: 'shop1',
    status: ProductStatus.AVAILABLE,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    name: 'กระเป๋าแบรนด์เนม Gucci',
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
    name: 'ชุดไปงานแต่ง H&M',
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
  },
  {
    id: '4',
    name: 'ชุดราตรีสีแดง',
    brand: 'Zara',
    category: 'evening-dresses',
    description: 'ชุดราตรีสีแดงสวยงาม',
    price: 1800,
    images: ['/images/products/dress3.jpg'],
    sizes: ['S', 'M', 'L'],
    colors: ['แดง'],
    shopId: 'shop1',
    status: ProductStatus.AVAILABLE,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '5',
    name: 'กระเป๋าแบรนด์เนม',
    brand: 'Louis Vuitton',
    category: 'bags',
    description: 'กระเป๋าแบรนด์เนมคุณภาพดี',
    price: 2500,
    images: ['/images/products/bag2.jpg'],
    sizes: ['One Size'],
    colors: ['ดำ'],
    shopId: 'shop2',
    status: ProductStatus.AVAILABLE,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Extract query parameters
    const category = searchParams.get('category')
    const brand = searchParams.get('brand')
    const size = searchParams.get('size')
    const color = searchParams.get('color')
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')
    const availability = searchParams.get('availability')
    const sortBy = searchParams.get('sortBy') || 'recommended'
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '12')
    const search = searchParams.get('search')

    // Filter products
    let filteredProducts = mockProducts.filter(product => {
      // Category filter
      if (category && category !== 'all' && product.category !== category) {
        return false
      }

      // Brand filter
      if (brand && product.brand !== brand) {
        return false
      }

      // Size filter
      if (size && !product.sizes.includes(size)) {
        return false
      }

      // Color filter
      if (color && !product.colors.includes(color)) {
        return false
      }

      // Price range filter
      if (minPrice && product.price < parseInt(minPrice)) {
        return false
      }
      if (maxPrice && product.price > parseInt(maxPrice)) {
        return false
      }

      // Availability filter
      if (availability && product.status !== availability) {
        return false
      }

      // Search filter
      if (search) {
        const searchLower = search.toLowerCase()
        const matchesName = product.name.toLowerCase().includes(searchLower)
        const matchesBrand = product.brand.toLowerCase().includes(searchLower)
        const matchesDescription = product.description.toLowerCase().includes(searchLower)
        
        if (!matchesName && !matchesBrand && !matchesDescription) {
          return false
        }
      }

      return true
    })

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filteredProducts.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filteredProducts.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        filteredProducts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        break
      case 'popular':
        // Mock popularity sorting - in real app, this would be based on rental count
        filteredProducts.sort((a, b) => Math.random() - 0.5)
        break
      default:
        // Recommended - default sorting
        break
    }

    // Pagination
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

    // Calculate pagination info
    const totalProducts = filteredProducts.length
    const totalPages = Math.ceil(totalProducts / limit)
    const hasNextPage = page < totalPages
    const hasPrevPage = page > 1

    return NextResponse.json({
      success: true,
      data: {
        products: paginatedProducts,
        pagination: {
          currentPage: page,
          totalPages,
          totalProducts,
          hasNextPage,
          hasPrevPage,
          limit
        },
        filters: {
          applied: {
            category,
            brand,
            size,
            color,
            minPrice,
            maxPrice,
            availability,
            sortBy,
            search
          }
        }
      }
    })

  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error' 
      },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ['name', 'brand', 'category', 'price', 'shopId']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { 
            success: false, 
            error: `Missing required field: ${field}` 
          },
          { status: 400 }
        )
      }
    }

    // Create new product (mock)
    const newProduct: Product = {
      id: Date.now().toString(),
      name: body.name,
      brand: body.brand,
      category: body.category,
      description: body.description || '',
      price: body.price,
      images: body.images || [],
      sizes: body.sizes || [],
      colors: body.colors || [],
      shopId: body.shopId,
      status: ProductStatus.AVAILABLE,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    // In real app, save to database
    // const product = await prisma.product.create({ data: newProduct })

    return NextResponse.json({
      success: true,
      data: newProduct
    }, { status: 201 })

  } catch (error) {
    console.error('Error creating product:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error' 
      },
      { status: 500 }
    )
  }
}
