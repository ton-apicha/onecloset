import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format, formatDistanceToNow } from 'date-fns'
import { th } from 'date-fns/locale'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number, currency: string = 'THB'): string {
  return new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: currency,
  }).format(price)
}

export function formatDate(date: Date | string, locale: string = 'th'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  
  return format(dateObj, 'PPP', { locale: th })
}

export function formatRelativeTime(date: Date | string, locale: string = 'th'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  
  return formatDistanceToNow(dateObj, { 
    addSuffix: true, 
    locale: th 
  })
}

export function calculateRentalDays(startDate: Date, endDate: Date): number {
  const diffTime = Math.abs(endDate.getTime() - startDate.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
}

export function calculateRentalPrice(pricePerDay: number, startDate: Date, endDate: Date): number {
  const days = calculateRentalDays(startDate, endDate)
  return pricePerDay * days
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePassword(password: string): {
  isValid: boolean
  errors: string[]
} {
  const errors: string[] = []
  
  if (password.length < 8) {
    errors.push('รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร')
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('รหัสผ่านต้องมีตัวพิมพ์ใหญ่อย่างน้อย 1 ตัว')
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('รหัสผ่านต้องมีตัวพิมพ์เล็กอย่างน้อย 1 ตัว')
  }
  
  if (!/\d/.test(password)) {
    errors.push('รหัสผ่านต้องมีตัวเลขอย่างน้อย 1 ตัว')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function generateRandomId(): string {
  return Math.random().toString(36).substr(2, 9)
}

export function isImageFile(file: File): boolean {
  return file.type.startsWith('image/')
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

export function getStatusColor(status: string): string {
  const statusColors: Record<string, string> = {
    active: 'text-green-600 bg-green-100',
    inactive: 'text-gray-600 bg-gray-100',
    pending: 'text-yellow-600 bg-yellow-100',
    completed: 'text-blue-600 bg-blue-100',
    cancelled: 'text-red-600 bg-red-100',
    rented: 'text-purple-600 bg-purple-100',
    returned: 'text-green-600 bg-green-100',
    available: 'text-green-600 bg-green-100',
    unavailable: 'text-red-600 bg-red-100',
  }
  
  return statusColors[status.toLowerCase()] || 'text-gray-600 bg-gray-100'
}

export function getRoleLabel(role: string): string {
  const roleLabels: Record<string, string> = {
    SUPER_ADMIN: 'ผู้ดูแลระบบสูงสุด',
    ADMIN: 'ผู้ดูแลระบบ',
    PARTNER: 'พาร์ทเนอร์',
    RENTER: 'ผู้เช่า',
  }
  
  return roleLabels[role] || role
}

export function getShopStatusLabel(status: string): string {
  const statusLabels: Record<string, string> = {
    PENDING: 'รออนุมัติ',
    APPROVED: 'อนุมัติแล้ว',
    SUSPENDED: 'ระงับแล้ว',
  }
  
  return statusLabels[status] || status
}

export function getRentalStatusLabel(status: string): string {
  const statusLabels: Record<string, string> = {
    PENDING: 'รอดำเนินการ',
    CONFIRMED: 'ยืนยันแล้ว',
    ACTIVE: 'กำลังเช่า',
    COMPLETED: 'เสร็จสิ้น',
    CANCELLED: 'ยกเลิกแล้ว',
  }
  
  return statusLabels[status] || status
}
