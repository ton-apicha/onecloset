import { Product, CartItem, User, Rental } from '@/types'

// API base URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

// Generic API response type
interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Pagination response type
interface PaginatedResponse<T> {
  products: T[]
  pagination: {
    currentPage: number
    totalPages: number
    totalProducts: number
    hasNextPage: boolean
    hasPrevPage: boolean
    limit: number
  }
  filters: {
    applied: Record<string, any>
  }
}

// API client class
class ApiClient {
  private baseURL: string

  constructor(baseURL: string) {
    this.baseURL = baseURL
  }

  // Generic request method
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const url = `${this.baseURL}${endpoint}`
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`)
      }

      return data
    } catch (error) {
      console.error('API request failed:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      }
    }
  }

  // Products API
  async getProducts(params?: {
    category?: string
    brand?: string
    size?: string
    color?: string
    minPrice?: string
    maxPrice?: string
    availability?: string
    sortBy?: string
    page?: number
    limit?: number
    search?: string
  }): Promise<ApiResponse<PaginatedResponse<Product>>> {
    const searchParams = new URLSearchParams()
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          searchParams.append(key, value.toString())
        }
      })
    }

    const queryString = searchParams.toString()
    const endpoint = `/products${queryString ? `?${queryString}` : ''}`
    
    return this.request<PaginatedResponse<Product>>(endpoint)
  }

  async getProduct(productId: string): Promise<ApiResponse<{
    product: Product
    shop: any
    relatedProducts: Product[]
  }>> {
    return this.request(`/products/${productId}`)
  }

  async createProduct(productData: Partial<Product>): Promise<ApiResponse<Product>> {
    return this.request('/products', {
      method: 'POST',
      body: JSON.stringify(productData),
    })
  }

  async updateProduct(productId: string, productData: Partial<Product>): Promise<ApiResponse<Product>> {
    return this.request(`/products/${productId}`, {
      method: 'PUT',
      body: JSON.stringify(productData),
    })
  }

  async deleteProduct(productId: string): Promise<ApiResponse<{ message: string }>> {
    return this.request(`/products/${productId}`, {
      method: 'DELETE',
    })
  }

  // Cart API
  async getCart(): Promise<ApiResponse<CartItem[]>> {
    return this.request('/cart')
  }

  async addToCart(cartItem: CartItem): Promise<ApiResponse<CartItem>> {
    return this.request('/cart', {
      method: 'POST',
      body: JSON.stringify(cartItem),
    })
  }

  async updateCartItem(productId: string, quantity: number): Promise<ApiResponse<CartItem>> {
    return this.request(`/cart/${productId}`, {
      method: 'PUT',
      body: JSON.stringify({ quantity }),
    })
  }

  async removeFromCart(productId: string): Promise<ApiResponse<{ message: string }>> {
    return this.request(`/cart/${productId}`, {
      method: 'DELETE',
    })
  }

  async clearCart(): Promise<ApiResponse<{ message: string }>> {
    return this.request('/cart', {
      method: 'DELETE',
    })
  }

  // Orders API
  async createOrder(orderData: {
    items: CartItem[]
    shippingInfo: any
    paymentMethod: string
  }): Promise<ApiResponse<{ orderId: string }>> {
    return this.request('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
    })
  }

  async getOrders(): Promise<ApiResponse<Rental[]>> {
    return this.request('/orders')
  }

  async getOrder(orderId: string): Promise<ApiResponse<Rental>> {
    return this.request(`/orders/${orderId}`)
  }

  // User API
  async getCurrentUser(): Promise<ApiResponse<User>> {
    return this.request('/user/profile')
  }

  async updateProfile(profileData: Partial<User>): Promise<ApiResponse<User>> {
    return this.request('/user/profile', {
      method: 'PUT',
      body: JSON.stringify(profileData),
    })
  }

  async getWishlist(): Promise<ApiResponse<Product[]>> {
    return this.request('/user/wishlist')
  }

  async addToWishlist(productId: string): Promise<ApiResponse<{ message: string }>> {
    return this.request('/user/wishlist', {
      method: 'POST',
      body: JSON.stringify({ productId }),
    })
  }

  async removeFromWishlist(productId: string): Promise<ApiResponse<{ message: string }>> {
    return this.request(`/user/wishlist/${productId}`, {
      method: 'DELETE',
    })
  }

  // Authentication API
  async login(credentials: { email: string; password: string }): Promise<ApiResponse<{ token: string; user: User }>> {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    })
  }

  async register(userData: { name: string; email: string; password: string }): Promise<ApiResponse<{ token: string; user: User }>> {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    })
  }

  async logout(): Promise<ApiResponse<{ message: string }>> {
    return this.request('/auth/logout', {
      method: 'POST',
    })
  }

  // Search API
  async searchProducts(query: string, filters?: any): Promise<ApiResponse<PaginatedResponse<Product>>> {
    const searchParams = new URLSearchParams({ q: query })
    
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          searchParams.append(key, value.toString())
        }
      })
    }

    return this.request(`/search?${searchParams.toString()}`)
  }

  // Categories API
  async getCategories(): Promise<ApiResponse<{ id: string; name: string; count: number }[]>> {
    return this.request('/categories')
  }

  async getBrands(): Promise<ApiResponse<{ id: string; name: string; count: number }[]>> {
    return this.request('/brands')
  }

  // Utility methods
  async uploadImage(file: File): Promise<ApiResponse<{ url: string }>> {
    const formData = new FormData()
    formData.append('image', file)

    try {
      const response = await fetch(`${this.baseURL}/upload`, {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`)
      }

      return data
    } catch (error) {
      console.error('Image upload failed:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Upload failed'
      }
    }
  }
}

// Create and export API client instance
export const apiClient = new ApiClient(API_BASE_URL)

// Export individual API functions for convenience
export const productsApi = {
  getAll: (params?: any) => apiClient.getProducts(params),
  getById: (id: string) => apiClient.getProduct(id),
  create: (data: Partial<Product>) => apiClient.createProduct(data),
  update: (id: string, data: Partial<Product>) => apiClient.updateProduct(id, data),
  delete: (id: string) => apiClient.deleteProduct(id),
}

export const cartApi = {
  get: () => apiClient.getCart(),
  add: (item: CartItem) => apiClient.addToCart(item),
  update: (productId: string, quantity: number) => apiClient.updateCartItem(productId, quantity),
  remove: (productId: string) => apiClient.removeFromCart(productId),
  clear: () => apiClient.clearCart(),
}

export const ordersApi = {
  create: (orderData: any) => apiClient.createOrder(orderData),
  getAll: () => apiClient.getOrders(),
  getById: (id: string) => apiClient.getOrder(id),
}

export const userApi = {
  getProfile: () => apiClient.getCurrentUser(),
  updateProfile: (data: Partial<User>) => apiClient.updateProfile(data),
  getWishlist: () => apiClient.getWishlist(),
  addToWishlist: (productId: string) => apiClient.addToWishlist(productId),
  removeFromWishlist: (productId: string) => apiClient.removeFromWishlist(productId),
}

export const authApi = {
  login: (credentials: { email: string; password: string }) => apiClient.login(credentials),
  register: (userData: { name: string; email: string; password: string }) => apiClient.register(userData),
  logout: () => apiClient.logout(),
}

export const searchApi = {
  products: (query: string, filters?: any) => apiClient.searchProducts(query, filters),
}

export const categoriesApi = {
  getAll: () => apiClient.getCategories(),
  getBrands: () => apiClient.getBrands(),
}

export const uploadApi = {
  image: (file: File) => apiClient.uploadImage(file),
}
