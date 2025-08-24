# GitHub Repository Setup Guide

## 📋 ขั้นตอนการอัปโหลดโปรเจค OneCloset ไป GitHub

### วิธีที่ 1: ใช้ GitHub CLI (แนะนำ)

#### 1.1 ติดตั้ง GitHub CLI
```bash
# macOS
brew install gh

# Windows
winget install GitHub.cli

# Linux
sudo apt install gh
```

#### 1.2 Login GitHub CLI
```bash
gh auth login
# เลือก GitHub.com และทำตามขั้นตอน
```

#### 1.3 สร้าง Repository และ Push Code
```bash
# สร้าง repository และ push code ทันที
gh repo create onecloset --public --description "แพลตฟอร์มเช่าเสื้อผ้าแบรนด์เนมออนไลน์ที่ดีที่สุดในประเทศไทย" --source=. --remote=origin --push
```

### วิธีที่ 2: สร้างผ่านเว็บไซต์ GitHub

#### 2.1 สร้าง Repository บน GitHub

1. ไปที่ [GitHub.com](https://github.com)
2. คลิกปุ่ม "New" หรือ "+" เพื่อสร้าง repository ใหม่
3. ตั้งชื่อ repository: `onecloset`
4. เลือก "Public" หรือ "Private" ตามต้องการ
5. **อย่าเลือก** "Add a README file" เพราะเรามีแล้ว
6. คลิก "Create repository"

#### 2.2 เชื่อมต่อ Local Repository กับ GitHub

หลังจากสร้าง repository แล้ว GitHub จะแสดงคำสั่ง ให้ใช้คำสั่งเหล่านี้:

```bash
# เพิ่ม remote origin (แทนที่ YOUR_USERNAME ด้วย username ของคุณ)
git remote add origin https://github.com/YOUR_USERNAME/onecloset.git

# เปลี่ยนชื่อ branch เป็น main (ถ้าจำเป็น)
git branch -M main

# Push code ไปยัง GitHub
git push -u origin main
```

### 3. ตรวจสอบการอัปโหลด

1. ไปที่ repository URL: `https://github.com/YOUR_USERNAME/onecloset`
2. ตรวจสอบว่าไฟล์ทั้งหมดถูกอัปโหลดแล้ว
3. README.md ควรแสดงผลได้ถูกต้อง

### 4. ตั้งค่า Repository

#### 4.1 เพิ่ม Description และ Topics
- ไปที่ Settings > General
- เพิ่ม Description: "แพลตฟอร์มเช่าเสื้อผ้าแบรนด์เนมออนไลน์ที่ดีที่สุดในประเทศไทย"
- เพิ่ม Topics: `nextjs`, `typescript`, `tailwindcss`, `fashion`, `rental`, `thailand`

#### 4.2 ตั้งค่า Branch Protection (แนะนำ)
- ไปที่ Settings > Branches
- Add rule สำหรับ `main` branch
- เลือก "Require a pull request before merging"

#### 4.3 ตั้งค่า GitHub Pages (ถ้าต้องการ)
- ไปที่ Settings > Pages
- Source: Deploy from a branch
- Branch: `main`
- Folder: `/ (root)`

### 5. การ Deploy

#### 5.1 Vercel (แนะนำ)
1. ไปที่ [Vercel.com](https://vercel.com)
2. Sign in ด้วย GitHub account
3. คลิก "New Project"
4. เลือก repository `onecloset`
5. ตั้งค่า Environment Variables:
   ```
   NEXTAUTH_URL=https://your-domain.vercel.app
   NEXTAUTH_SECRET=your-secret-key
   ```
6. คลิก "Deploy"

#### 5.2 Netlify
1. ไปที่ [Netlify.com](https://netlify.com)
2. Sign in ด้วย GitHub account
3. คลิก "New site from Git"
4. เลือก repository `onecloset`
5. Build command: `npm run build`
6. Publish directory: `.next`
7. คลิก "Deploy site"

#### 5.3 Docker
```bash
# Build Docker image
docker build -t onecloset .

# Run container
docker run -p 3000:3000 onecloset
```

### 6. การอัปเดต Code

เมื่อมีการเปลี่ยนแปลง code:

```bash
# Add changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push origin main
```

### 7. การทำงานเป็นทีม

#### 7.1 Fork และ Pull Request
1. สมาชิกทีม Fork repository
2. Clone fork ลงเครื่อง
3. สร้าง feature branch
4. ทำการเปลี่ยนแปลง
5. Push ไปยัง fork
6. สร้าง Pull Request

#### 7.2 Branch Strategy
- `main`: Production code
- `develop`: Development code
- `feature/*`: Feature branches
- `hotfix/*`: Hotfix branches

### 8. การตั้งค่า CI/CD

#### 8.1 GitHub Actions
สร้างไฟล์ `.github/workflows/ci.yml`:

```yaml
name: CI/CD

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2
      with:
        node-version: '18'
    - run: npm ci
    - run: npm run lint
    - run: npm run type-check
    - run: npm run build
```

### 9. การจัดการ Issues และ Projects

#### 9.1 Issues
- สร้าง Issue สำหรับ bugs และ features
- ใช้ labels เพื่อจัดหมวดหมู่
- Assign ให้สมาชิกทีมที่เหมาะสม

#### 9.2 Projects
- สร้าง Project board สำหรับจัดการงาน
- ใช้ Kanban board หรือ Table view
- เชื่อมต่อกับ Issues และ Pull Requests

### 10. การตั้งค่า Security

#### 10.1 Dependabot
- ไปที่ Settings > Security & analysis
- Enable Dependabot alerts
- Enable Dependabot security updates

#### 10.2 Code scanning
- ไปที่ Settings > Security & analysis
- Enable Code scanning
- เลือก GitHub Advanced Security (ถ้ามี)

### 11. การตั้งค่า Analytics

#### 11.1 GitHub Insights
- ไปที่ Insights tab
- ดู Traffic, Commits, Contributors
- วิเคราะห์การใช้งาน repository

### 12. การตั้งค่า Integrations

#### 12.1 Slack Integration
- ไปที่ Settings > Integrations
- เพิ่ม Slack app
- ตั้งค่า notifications

#### 12.2 Discord Integration
- ใช้ GitHub webhooks
- ตั้งค่า Discord bot

---

## 🎯 สรุป

หลังจากทำตามขั้นตอนข้างต้น คุณจะมี:
- ✅ GitHub repository พร้อมใช้งาน
- ✅ Code ที่ถูกอัปโหลดและจัดการอย่างเป็นระบบ
- ✅ CI/CD pipeline พร้อมใช้งาน
- ✅ Deployment options หลายตัวเลือก
- ✅ Team collaboration tools
- ✅ Security และ monitoring features

**โปรเจค OneCloset พร้อมสำหรับการพัฒนาและ deployment แล้ว!** 🚀
