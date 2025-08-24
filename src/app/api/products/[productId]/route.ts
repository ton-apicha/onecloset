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
  }
]

export async function GET(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    const { productId } = params

    // Find product by ID
    const product = mockProducts.find(p => p.id === productId)

    if (!product) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Product not found' 
        },
        { status: 404 }
      )
    }

    // Get shop information (mock)
    const shop = {
      id: product.shopId,
      name: 'ร้านแฟชั่นสวย',
      rating: 4.8,
      reviewCount: 127,
      location: 'กรุงเทพฯ'
    }

    // Get related products (mock)
    const relatedProducts = mockProducts
      .filter(p => p.id !== productId && p.category === product.category)
      .slice(0, 4)

    return NextResponse.json({
      success: true,
      data: {
        product,
        shop,
        relatedProducts
      }
    })

  } catch (error) {
    console.error('Error fetching product:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error' 
      },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    const { productId } = params
    const body = await request.json()

    // Find product by ID
    const productIndex = mockProducts.findIndex(p => p.id === productId)

    if (productIndex === -1) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Product not found' 
        },
        { status: 404 }
      )
    }

    // Update product
    const updatedProduct = {
      ...mockProducts[productIndex],
      ...body,
      updatedAt: new Date()
    }

    // In real app, update in database
    // const product = await prisma.product.update({
    //   where: { id: productId },
    //   data: body
    // })

    mockProducts[productIndex] = updatedProduct

    return NextResponse.json({
      success: true,
      data: updatedProduct
    })

  } catch (error) {
    console.error('Error updating product:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error' 
      },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    const { productId } = params

    // Find product by ID
    const productIndex = mockProducts.findIndex(p => p.id === productId)

    if (productIndex === -1) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Product not found' 
        },
        { status: 404 }
      )
    }

    // In real app, delete from database
    // await prisma.product.delete({
    //   where: { id: productId }
    // })

    // Remove from mock array
    mockProducts.splice(productIndex, 1)

    return NextResponse.json({
      success: true,
      message: 'Product deleted successfully'
    })

  } catch (error) {
    console.error('Error deleting product:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error' 
      },
      { status: 500 }
    )
  }
}
