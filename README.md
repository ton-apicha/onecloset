# OneCloset - แพลตฟอร์มเช่าเสื้อผ้าแบรนด์เนม

แพลตฟอร์มเช่าเสื้อผ้าแบรนด์เนมออนไลน์ที่ดีที่สุดในประเทศไทย พัฒนาด้วย Next.js 14, TypeScript, และ Tailwind CSS

## 🚀 Live Demo

**เว็บไซต์พร้อมใช้งานแล้ว!** 🌐
- **Local Development**: http://localhost:3000
- **Production**: (รอ deployment)

## ✅ สถานะปัจจุบัน

**โปรเจคพร้อมใช้งานแล้ว!** 🎉

- ✅ หน้าเว็บหลักทำงานได้ปกติ
- ✅ หน้าสินค้าพร้อมใช้งาน
- ✅ หน้าล็อกอินทำงานได้
- ✅ **CSS และ JavaScript ทำงานปกติ** ✨
- ✅ **Responsive design** 📱
- ✅ **Modern UI/UX** 🎨
- ✅ **Custom CSS classes** 🎯
- ✅ **ออกแบบใหม่คล้าย bchurunway.com** 🎪
- ✅ **โทนสี pastel เขียวอ่อน** 🌿

### 🔧 การแก้ไขล่าสุด
- ✅ แก้ไขปัญหาการ import components
- ✅ สร้างหน้าเว็บใหม่ที่เรียบง่ายและทำงานได้
- ✅ **เพิ่ม custom CSS classes** เพื่อให้แน่ใจว่า styles ทำงาน
- ✅ **รีสตาร์ทเซิร์ฟเวอร์** และ rebuild โปรเจค
- ✅ **ออกแบบใหม่คล้าย bchurunway.com** พร้อมฟีเจอร์ที่ทันสมัยกว่า
- ✅ **เปลี่ยนโทนสีเป็น pastel เขียวอ่อน** ให้ดูสดใสและเป็นมิตร
- ✅ **เพิ่มฟีเจอร์ใหม่** เช่น sidebar, rental period tabs, member club
- ✅ **Git repository พร้อมใช้งาน** 📦

## 🎨 การออกแบบใหม่

### โทนสีหลัก
- **Primary**: Pastel Green (`#10B981` - `#059669`)
- **Secondary**: Emerald (`#10B981` - `#047857`)
- **Background**: Light Green (`#F0FDF4` - `#ECFDF5`)
- **Accent**: Soft Green (`#D1FAE5` - `#A7F3D0`)

### ฟีเจอร์ใหม่ที่เพิ่มเข้ามา
1. **Top Bar Navigation** - แสดงภาษาและ quick actions
2. **Sidebar with Rental Period Tabs** - เลือกระยะเวลาเช่า 4 หรือ 8 วัน
3. **Advanced Search & Filters** - ค้นหาตามสินค้า, ดีไซเนอร์, แท็ก
4. **Category Filters** - ตัวกรองหมวดหมู่แบบ visual
5. **Product Cards with Tags** - แสดงแท็กและข้อมูลเพิ่มเติม
6. **Member Club Section** - สิทธิพิเศษสำหรับสมาชิก
7. **Floating LINE Button** - ปุ่มติดต่อ LINE
8. **Enhanced Login Form** - ฟอร์มล็อกอินที่สวยงามและใช้งานง่าย

## 🚀 การติดตั้งและรันโปรเจค

### ความต้องการของระบบ
- Node.js 18+ 
- npm หรือ yarn
- PostgreSQL (สำหรับฐานข้อมูล - ยังไม่ได้ตั้งค่า)

### ขั้นตอนการติดตั้ง

1. **Clone โปรเจค**
```bash
git clone https://github.com/yourusername/onecloset.git
cd OneCloset
```

2. **ติดตั้ง Dependencies**
```bash
npm install
```

3. **ตั้งค่าสภาพแวดล้อม**
```bash
# สร้างไฟล์ .env.local
cp env.example .env.local

# แก้ไขค่าต่างๆ ใน .env.local
DATABASE_URL="postgresql://username:password@localhost:5432/onecloset"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret-key-here"
NODE_ENV="development"
```

4. **รันโปรเจค**
```bash
# Development mode
npm run dev

# หรือ Production build
npm run build
npm start
```

## 🌐 การเข้าถึง

- **เว็บไซต์หลัก**: http://localhost:3000
- **หน้าสินค้า**: http://localhost:3000/products
- **หน้าล็อกอิน**: http://localhost:3000/login
- **API Health Check**: http://localhost:3000/api/health-check

## 📁 โครงสร้างโปรเจค

```
OneCloset/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Authentication pages
│   │   ├── (dashboard)/       # Dashboard pages
│   │   ├── (public)/          # Public pages
│   │   ├── admin/             # Admin pages
│   │   ├── api/               # API routes
│   │   └── globals.css        # Global styles (อัปเดตแล้ว)
│   ├── components/            # React components
│   │   ├── cart/              # Shopping cart components
│   │   ├── layout/            # Layout components
│   │   ├── product/           # Product components
│   │   ├── products/          # Products listing components
│   │   └── ui/                # UI components
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utility libraries
│   ├── locales/               # Internationalization
│   └── types/                 # TypeScript type definitions
├── prisma/                    # Database schema
├── public/                    # Static assets
└── scripts/                   # Build and deployment scripts
```

## 🛠️ เทคโนโลยีที่ใช้

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS + Custom CSS classes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Date Handling**: date-fns

## 🎯 ฟีเจอร์ที่ทำงานได้

### ✅ หน้าหลัก (Homepage) - ออกแบบใหม่
- **Top Bar Navigation** พร้อม language selector และ quick actions
- **Product Grid Layout** แสดงสินค้าในรูปแบบ grid ที่สวยงาม
- **Sidebar with Rental Period Tabs** เลือกระยะเวลาเช่า 4 หรือ 8 วัน
- **Search & Filter Form** ค้นหาและกรองสินค้า
- **Member Club Section** สิทธิพิเศษสำหรับสมาชิก
- **Categories Section** หมวดหมู่สินค้าพร้อม gradient colors
- **Promotion Banner** แสดงโปรโมชั่นและราคาใหม่
- **Service Description** อธิบายขั้นตอนการเช่า 3 ขั้นตอน
- **Floating LINE Button** ปุ่มติดต่อ LINE

### ✅ หน้าสินค้า (Products) - ออกแบบใหม่
- **Advanced Search Bar** ค้นหาตามสินค้า, ดีไซเนอร์, แท็ก
- **Category Filter Buttons** ตัวกรองหมวดหมู่แบบ visual
- **Sort Options** เรียงลำดับตามยอดนิยม, ราคา, คะแนน
- **Product Cards with Enhanced Info** แสดง:
  - Discount badges
  - Rating และ reviews
  - Designer information
  - Size options
  - Product tags
  - Original price และ discounted price
- **Sidebar with Rental Controls** ควบคุมการเช่า
- **No Results State** แสดงเมื่อไม่พบสินค้า

### ✅ หน้าล็อกอิน (Login) - ออกแบบใหม่
- **Modern Login Form** ฟอร์มที่สวยงามและใช้งานง่าย
- **Password Visibility Toggle** แสดง/ซ่อนรหัสผ่าน
- **Remember Me Checkbox** จดจำการเข้าสู่ระบบ
- **Social Login Buttons** Google และ Facebook
- **Forgot Password Link** ลิงก์ลืมรหัสผ่าน
- **Sign Up Link** ลิงก์สมัครสมาชิก
- **Background Decoration** เอฟเฟกต์พื้นหลังที่สวยงาม

### ✅ UI/UX Features - อัปเดตใหม่
- **Pastel Green Color Scheme** 🌿 โทนสีเขียวอ่อนที่สดใส
- **Modern gradient design** 🌈
- **Smooth animations และ transitions** ✨
- **Responsive design** สำหรับทุกอุปกรณ์ 📱
- **Interactive hover effects** 🎯
- **Loading states** ⏳
- **Error handling** 🛡️
- **Accessibility features** ♿
- **Custom CSS classes** สำหรับ styling ที่แน่นอน 🎯
- **Floating elements** 🎈
- **Enhanced shadows และ depth** 🌟

## 🔧 คำสั่งที่มีประโยชน์

```bash
# Development
npm run dev              # รันในโหมด development
npm run dev:debug        # รันพร้อม debug mode
npm run dev:turbo        # รันด้วย Turbo mode

# Build & Production
npm run build            # Build สำหรับ production
npm run build:analyze    # Build พร้อม bundle analyzer
npm start                # รัน production server

# Database (ยังไม่ได้ตั้งค่า)
npm run db:generate      # Generate Prisma client
npm run db:push          # Push schema to database
npm run db:migrate       # Run database migrations
npm run db:studio        # Open Prisma Studio

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint errors
npm run type-check       # TypeScript type checking

# Testing
npm run test             # Run tests
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Run tests with coverage

# Utilities
npm run clean            # Clean build files
npm run health           # Check server health
```

## 📝 การพัฒนา

### การเพิ่มหน้าใหม่
1. สร้างไฟล์ใน `src/app/` ตามโครงสร้าง Next.js App Router
2. ใช้ Tailwind CSS classes + custom CSS classes สำหรับ styling
3. เพิ่ม TypeScript types ใน `src/types/`
4. ใช้โทนสี pastel green เป็นหลัก

### การเพิ่ม API Route
1. สร้างไฟล์ใน `src/app/api/`
2. ใช้ `@/lib/api` สำหรับการจัดการ API calls
3. ใช้ `@/lib/error-handler` สำหรับการจัดการ error

### การเพิ่ม Component
1. สร้างไฟล์ใน `src/components/`
2. ใช้ TypeScript interfaces สำหรับ props
3. ใช้ Tailwind CSS + custom CSS classes สำหรับ styling
4. ใช้โทนสี pastel green และ emerald

## 🚀 Deployment

### Vercel (แนะนำ)
```bash
# ติดตั้ง Vercel CLI
npm i -g vercel

# Deploy
vercel

# หรือเชื่อมต่อกับ GitHub repository
# 1. Push code ไป GitHub
# 2. เชื่อมต่อ Vercel กับ GitHub repository
# 3. Vercel จะ auto-deploy เมื่อมี commit ใหม่
```

### Netlify
```bash
# Build project
npm run build

# Deploy to Netlify
# 1. สร้างไฟล์ netlify.toml
# 2. Upload build folder ไป Netlify
# 3. หรือเชื่อมต่อกับ GitHub repository
```

### Docker
```dockerfile
# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🐛 การแก้ไขปัญหา

### ปัญหาที่พบบ่อย

1. **CSS ไม่แสดงผล**
   - ✅ **แก้ไขแล้ว**: เพิ่ม custom CSS classes ใน `globals.css`
   - รีสตาร์ท development server
   - ตรวจสอบว่า Tailwind CSS compile แล้ว

2. **Build errors**
   - รัน `npm run clean` แล้ว `npm install` ใหม่
   - ตรวจสอบ TypeScript errors ด้วย `npm run type-check`

3. **Import errors**
   - ตรวจสอบ casing ของชื่อไฟล์
   - ตรวจสอบ named exports vs default exports

4. **Webpack module errors**
   - ลบโฟลเดอร์ `.next` แล้วรัน `npm run dev` ใหม่

### ✅ ปัญหาที่แก้ไขแล้ว
- ✅ การ import components ไม่ถูกต้อง
- ✅ CSS ไม่แสดงผล (เพิ่ม custom CSS classes)
- ✅ JavaScript ไม่ทำงาน (รีสตาร์ทเซิร์ฟเวอร์)
- ✅ Build errors (แก้ไข ESLint errors)
- ✅ การออกแบบ UI/UX ให้ทันสมัยและใช้งานง่าย

## 🚧 สิ่งที่ต้องทำต่อไป

### ฟีเจอร์ที่ยังไม่ได้ทำ
- [ ] ตั้งค่าฐานข้อมูล PostgreSQL
- [ ] ระบบ Authentication จริง
- [ ] ระบบตะกร้าสินค้า
- [ ] ระบบการชำระเงิน
- [ ] ระบบจัดการร้านค้า
- [ ] ระบบแอดมิน
- [ ] ระบบรีวิวและคะแนน
- [ ] การรองรับหลายภาษา
- [ ] ระบบแจ้งเตือน LINE
- [ ] ระบบ Member Club จริง

### การปรับปรุง
- [ ] เพิ่ม unit tests
- [ ] เพิ่ม E2E tests
- [ ] Optimize performance
- [ ] เพิ่ม SEO features
- [ ] เพิ่ม PWA features
- [ ] เพิ่ม dark mode
- [ ] เพิ่ม animation effects
- [ ] เพิ่ม product image gallery
- [ ] เพิ่ม size recommendation system

## 🤝 Contributing

1. Fork โปรเจค
2. สร้าง feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit การเปลี่ยนแปลง (`git commit -m 'Add some AmazingFeature'`)
4. Push ไปยัง branch (`git push origin feature/AmazingFeature`)
5. เปิด Pull Request

## 📄 License

MIT License - ดูรายละเอียดใน [LICENSE](LICENSE) file

## 👥 ทีมพัฒนา

OneCloset Team - พัฒนาเพื่อการเช่าเสื้อผ้าที่ดีที่สุดในประเทศไทย

## 📞 ติดต่อ

- **Email**: info@onecloset.com
- **Phone**: 02-123-4567
- **Address**: กรุงเทพมหานคร, ประเทศไทย
- **LINE**: @onecloset

---

**หมายเหตุ**: โปรเจคนี้อยู่ในขั้นตอนการพัฒนา ฟีเจอร์บางอย่างอาจยังไม่สมบูรณ์ แต่หน้าเว็บหลักพร้อมใช้งานแล้ว! 🎉

**สถานะล่าสุด**: ออกแบบใหม่คล้าย bchurunway.com พร้อมโทนสี pastel เขียวอ่อน ✨🌿

**Git Repository**: พร้อมใช้งานและพร้อมสำหรับ deployment 🚀
