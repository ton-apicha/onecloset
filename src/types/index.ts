// Database Types
export interface User {
  id: string
  email: string
  name: string
  role: Role
  status: Status
  trustScore: number
  createdAt: Date
  updatedAt: Date
}

export interface Product {
  id: string
  name: string
  brand: string
  category: string
  description: string
  price: number
  images: string[]
  sizes: string[]
  colors: string[]
  shopId: string
  status: ProductStatus
  createdAt: Date
  updatedAt: Date
}

export interface Rental {
  id: string
  productId: string
  renterId: string
  startDate: Date
  endDate: Date
  status: RentalStatus
  totalPrice: number
  createdAt: Date
  updatedAt: Date
}

export interface Shop {
  id: string
  name: string
  description?: string
  ownerId: string
  rating: number
  status: ShopStatus
  createdAt: Date
  updatedAt: Date
}

export interface Review {
  id: string
  rating: number
  comment?: string
  productId: string
  userId: string
  createdAt: Date
  updatedAt: Date
}

export interface WishlistItem {
  id: string
  userId: string
  productId: string
  createdAt: Date
}

// Enums
export enum Role {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  PARTNER = 'PARTNER',
  RENTER = 'RENTER',
}

export enum Status {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PENDING = 'PENDING',
  SUSPENDED = 'SUSPENDED',
}

export enum ProductStatus {
  AVAILABLE = 'AVAILABLE',
  RENTED = 'RENTED',
  UNAVAILABLE = 'UNAVAILABLE',
}

export enum RentalStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export enum ShopStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  SUSPENDED = 'SUSPENDED',
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
  pagination?: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Navigation Types
export interface NavigationItem {
  label: string
  href: string
  icon?: string
  dropdown?: NavigationItem[]
}

export interface GuestNavigation {
  rent: NavigationItem & {
    dropdown: NavigationItem[]
  }
  howItWorks: NavigationItem
  forShops: NavigationItem
  login: NavigationItem
  signup: NavigationItem
}

export interface UserNavigation {
  rent: NavigationItem & {
    dropdown: NavigationItem[]
  }
  howItWorks: NavigationItem
  forShops: NavigationItem
  wishlist: NavigationItem
  notifications: NavigationItem
  profile: NavigationItem & {
    dropdown: NavigationItem[]
  }
}

// Component Props Types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export interface ProductCardProps {
  product: Product
  onWishlistToggle?: (productId: string) => void
  isWishlisted?: boolean
}

export interface PageTemplateProps<T> {
  pageKey: string
  titleKey: string
  descriptionKey: string
  apiEndpoint: string
  columns: Column[]
  formFields: FormField[]
  filters?: Filter[]
}

export interface Column {
  key: string
  label: string
  sortable?: boolean
  render?: (value: any, record: any) => React.ReactNode
}

export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'password' | 'number' | 'select' | 'textarea' | 'date'
  required?: boolean
  options?: { value: string; label: string }[]
  validation?: any
}

export interface Filter {
  key: string
  label: string
  type: 'text' | 'select' | 'date' | 'range'
  options?: { value: string; label: string }[]
}

// Form Types
export interface LoginForm {
  email: string
  password: string
  rememberMe?: boolean
}

export interface SignupForm {
  name: string
  email: string
  password: string
  confirmPassword: string
  agreeToTerms: boolean
}

export interface ProductForm {
  name: string
  brand: string
  category: string
  description: string
  price: number
  sizes: string[]
  colors: string[]
  images: File[]
}

export interface RentalForm {
  productId: string
  startDate: Date
  endDate: Date
}

// Search and Filter Types
export interface ProductFilters {
  category?: string
  brand?: string
  size?: string
  color?: string
  minPrice?: number
  maxPrice?: number
  shopRating?: number
  availability?: ProductStatus
}

export interface SearchParams {
  query?: string
  page?: number
  limit?: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

// Dashboard Types
export interface DashboardStats {
  activeRentals: number
  totalRentals: number
  trustScore: number
  recentActivity: ActivityItem[]
}

export interface ActivityItem {
  id: string
  type: 'rental' | 'review' | 'wishlist'
  title: string
  description: string
  timestamp: Date
}

// Notification Types
export interface Notification {
  id: string
  userId: string
  title: string
  message: string
  type: 'info' | 'success' | 'warning' | 'error'
  read: boolean
  createdAt: Date
}

// Cart Types
export interface CartItem {
  productId: string
  name: string
  brand: string
  price: number
  image: string
  size: string
  color: string
  quantity: number
  shopId: string
}

export interface CartState {
  items: CartItem[]
  isOpen: boolean
}

export type CartAction = 
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_CART'; payload: CartItem[] }
  | { type: 'TOGGLE_CART' }

export interface Cart {
  items: CartItem[]
  total: number
}
