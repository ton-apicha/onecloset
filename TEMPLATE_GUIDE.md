# OneCloset Template System Guide

## ภาพรวม

เราได้สร้างระบบ Template กลางสำหรับ OneCloset เพื่อให้ทุกหน้าใช้รูปแบบเดียวกันและง่ายต่อการบำรุงรักษา

## โครงสร้าง Template

### 1. PageLayout Component
```typescript
// src/components/layout/PageLayout.tsx
import PageLayout from '@/components/layout/PageLayout'

// การใช้งานพื้นฐาน
<PageLayout>
  {/* เนื้อหาหน้าเว็บ */}
</PageLayout>

// การใช้งานแบบกำหนดค่า
<PageLayout
  showHeader={true}
  showFooter={true}
  headerProps={{
    showSearch: true,
    showAuth: true,
    showCart: true,
    showMobileMenu: true
  }}
  className="custom-class"
>
  {/* เนื้อหาหน้าเว็บ */}
</PageLayout>
```

### 2. Header Component
```typescript
// src/components/layout/Header.tsx
import Header from '@/components/layout/Header'

// การใช้งาน
<Header
  showSearch={true}      // แสดงช่องค้นหา
  showAuth={true}        // แสดงปุ่มเข้าสู่ระบบ/สมัครสมาชิก
  showCart={true}        // แสดงปุ่มตะกร้า
  showMobileMenu={true}  // แสดงเมนูมือถือ
/>
```

### 3. Footer Component
```typescript
// src/components/layout/Footer.tsx
import Footer from '@/components/layout/Footer'

// การใช้งาน
<Footer />
```

## วิธีการสร้างหน้าใหม่

### 1. หน้าแบบพื้นฐาน
```typescript
// src/app/example/page.tsx
'use client'

import PageLayout from '@/components/layout/PageLayout'

export default function ExamplePage() {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          หน้าตัวอย่าง
        </h1>
        <p className="text-gray-600">
          เนื้อหาของหน้าเว็บ
        </p>
      </div>
    </PageLayout>
  )
}
```

### 2. หน้าแบบไม่มี Header
```typescript
export default function LoginPage() {
  return (
    <PageLayout showHeader={false}>
      {/* เนื้อหาหน้า Login */}
    </PageLayout>
  )
}
```

### 3. หน้าแบบไม่มี Footer
```typescript
export default function DashboardPage() {
  return (
    <PageLayout showFooter={false}>
      {/* เนื้อหาหน้า Dashboard */}
    </PageLayout>
  )
}
```

### 4. หน้าแบบกำหนด Header
```typescript
export default function AdminPage() {
  return (
    <PageLayout
      headerProps={{
        showSearch: false,
        showAuth: false,
        showCart: false,
        showMobileMenu: true
      }}
    >
      {/* เนื้อหาหน้า Admin */}
    </PageLayout>
  )
}
```

## CSS Classes ที่ใช้บ่อย

### Layout Classes
```css
/* Container */
.max-w-7xl mx-auto px-4 sm:px-6 lg:px-8

/* Section Spacing */
.py-20 px-4

/* Background */
.bg-gradient-to-br from-gray-50 to-white
```

### Component Classes
```css
/* Cards */
.card-modern
.feature-card
.product-card

/* Buttons */
.btn-primary
.btn-secondary
.btn-outline

/* Inputs */
.input-modern
.search-input

/* Badges */
.badge-modern
.badge-primary
.badge-success
.badge-warning
.badge-danger
```

### Animation Classes
```css
/* Fade In */
.fade-in

/* Slide In */
.slide-in-left

/* Pulse Glow */
.pulse-glow
```

## ตัวอย่างการสร้างหน้าใหม่

### 1. หน้า About
```typescript
// src/app/about/page.tsx
'use client'

import PageLayout from '@/components/layout/PageLayout'

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            เกี่ยวกับเรา
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            OneCloset คือแพลตฟอร์มเช่าเสื้อผ้าแบรนด์เนมออนไลน์ที่ดีที่สุดในประเทศไทย
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="feature-card">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              วิสัยทัศน์
            </h3>
            <p className="text-gray-600">
              เนื้อหาเกี่ยวกับวิสัยทัศน์
            </p>
          </div>
          
          <div className="feature-card">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              พันธกิจ
            </h3>
            <p className="text-gray-600">
              เนื้อหาเกี่ยวกับพันธกิจ
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
```

### 2. หน้า Contact
```typescript
// src/app/contact/page.tsx
'use client'

import PageLayout from '@/components/layout/PageLayout'

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ติดต่อเรา
          </h1>
          <p className="text-xl text-gray-600">
            เราพร้อมให้บริการและตอบคำถามของคุณ
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ชื่อ
              </label>
              <input
                type="text"
                className="input-modern"
                placeholder="ชื่อของคุณ"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                อีเมล
              </label>
              <input
                type="email"
                className="input-modern"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ข้อความ
              </label>
              <textarea
                className="input-modern"
                rows={4}
                placeholder="ข้อความของคุณ"
              />
            </div>
            
            <button type="submit" className="btn-primary w-full">
              ส่งข้อความ
            </button>
          </form>
        </div>
      </div>
    </PageLayout>
  )
}
```

## ข้อดีของระบบ Template

### 1. ความสม่ำเสมอ
- ทุกหน้าใช้ Header และ Footer เดียวกัน
- การออกแบบที่สอดคล้องกัน
- UX ที่เหมือนกัน

### 2. การบำรุงรักษาง่าย
- แก้ไข Header/Footer ที่เดียว
- อัพเดท CSS ที่เดียว
- ลดการเขียนโค้ดซ้ำ

### 3. ความยืดหยุ่น
- สามารถปิด/เปิดส่วนต่างๆ ได้
- กำหนดค่า Header ได้
- เพิ่ม CSS classes ได้

### 4. Performance
- โค้ดที่แยกส่วน
- การโหลดที่เร็วขึ้น
- การ cache ที่ดีขึ้น

## การแก้ไขปัญหา

### 1. CSS ไม่ทำงาน
- ตรวจสอบว่า import `PageLayout` แล้ว
- ตรวจสอบว่าใช้ CSS classes ที่ถูกต้อง
- ตรวจสอบ `globals.css`

### 2. Header/Footer ไม่แสดง
- ตรวจสอบ props ของ `PageLayout`
- ตรวจสอบว่า `showHeader={true}` และ `showFooter={true}`

### 3. Responsive ไม่ทำงาน
- ใช้ Tailwind responsive classes
- ตรวจสอบ viewport meta tag
- ทดสอบบนอุปกรณ์จริง

## ตัวอย่างการใช้งานเพิ่มเติม

### 1. หน้า Landing Page
```typescript
export default function LandingPage() {
  return (
    <PageLayout showFooter={false}>
      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4">
        {/* เนื้อหา Hero */}
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4">
        {/* เนื้อหา Features */}
      </section>
    </PageLayout>
  )
}
```

### 2. หน้า Dashboard
```typescript
export default function DashboardPage() {
  return (
    <PageLayout
      headerProps={{
        showSearch: false,
        showAuth: false,
        showCart: false
      }}
      showFooter={false}
    >
      {/* เนื้อหา Dashboard */}
    </PageLayout>
  )
}
```

## สรุป

ระบบ Template นี้ช่วยให้การพัฒนา OneCloset เป็นไปอย่างรวดเร็วและมีประสิทธิภาพ โดยทุกหน้าใหม่สามารถใช้ `PageLayout` เป็นพื้นฐานและเพิ่มเนื้อหาเฉพาะของแต่ละหน้าได้
