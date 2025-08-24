# OneCloset Monitoring & Debugging Environment

## ภาพรวม

ระบบติดตามและตรวจสอบการทำงานผิดพลาดของ OneCloset ได้รับการปรับปรุงให้มีความแม่นยำและครอบคลุมมากขึ้น

## ฟีเจอร์ที่เพิ่มเข้ามา

### 1. Health Check API
- **Endpoint**: `/api/health`
- **ข้อมูลที่ตรวจสอบ**:
  - สถานะเซิร์ฟเวอร์
  - เวลาทำงาน (Uptime)
  - การใช้หน่วยความจำ
  - เวลาตอบสนอง
  - สภาพแวดล้อม

### 2. Centralized Logging System
- **ไฟล์**: `src/lib/logger.ts`
- **ฟีเจอร์**:
  - Log levels (debug, info, warn, error)
  - Context-aware logging
  - Performance tracking
  - API request logging
  - Database operation logging

### 3. Error Handling System
- **ไฟล์**: `src/lib/error-handler.ts`
- **ฟีเจอร์**:
  - Custom error classes
  - Validation errors
  - Database errors
  - Authentication errors
  - Centralized error handling

### 4. Middleware for Request Tracking
- **ไฟล์**: `src/middleware.ts`
- **ฟีเจอร์**:
  - Request ID tracking
  - Response time measurement
  - Security headers
  - Request logging

### 5. Admin Dashboard
- **URL**: `/admin/dashboard`
- **ฟีเจอร์**:
  - Real-time health monitoring
  - System resource usage
  - Memory usage visualization
  - Quick actions panel
  - Auto-refresh every 30 seconds

### 6. Monitoring Script
- **ไฟล์**: `scripts/monitor.sh`
- **คำสั่ง**:
  ```bash
  ./scripts/monitor.sh monitor    # Continuous monitoring
  ./scripts/monitor.sh status     # Current status
  ./scripts/monitor.sh logs       # View logs
  ./scripts/monitor.sh health     # Health check
  ```

## NPM Scripts เพิ่มเติม

### Development Scripts
```bash
npm run dev:debug      # Debug mode with Node.js inspector
npm run dev:turbo      # Turbo mode for faster development
npm run dev:verbose    # Verbose logging
```

### Monitoring Scripts
```bash
npm run health         # Quick health check
npm run logs           # View server logs
npm run type-check     # TypeScript type checking
npm run lint:fix       # Auto-fix linting issues
```

### Database Scripts
```bash
npm run db:generate    # Generate Prisma client
npm run db:push        # Push schema to database
npm run db:migrate     # Run database migrations
npm run db:studio      # Open Prisma Studio
```

### Utility Scripts
```bash
npm run clean          # Clean build artifacts
npm run clean:all      # Clean everything including node_modules
```

## การตั้งค่า Configuration

### Next.js Configuration (`next.config.js`)
- Enhanced error handling
- Performance optimization
- Security headers
- Development debugging
- Source maps for debugging

### ESLint Configuration (`.eslintrc.json`)
- Error prevention rules
- TypeScript specific rules
- React best practices
- Security rules
- Performance optimization

### Prettier Configuration (`.prettierrc`)
- Consistent code formatting
- Tailwind CSS plugin integration
- Thai language support

## การใช้งาน

### 1. ตรวจสอบสถานะเซิร์ฟเวอร์
```bash
curl http://localhost:3000/api/health
```

### 2. เปิด Admin Dashboard
เปิดเบราว์เซอร์ไปที่: `http://localhost:3000/admin/dashboard`

### 3. เริ่มการติดตามแบบต่อเนื่อง
```bash
./scripts/monitor.sh monitor
```

### 4. ตรวจสอบ Logs
```bash
npm run logs
```

## การแก้ไขปัญหา

### 1. เซิร์ฟเวอร์ไม่ตอบสนอง
```bash
# ตรวจสอบ process
ps aux | grep next-server

# ตรวจสอบ port
lsof -i :3000

# รีสตาร์ทเซิร์ฟเวอร์
pkill -f next-server && npm run dev
```

### 2. Health Check ล้มเหลว
```bash
# ตรวจสอบ logs
npm run logs

# ตรวจสอบ dependencies
npm install --legacy-peer-deps

# ตรวจสอบ TypeScript
npm run type-check
```

### 3. Memory Usage สูง
```bash
# ตรวจสอบ memory usage
./scripts/monitor.sh status

# Clean build artifacts
npm run clean

# Restart server
pkill -f next-server && npm run dev
```

## การพัฒนาต่อ

### 1. เพิ่ม Metrics
- Database performance metrics
- API response time tracking
- Error rate monitoring
- User activity tracking

### 2. Alerting System
- Email notifications
- Slack integration
- SMS alerts
- Dashboard notifications

### 3. Performance Monitoring
- Real-time performance graphs
- Resource usage trends
- Bottleneck identification
- Optimization recommendations

## ข้อควรระวัง

1. **Security**: Admin dashboard ควรมีการ authentication
2. **Performance**: Monitoring scripts ไม่ควรส่งผลกระทบต่อ performance
3. **Logs**: ควรมีการ rotate logs เพื่อป้องกัน disk space หมด
4. **Privacy**: ข้อมูล sensitive ไม่ควรปรากฏใน logs

## การอัพเดท

ระบบ monitoring จะได้รับการอัพเดทอย่างต่อเนื่องเพื่อ:
- เพิ่มฟีเจอร์ใหม่
- ปรับปรุงประสิทธิภาพ
- แก้ไข bugs
- เพิ่มความปลอดภัย
