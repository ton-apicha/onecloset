# 🚀 Deploy OneCloset to GitHub - Step by Step

## 📋 ขั้นตอนการอัปโหลดโปรเจค OneCloset ไป GitHub

### Step 1: สร้าง Repository บน GitHub

1. **เปิดเว็บไซต์ GitHub**
   - ไปที่: https://github.com
   - Sign in ด้วย account ของคุณ

2. **สร้าง Repository ใหม่**
   - คลิกปุ่ม "New" หรือ "+" (มุมขวาบน)
   - ตั้งชื่อ: `onecloset`
   - เลือก "Public" (แนะนำ) หรือ "Private"
   - **อย่าเลือก** "Add a README file" เพราะเรามีแล้ว
   - คลิก "Create repository"

### Step 2: เชื่อมต่อ Local Repository

หลังจากสร้าง repository แล้ว ให้ใช้คำสั่งเหล่านี้ใน terminal:

```bash
# เพิ่ม remote origin (แทนที่ YOUR_USERNAME ด้วย username ของคุณ)
git remote add origin https://github.com/YOUR_USERNAME/onecloset.git

# ตรวจสอบ remote
git remote -v

# Push code ไปยัง GitHub
git push -u origin main
```

### Step 3: ตรวจสอบการอัปโหลด

1. ไปที่ repository URL: `https://github.com/YOUR_USERNAME/onecloset`
2. ตรวจสอบว่าไฟล์ทั้งหมดถูกอัปโหลดแล้ว
3. README.md ควรแสดงผลได้ถูกต้อง

### Step 4: ตั้งค่า Repository

#### 4.1 เพิ่ม Description และ Topics
- ไปที่ Settings > General
- เพิ่ม Description: "แพลตฟอร์มเช่าเสื้อผ้าแบรนด์เนมออนไลน์ที่ดีที่สุดในประเทศไทย"
- เพิ่ม Topics: `nextjs`, `typescript`, `tailwindcss`, `fashion`, `rental`, `thailand`

#### 4.2 ตั้งค่า Branch Protection (แนะนำ)
- ไปที่ Settings > Branches
- Add rule สำหรับ `main` branch
- เลือก "Require a pull request before merging"

### Step 5: Deploy เว็บไซต์

#### 5.1 Vercel (แนะนำ)
1. ไปที่: https://vercel.com
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
1. ไปที่: https://netlify.com
2. Sign in ด้วย GitHub account
3. คลิก "New site from Git"
4. เลือก repository `onecloset`
5. Build command: `npm run build`
6. Publish directory: `.next`
7. คลิก "Deploy site"

### Step 6: การอัปเดต Code

เมื่อมีการเปลี่ยนแปลง code:

```bash
# Add changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push origin main
```

---

## 🎯 สรุป

หลังจากทำตามขั้นตอนข้างต้น คุณจะมี:
- ✅ GitHub repository พร้อมใช้งาน
- ✅ Code ที่ถูกอัปโหลดและจัดการอย่างเป็นระบบ
- ✅ เว็บไซต์ที่ deploy แล้วและพร้อมใช้งาน
- ✅ พร้อมสำหรับ team collaboration

**โปรเจค OneCloset พร้อมใช้งานแล้ว!** 🚀

---

## 📞 หากมีปัญหา

หากพบปัญหาในการ deploy สามารถ:
1. ตรวจสอบ error messages ใน terminal
2. ตรวจสอบ GitHub repository settings
3. ตรวจสอบ deployment logs ใน Vercel/Netlify
4. ดูคำแนะนำเพิ่มเติมใน `GITHUB_SETUP.md`
