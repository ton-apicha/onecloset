# 🚀 Development Standards & Templates

## 📋 คู่มือการพัฒนามาตรฐานสำหรับโปรเจค OneCloset

> **วัตถุประสงค์**: สร้างรูปแบบการเขียนโปรแกรมที่สอดคล้องกัน เพื่อให้ผู้ใช้งานรู้สึกคุ้นชินเวลาเขียนโปรแกรมใหม่ๆ

---

## 🎯 หลักการพื้นฐาน

### 1. **Consistency First**
- ใช้รูปแบบการเขียนโค้ดที่สอดคล้องกันทุกโปรเจค
- ใช้ชื่อตัวแปร, ฟังก์ชัน, และโครงสร้างไฟล์ที่เหมือนกัน
- ใช้ UI/UX patterns เดียวกัน

### 2. **User Experience Continuity**
- ผู้ใช้งานควรรู้สึกคุ้นชินเมื่อใช้ระบบใหม่
- ใช้ layout, navigation, และ interaction patterns เดียวกัน
- ใช้สี, ฟอนต์, และ visual elements ที่สอดคล้องกัน

### 3. **Multi-language Support from Start**
- ทุกโปรเจคต้องรองรับ 3 ภาษาตั้งแต่ต้น (ไทย, อังกฤษ, จีน)
- ใช้ระบบ i18n เดียวกัน
- ใช้โครงสร้างไฟล์แปลภาษาที่เหมือนกัน

---

## 🎨 Design Philosophy & Visual Standards

### 🎯 Design Philosophy
**Clean, Elegant, Trustworthy & Action-Oriented**
- สะอาดตา หรูหรา น่าเชื่อถือ
- ทุกหน้าต้องมีเป้าหมายชัดเจนในการนำผู้ใช้ไปสู่การกระทำ (Action)
- เน้นการแปลงผู้เข้าชมเป็นลูกค้า

### 🎨 Color Scheme
```typescript
// สีหลักที่ใช้เสมอ
const colors = {
  // Primary Colors
  white: '#FFFFFF',
  lightGray: '#F8F9FA',
  darkGray: '#2C3E50',
  
  // Accent Colors (เลือกใช้ 1 ใน 2)
  lavender: '#9B7EDE',      // สีม่วงลาเวนเดอร์
  emerald: '#10B981',       // สีเขียวมรกต
  
  // Supporting Colors
  success: '#10B981',       // Green-500
  warning: '#F59E0B',       // Amber-500
  error: '#EF4444',         // Red-500
  info: '#06B6D4',          // Cyan-500
}

// ฟอนต์ที่ใช้เสมอ
const fonts = {
  sans: ['Kanit', 'Inter', 'system-ui', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
}
```

### 📱 Layout Patterns
```typescript
// Layout หลักที่ใช้เสมอ
const MainLayout = {
  sidebar: 'w-64 bg-white border-r border-gray-200',
  header: 'h-16 bg-white border-b border-gray-200 shadow-sm',
  content: 'flex-1 p-6 bg-gray-50',
  container: 'max-w-7xl mx-auto',
  card: 'bg-white rounded-lg shadow-sm border border-gray-200 p-6',
}
```

---

## 🏗️ โครงสร้างโปรเจคมาตรฐาน

### 📁 โครงสร้างโฟลเดอร์
```
onecloset/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (public)/          # หน้าบ้าน
│   │   │   ├── page.tsx       # Homepage
│   │   │   ├── rent/          # หน้าเช่าเสื้อผ้า
│   │   │   ├── how-it-works/  # วิธีการเช่า
│   │   │   └── for-shops/     # สำหรับร้านค้า
│   │   ├── (auth)/            # หน้าล็อกอิน/สมัครสมาชิก
│   │   ├── dashboard/         # ส่วนผู้เช่า
│   │   ├── partner/           # ส่วนผู้ให้เช่า
│   │   ├── admin/             # ส่วนผู้ดูแลระบบ
│   │   └── api/               # API Routes
│   ├── components/            # React Components
│   │   ├── layout/           # Layout Components
│   │   │   ├── Header.tsx    # Navigation Bar
│   │   │   ├── Footer.tsx    # Footer
│   │   │   └── Sidebar.tsx   # Dashboard Sidebar
│   │   ├── ui/               # UI Components
│   │   ├── templates/        # Template Components
│   │   ├── forms/            # Form Components
│   │   └── product/          # Product-specific Components
│   ├── contexts/             # React Contexts
│   ├── hooks/                # Custom React Hooks
│   ├── lib/                  # Utilities และ Configs
│   ├── locales/              # ไฟล์แปลภาษา
│   ├── types/                # TypeScript Types
│   └── utils/                # Utility Functions
├── prisma/                   # Database Schema
├── scripts/                  # Automation Scripts
├── docs/                     # Documentation
└── tests/                    # Test Files
```

### 📄 ไฟล์ที่ต้องมีเสมอ
```
onecloset/
├── README.md                 # เอกสารหลัก
├── DEVELOPMENT_STANDARDS.md  # คู่มือการพัฒนามาตรฐาน
├── package.json              # Dependencies
├── tailwind.config.ts        # Tailwind CSS Config
├── tsconfig.json             # TypeScript Config
├── .env.example              # Environment Variables Example
├── .gitignore                # Git Ignore
└── prisma/schema.prisma      # Database Schema
```

---

## 🧭 Navigation Structure

### 🎯 Main Navigation Bar
```typescript
// Navigation structure for Guest Users
const guestNavigation = {
  rent: {
    label: 'เช่าเสื้อผ้า',
    dropdown: [
      { label: 'มาใหม่ล่าสุด', href: '/rent/new-arrivals' },
      { label: 'กำลังเป็นที่นิยม', href: '/rent/trending' },
      { label: 'คอลเลกชันพิเศษ', href: '/rent/collections' },
      { label: 'หมวดหมู่ทั้งหมด', href: '/rent/categories' },
      { label: 'แบรนด์ทั้งหมด', href: '/rent/brands' },
    ]
  },
  howItWorks: { label: 'วิธีการเช่า', href: '/how-it-works' },
  forShops: { label: 'สำหรับร้านค้า', href: '/for-shops' },
  login: { label: 'เข้าสู่ระบบ', href: '/auth/login' },
  signup: { label: 'สมัครสมาชิก', href: '/auth/signup' },
}

// Navigation structure for Logged-in Users
const userNavigation = {
  rent: { /* same as guest */ },
  howItWorks: { /* same as guest */ },
  forShops: { /* same as guest */ },
  wishlist: { icon: 'heart', href: '/dashboard/wishlist' },
  notifications: { icon: 'bell', href: '/dashboard/notifications' },
  profile: {
    icon: 'user',
    dropdown: [
      { label: 'แดชบอร์ดของฉัน', href: '/dashboard' },
      { label: 'การเช่าของฉัน', href: '/dashboard/rentals' },
      { label: 'โปรไฟล์และความน่าเชื่อถือ', href: '/dashboard/profile' },
      { label: 'การตั้งค่าบัญชี', href: '/dashboard/settings' },
      { label: 'ออกจากระบบ', href: '/auth/logout' },
    ]
  },
}
```

---

## 📄 Page Structure Standards

### 🏠 Homepage Structure
```typescript
// src/app/(public)/page.tsx
const HomepageStructure = {
  hero: {
    image: 'hero-image.jpg',
    headline: 'ตู้เสื้อผ้าในฝัน แค่ปลายนิ้ว',
    searchBar: true,
    cta: 'ค้นหา'
  },
  howItWorks: {
    steps: [
      { icon: 'search', title: 'ค้นหา', description: 'เลือกชุดที่ชอบ' },
      { icon: 'calendar', title: 'จอง', description: 'เลือกวันที่ต้องการ' },
      { icon: 'package', title: 'สวมใส่', description: 'รับชุดที่บ้าน' },
      { icon: 'rotate-ccw', title: 'ส่งคืน', description: 'ส่งกลับหลังใช้' }
    ]
  },
  featuredCollections: [
    { title: 'New Arrivals', image: 'new-arrivals.jpg' },
    { title: 'Wedding Guest Edit', image: 'wedding.jpg' },
    { title: 'Top Rated Items', image: 'top-rated.jpg' }
  ],
  shopByCategory: [
    { name: 'ชุดราตรี', icon: 'dress', href: '/rent/categories/evening-dresses' },
    { name: 'กระเป๋า', icon: 'bag', href: '/rent/categories/bags' },
    { name: 'เครื่องประดับ', icon: 'gem', href: '/rent/categories/jewelry' }
  ],
  testimonials: true,
  forShopsCTA: {
    title: 'มาสร้างรายได้จากตู้เสื้อผ้าของคุณ',
    cta: 'ดูรายละเอียด'
  }
}
```

### 🛍️ Product Listing Page (PLP)
```typescript
// src/app/(public)/rent/page.tsx
const ProductListingStructure = {
  sidebar: {
    filters: [
      { type: 'categories', label: 'หมวดหมู่' },
      { type: 'sizes', label: 'ไซส์' },
      { type: 'colors', label: 'สี' },
      { type: 'brands', label: 'แบรนด์' },
      { type: 'priceRange', label: 'ช่วงราคา' },
      { type: 'shopRating', label: 'คะแนนร้านค้า' }
    ]
  },
  mainContent: {
    header: {
      productCount: true,
      sortOptions: ['แนะนำ', 'ราคาต่ำไปสูง', 'ราคาสูงไปต่ำ', 'ใหม่ล่าสุด']
    },
    productGrid: {
      card: {
        image: 'product-image.jpg',
        wishlistIcon: true,
        brand: 'Brand Name',
        title: 'Product Title',
        price: '฿1,500 / 4 วัน'
      }
    }
  }
}
```

### 📦 Product Detail Page (PDP)
```typescript
// src/app/(public)/rent/[productId]/page.tsx
const ProductDetailStructure = {
  layout: 'two-column',
  leftColumn: {
    mainImage: 'product-main.jpg',
    thumbnails: ['thumb1.jpg', 'thumb2.jpg', 'thumb3.jpg'],
    video: 'product-video.mp4'
  },
  rightColumn: {
    brand: { name: 'Brand Name', clickable: true },
    title: 'Product Title',
    price: '฿1,500 / 4 วัน',
    shop: { name: 'Shop Name', rating: 4.5, clickable: true },
    fitPredictor: true,
    availabilityCalendar: true,
    addToBag: true,
    accordion: [
      { title: 'รายละเอียด', content: 'product-details' },
      { title: 'ขนาดและไซส์', content: 'size-fit-table' },
      { title: 'การจัดส่งและส่งคืน', content: 'shipping-returns' },
      { title: 'รีวิวจากลูกค้า', content: 'customer-reviews' }
    ]
  }
}
```

### 🏪 For Shops Landing Page
```typescript
// src/app/(public)/for-shops/page.tsx
const ForShopsStructure = {
  hero: {
    headline: 'เปลี่ยนตู้เสื้อผ้าของคุณให้เป็นธุรกิจที่เติบโต โดยไม่ต้องวุ่นวายกับการจัดการ',
    cta: 'เริ่มต้นใช้งานฟรี'
  },
  problem: {
    title: 'ปัญหาที่ร้านค้าเจอ',
    issues: ['แชทเยอะ', 'จองซ้อน', 'จัดการสต็อกวุ่นวาย']
  },
  solution: {
    title: 'The Growth OS',
    features: ['ปฏิทินอัตโนมัติ', 'จัดการสต็อก', 'รับเงินปลอดภัย']
  },
  howItWorks: {
    steps: [
      { step: 1, title: 'สมัคร', description: 'สมัครเป็นพาร์ทเนอร์' },
      { step: 2, title: 'ลงสินค้า', description: 'อัพโหลดสินค้าของคุณ' },
      { step: 3, title: 'สร้างรายได้', description: 'เริ่มรับเงินจากลูกค้า' }
    ]
  },
  pricing: {
    title: 'โมเดลรายได้',
    description: 'ไม่มีค่าแรกเข้า, ไม่มีค่าสมาชิกรายเดือน, เราเก็บค่าคอมมิชชั่นก็ต่อเมื่อคุณมีรายได้'
  },
  testimonials: true,
  faq: true,
  finalCTA: 'สมัครเป็นพาร์ทเนอร์เลย'
}
```

### 📊 User Dashboard
```typescript
// src/app/dashboard/page.tsx
const DashboardStructure = {
  sidebar: [
    { icon: 'home', label: 'ภาพรวม', href: '/dashboard' },
    { icon: 'calendar', label: 'การเช่าของฉัน', href: '/dashboard/rentals' },
    { icon: 'heart', label: 'รายการโปรด', href: '/dashboard/wishlist' },
    { icon: 'user', label: 'โปรไฟล์และความน่าเชื่อถือ', href: '/dashboard/profile' },
    { icon: 'settings', label: 'การตั้งค่า', href: '/dashboard/settings' }
  ],
  mainContent: {
    overview: {
      stats: ['สินค้าที่กำลังเช่า', 'ประวัติการเช่า', 'คะแนนความน่าเชื่อถือ'],
      recentActivity: true
    },
    rentals: {
      tabs: ['กำลังเช่า', 'ประวัติการเช่า']
    }
  }
}
```

---

## 🌐 Internationalization (i18n) Standards

### 📁 โครงสร้างไฟล์แปลภาษา
```typescript
// src/locales/th.ts
export const th = {
  common: {
    title: 'OneCloset',
    description: 'แพลตฟอร์มเช่าเสื้อผ้าออนไลน์',
    actions: {
      create: 'สร้าง',
      edit: 'แก้ไข',
      delete: 'ลบ',
      save: 'บันทึก',
      cancel: 'ยกเลิก',
      search: 'ค้นหา',
      filter: 'กรอง',
      rent: 'เช่า',
      addToWishlist: 'เพิ่มรายการโปรด',
    },
    status: {
      active: 'ใช้งาน',
      inactive: 'ไม่ใช้งาน',
      pending: 'รอดำเนินการ',
      completed: 'เสร็จสิ้น',
      rented: 'กำลังเช่า',
      returned: 'ส่งคืนแล้ว',
    },
  },
  navigation: {
    rent: 'เช่าเสื้อผ้า',
    howItWorks: 'วิธีการเช่า',
    forShops: 'สำหรับร้านค้า',
    dashboard: 'แดชบอร์ด',
    wishlist: 'รายการโปรด',
    notifications: 'การแจ้งเตือน',
    profile: 'โปรไฟล์',
  },
  product: {
    title: 'สินค้า',
    description: 'จัดการข้อมูลสินค้า',
    fields: {
      name: 'ชื่อสินค้า',
      brand: 'แบรนด์',
      category: 'หมวดหมู่',
      size: 'ไซส์',
      color: 'สี',
      price: 'ราคาเช่า',
      description: 'รายละเอียด',
    },
    actions: {
      create: 'เพิ่มสินค้า',
      edit: 'แก้ไขสินค้า',
      delete: 'ลบสินค้า',
      rent: 'เช่าสินค้า',
    },
  },
  rental: {
    title: 'การเช่า',
    description: 'จัดการการเช่าสินค้า',
    fields: {
      product: 'สินค้า',
      renter: 'ผู้เช่า',
      startDate: 'วันที่เริ่มเช่า',
      endDate: 'วันที่สิ้นสุด',
      status: 'สถานะ',
      totalPrice: 'ราคารวม',
    },
    actions: {
      create: 'สร้างการเช่า',
      edit: 'แก้ไขการเช่า',
      cancel: 'ยกเลิกการเช่า',
      return: 'ส่งคืน',
    },
  },
}
```

### 🔧 i18n Configuration
```typescript
// src/lib/i18n.ts
export const i18nConfig = {
  defaultLocale: 'th',
  locales: ['th', 'en', 'zh'],
  localeNames: {
    th: 'ไทย',
    en: 'English',
    zh: '中文',
  },
}
```

---

## 🗄️ Database Standards

### 📊 Schema Patterns
```prisma
// prisma/schema.prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String
  role      Role     @default(RENTER)
  status    Status   @default(ACTIVE)
  trustScore Int     @default(0)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // Relations
  rentals    Rental[]    @relation("RenterRentals")
  shop       Shop?       @relation("ShopOwner")
  reviews    Review[]    @relation("UserReviews")
  wishlist   WishlistItem[]

  @@map("users")
}

model Product {
  id          String   @id @default(cuid())
  name        String
  brand       String
  category    String
  description String
  price       Decimal
  images      String[]
  sizes       String[]
  colors      String[]
  shopId      String
  status      ProductStatus @default(AVAILABLE)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  // Relations
  shop        Shop      @relation("ShopProducts", fields: [shopId], references: [id])
  rentals     Rental[]  @relation("ProductRentals")
  reviews     Review[]  @relation("ProductReviews")
  wishlist    WishlistItem[]

  @@map("products")
}

model Rental {
  id        String   @id @default(cuid())
  productId String
  renterId  String
  startDate DateTime
  endDate   DateTime
  status    RentalStatus @default(PENDING)
  totalPrice Decimal
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // Relations
  product   Product   @relation("ProductRentals", fields: [productId], references: [id])
  renter    User      @relation("RenterRentals", fields: [renterId], references: [id])

  @@map("rentals")
}

model Shop {
  id          String   @id @default(cuid())
  name        String
  description String?
  ownerId     String   @unique
  rating      Float    @default(0)
  status      ShopStatus @default(PENDING)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  // Relations
  owner       User      @relation("ShopOwner", fields: [ownerId], references: [id])
  products    Product[] @relation("ShopProducts")

  @@map("shops")
}

enum Role {
  SUPER_ADMIN
  ADMIN
  PARTNER
  RENTER
}

enum Status {
  ACTIVE
  INACTIVE
  PENDING
  SUSPENDED
}

enum ProductStatus {
  AVAILABLE
  RENTED
  UNAVAILABLE
}

enum RentalStatus {
  PENDING
  CONFIRMED
  ACTIVE
  COMPLETED
  CANCELLED
}

enum ShopStatus {
  PENDING
  APPROVED
  SUSPENDED
}
```

### 🔑 Naming Conventions
- **Tables**: lowercase, plural (users, products, rentals, shops)
- **Columns**: camelCase (firstName, createdAt, isActive)
- **Enums**: UPPER_SNAKE_CASE (ACTIVE, PENDING, COMPLETED)
- **Relations**: camelCase (userId, productId, shopId)

---

## 🔧 API Standards

### 📡 API Response Format
```typescript
// Standard API Response
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Example Response
{
  "success": true,
  "data": [...],
  "message": "Data retrieved successfully",
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10
  }
}
```

### 🛣️ API Route Structure
```typescript
// src/app/api/products/route.ts
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const category = searchParams.get('category');
    const brand = searchParams.get('brand');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');

    // Implementation
    const products = await getProducts({
      page,
      limit,
      category,
      brand,
      minPrice,
      maxPrice
    });

    return NextResponse.json({
      success: true,
      data: products,
      message: 'Products retrieved successfully',
      pagination: {
        page,
        limit,
        total: products.total,
        totalPages: Math.ceil(products.total / limit)
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}
```

---

## 🧩 Component Standards

### 📄 Page Template Pattern
```typescript
// src/components/templates/PageTemplate.tsx
interface PageTemplateProps<T> {
  pageKey: string;
  titleKey: string;
  descriptionKey: string;
  apiEndpoint: string;
  columns: Column[];
  formFields: FormField[];
  filters?: Filter[];
}

export function PageTemplate<T>({
  pageKey,
  titleKey,
  descriptionKey,
  apiEndpoint,
  columns,
  formFields,
  filters
}: PageTemplateProps<T>) {
  // Implementation
}
```

### 🎨 UI Component Pattern
```typescript
// src/components/ui/Button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  ...props
}: ButtonProps) {
  // Implementation
}
```

### 🛍️ Product Card Component
```typescript
// src/components/product/ProductCard.tsx
interface ProductCardProps {
  product: {
    id: string;
    name: string;
    brand: string;
    price: number;
    images: string[];
    rating?: number;
  };
  onWishlistToggle?: (productId: string) => void;
  isWishlisted?: boolean;
}

export function ProductCard({
  product,
  onWishlistToggle,
  isWishlisted = false
}: ProductCardProps) {
  // Implementation with hover effects and wishlist functionality
}
```

---

## 🧪 Testing Standards

### 📋 Test Structure
```typescript
// src/__tests__/[component].test.tsx
import { render, screen } from '@testing-library/react';
import { Component } from '../components/Component';

describe('Component', () => {
  it('should render correctly', () => {
    render(<Component />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });

  it('should handle user interactions', () => {
    // Test implementation
  });
});
```

### 🔧 Test Configuration
```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
  ],
};
```

---

## 🚀 Development Commands

### 📝 Package.json Scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:e2e": "playwright test",
    "db:generate": "prisma generate",
    "db:push": "prisma db push",
    "db:migrate": "prisma migrate dev",
    "db:studio": "prisma studio",
    "create-page": "node scripts/create-page.js",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

---

## 📚 Documentation Standards

### 📖 README.md Structure
```markdown
# OneCloset - แพลตฟอร์มเช่าเสื้อผ้าออนไลน์

## คุณสมบัติหลัก
- เช่าเสื้อผ้าออนไลน์
- ระบบจัดการร้านค้า
- ระบบรีวิวและคะแนนความน่าเชื่อถือ
- ระบบการชำระเงิน
- ระบบการจัดส่งและส่งคืน

## การติดตั้ง
1. Clone โปรเจค
2. ติดตั้ง dependencies
3. ตั้งค่าฐานข้อมูล
4. รันโปรเจค

## การใช้งาน
- การเช่าเสื้อผ้า
- การจัดการร้านค้า
- การจัดการการเช่า

## การพัฒนาต่อ
- การเพิ่มฟีเจอร์ใหม่
- การแก้ไขฐานข้อมูล
- การทดสอบ

## License
MIT License
```

### 📋 API Documentation
```markdown
## API Endpoints

### GET /api/products
Get all products with filtering and pagination

**Query Parameters:**
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)
- `category`: Product category
- `brand`: Product brand
- `minPrice`: Minimum price
- `maxPrice`: Maximum price
- `size`: Product size
- `color`: Product color

**Response:**
```json
{
  "success": true,
  "data": [...],
  "pagination": {...}
}
```

### POST /api/rentals
Create a new rental

**Request Body:**
```json
{
  "productId": "string",
  "startDate": "2024-01-01",
  "endDate": "2024-01-05"
}
```
```

---

## 🔒 Security Standards

### 🛡️ Authentication & Authorization
```typescript
// src/lib/auth.ts
export const authConfig = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Implementation
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  callbacks: {
    async jwt({ token, user }) {
      // Implementation
    },
    async session({ session, token }) {
      // Implementation
    }
  }
}
```

### 🔐 Role-Based Access Control (RBAC)
```typescript
// src/lib/permissions.ts
export const permissions = {
  products: {
    view: 'products.view',
    manage: 'products.manage',
  },
  rentals: {
    view: 'rentals.view',
    manage: 'rentals.manage',
  },
  shops: {
    view: 'shops.view',
    manage: 'shops.manage',
  },
  users: {
    view: 'users.view',
    manage: 'users.manage',
  },
  // ... more permissions
}

export const roles = {
  SUPER_ADMIN: Object.values(permissions).flat(),
  ADMIN: ['products.view', 'products.manage', 'rentals.view', 'rentals.manage', 'shops.view', 'shops.manage', 'users.view'],
  PARTNER: ['products.view', 'products.manage', 'rentals.view'],
  RENTER: ['products.view', 'rentals.view', 'rentals.manage'],
}
```

---

## 📦 Dependencies Standards

### 📋 Core Dependencies
```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "typescript": "^5.0.0",
    "@prisma/client": "^6.0.0",
    "next-auth": "^5.0.0",
    "tailwindcss": "^4.0.0",
    "@radix-ui/react-*": "^1.0.0",
    "zod": "^3.0.0",
    "zustand": "^5.0.0",
    "lucide-react": "^1.0.0",
    "react-hook-form": "^7.0.0",
    "@hookform/resolvers": "^3.0.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0",
    "date-fns": "^3.0.0",
    "react-datepicker": "^5.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "prisma": "^6.0.0",
    "eslint": "^9.0.0",
    "prettier": "^3.0.0",
    "jest": "^29.0.0",
    "@testing-library/react": "^14.0.0",
    "@playwright/test": "^1.0.0"
  }
}
```

---

## 🎯 Checklist สำหรับโปรเจคใหม่

### ✅ Setup Phase
- [ ] สร้างโครงสร้างโฟลเดอร์ตามมาตรฐาน
- [ ] ติดตั้ง dependencies หลัก
- [ ] ตั้งค่า TypeScript, ESLint, Prettier
- [ ] ตั้งค่า Tailwind CSS
- [ ] สร้างไฟล์ README.md
- [ ] สร้างไฟล์ DEVELOPMENT_STANDARDS.md

### ✅ Database Phase
- [ ] ตั้งค่า Prisma schema
- [ ] สร้าง models หลัก (User, Product, Rental, Shop)
- [ ] ตั้งค่า migrations
- [ ] สร้าง seed data

### ✅ Frontend Phase
- [ ] สร้าง layout components (Header, Footer, Sidebar)
- [ ] สร้าง UI components หลัก
- [ ] สร้าง Product components
- [ ] ตั้งค่าระบบ i18n
- [ ] สร้าง page templates

### ✅ Backend Phase
- [ ] สร้าง API routes หลัก
- [ ] ตั้งค่าระบบ authentication
- [ ] สร้าง middleware สำหรับ authorization
- [ ] ตั้งค่าระบบ error handling

### ✅ Testing Phase
- [ ] ตั้งค่า Jest configuration
- [ ] สร้าง unit tests หลัก
- [ ] ตั้งค่า Playwright สำหรับ E2E tests
- [ ] สร้าง test utilities

### ✅ Documentation Phase
- [ ] อัพเดท README.md
- [ ] สร้าง API documentation
- [ ] สร้าง user guide
- [ ] สร้าง development guide

---

## 🔄 การอัพเดทมาตรฐาน

### 📝 เมื่อมีการเปลี่ยนแปลงมาตรฐาน
1. อัพเดทไฟล์ `DEVELOPMENT_STANDARDS.md`
2. อัพเดทโปรเจคเก่าทั้งหมด
3. แจ้งทีมพัฒนาถึงการเปลี่ยนแปลง
4. อัพเดท documentation

### 📚 การเรียนรู้มาตรฐานใหม่
1. อ่านไฟล์ `DEVELOPMENT_STANDARDS.md`
2. ดูตัวอย่างจากโปรเจคเก่า
3. ฝึกใช้งานในโปรเจคทดสอบ
4. ปรึกษาทีมพัฒนาหากมีข้อสงสัย

---

## 🎯 สรุป

การใช้มาตรฐานการพัฒนานี้จะช่วยให้:

1. **ผู้ใช้งาน** รู้สึกคุ้นชินกับระบบใหม่
2. **นักพัฒนา** ทำงานได้เร็วขึ้นด้วยเทมเพลตสำเร็จรูป
3. **ทีม** มีความสอดคล้องในการพัฒนา
4. **โปรเจค** มีคุณภาพและความเสถียรสูง

**🚀 เริ่มต้นโปรเจค OneCloset ใหม่ด้วยมาตรฐานนี้เพื่อประสบการณ์การใช้งานที่สอดคล้องกัน!**
