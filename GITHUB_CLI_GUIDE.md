# GitHub CLI Guide

## 🔧 การใช้งาน GitHub CLI

### 1. ติดตั้ง GitHub CLI

```bash
# macOS
brew install gh

# Windows
winget install GitHub.cli

# Linux
sudo apt install gh
```

### 2. Login GitHub CLI

#### วิธีที่ 1: Interactive Login
```bash
gh auth login
# เลือก GitHub.com และทำตามขั้นตอน
```

#### วิธีที่ 2: Token Login
```bash
# สร้าง Personal Access Token ที่ GitHub.com
# ไปที่ Settings > Developer settings > Personal access tokens
# สร้าง token ใหม่และ copy มา

gh auth login --with-token < your-token-here
```

### 3. สร้าง Repository

```bash
# สร้าง repository และ push code ทันที
gh repo create onecloset --public --description "แพลตฟอร์มเช่าเสื้อผ้าแบรนด์เนมออนไลน์ที่ดีที่สุดในประเทศไทย" --source=. --remote=origin --push
```

### 4. คำสั่งที่มีประโยชน์

```bash
# ตรวจสอบสถานะ login
gh auth status

# ดู repository
gh repo view

# สร้าง issue
gh issue create --title "Bug report" --body "Description"

# สร้าง pull request
gh pr create --title "Add new feature" --body "Description"

# Clone repository
gh repo clone username/repository

# Fork repository
gh repo fork username/repository
```

### 5. การตั้งค่า Repository

```bash
# เพิ่ม topics
gh repo edit --add-topic nextjs,typescript,tailwindcss,fashion,rental,thailand

# เปลี่ยน description
gh repo edit --description "แพลตฟอร์มเช่าเสื้อผ้าแบรนด์เนมออนไลน์ที่ดีที่สุดในประเทศไทย"

# เปลี่ยน visibility
gh repo edit --visibility public
```

---

## 🚀 สำหรับ OneCloset Project

### สร้าง Repository และ Deploy

```bash
# 1. Login (ถ้ายังไม่ได้ login)
gh auth login

# 2. สร้าง repository และ push code
gh repo create onecloset --public --description "แพลตฟอร์มเช่าเสื้อผ้าแบรนด์เนมออนไลน์ที่ดีที่สุดในประเทศไทย" --source=. --remote=origin --push

# 3. เพิ่ม topics
gh repo edit --add-topic nextjs,typescript,tailwindcss,fashion,rental,thailand

# 4. ตรวจสอบ repository
gh repo view --web
```

### การอัปเดต Code

```bash
# Add changes
git add .

# Commit changes
git commit -m "Update description"

# Push to GitHub
git push origin main
```

---

## 📞 หากมีปัญหา

1. **Login ไม่สำเร็จ**
   - ตรวจสอบ internet connection
   - ลองใช้ token แทน interactive login
   - ตรวจสอบ GitHub account settings

2. **Repository สร้างไม่สำเร็จ**
   - ตรวจสอบว่า repository name ไม่ซ้ำ
   - ตรวจสอบ permissions ของ GitHub account
   - ลองใช้ชื่อ repository อื่น

3. **Push ไม่สำเร็จ**
   - ตรวจสอบ remote origin
   - ตรวจสอบ branch name
   - ลอง force push (ระวัง!)

---

## 🎯 สรุป

GitHub CLI เป็นเครื่องมือที่มีประโยชน์สำหรับการจัดการ GitHub repository ผ่าน command line ทำให้การทำงานเร็วขึ้นและสะดวกขึ้น

**หากไม่สามารถใช้ GitHub CLI ได้ สามารถใช้วิธีสร้าง repository ผ่านเว็บไซต์ GitHub ได้ตามคำแนะนำใน `DEPLOY_TO_GITHUB.md`**
