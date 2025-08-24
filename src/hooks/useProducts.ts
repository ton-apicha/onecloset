import { useState, useEffect, useCallback } from 'react'
import { productsApi } from '@/lib/api'
import { Product } from '@/types'

interface UseProductsOptions {
  category?: string
  brand?: string
  size?: string
  color?: string
  minPrice?: string
  maxPrice?: string
  availability?: string
  sortBy?: string
  search?: string
  page?: number
  limit?: number
  autoFetch?: boolean
}

interface UseProductsReturn {
  products: Product[]
  loading: boolean
  error: string | null
  pagination: {
    currentPage: number
    totalPages: number
    totalProducts: number
    hasNextPage: boolean
    hasPrevPage: boolean
    limit: number
  } | null
  filters: Record<string, any> | null
  fetchProducts: (params?: UseProductsOptions) => Promise<void>
  refetch: () => Promise<void>
  clearError: () => void
}

export function useProducts(options: UseProductsOptions = {}): UseProductsReturn {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [pagination, setPagination] = useState<UseProductsReturn['pagination']>(null)
  const [filters, setFilters] = useState<Record<string, any> | null>(null)

  const fetchProducts = useCallback(async (params?: UseProductsOptions) => {
    setLoading(true)
    setError(null)

    try {
      const mergedParams = { ...options, ...params }
      const response = await productsApi.getAll(mergedParams)

      if (response.success && response.data) {
        setProducts(response.data.products)
        setPagination(response.data.pagination)
        setFilters(response.data.filters.applied)
      } else {
        setError(response.error || 'Failed to fetch products')
        setProducts([])
        setPagination(null)
        setFilters(null)
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred while fetching products'
      setError(errorMessage)
      setProducts([])
      setPagination(null)
      setFilters(null)
    } finally {
      setLoading(false)
    }
  }, [options])

  const refetch = useCallback(() => {
    return fetchProducts()
  }, [fetchProducts])

  const clearError = useCallback(() => {
    setError(null)
  }, [])

  // Auto-fetch on mount if autoFetch is true (default)
  useEffect(() => {
    if (options.autoFetch !== false) {
      fetchProducts()
    }
  }, [fetchProducts, options.autoFetch])

  return {
    products,
    loading,
    error,
    pagination,
    filters,
    fetchProducts,
    refetch,
    clearError,
  }
}

// Hook for single product
interface UseProductOptions {
  productId: string
  autoFetch?: boolean
}

interface UseProductReturn {
  product: Product | null
  shop: any | null
  relatedProducts: Product[]
  loading: boolean
  error: string | null
  fetchProduct: () => Promise<void>
  refetch: () => Promise<void>
  clearError: () => void
}

export function useProduct(options: UseProductOptions): UseProductReturn {
  const [product, setProduct] = useState<Product | null>(null)
  const [shop, setShop] = useState<any | null>(null)
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchProduct = useCallback(async () => {
    if (!options.productId) return

    setLoading(true)
    setError(null)

    try {
      const response = await productsApi.getById(options.productId)

      if (response.success && response.data) {
        setProduct(response.data.product)
        setShop(response.data.shop)
        setRelatedProducts(response.data.relatedProducts)
      } else {
        setError(response.error || 'Failed to fetch product')
        setProduct(null)
        setShop(null)
        setRelatedProducts([])
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred while fetching product'
      setError(errorMessage)
      setProduct(null)
      setShop(null)
      setRelatedProducts([])
    } finally {
      setLoading(false)
    }
  }, [options.productId])

  const refetch = useCallback(() => {
    return fetchProduct()
  }, [fetchProduct])

  const clearError = useCallback(() => {
    setError(null)
  }, [])

  // Auto-fetch on mount if autoFetch is true (default)
  useEffect(() => {
    if (options.autoFetch !== false) {
      fetchProduct()
    }
  }, [fetchProduct, options.autoFetch])

  return {
    product,
    shop,
    relatedProducts,
    loading,
    error,
    fetchProduct,
    refetch,
    clearError,
  }
}

// Hook for product search
interface UseProductSearchOptions {
  query: string
  filters?: Record<string, any>
  autoFetch?: boolean
}

export function useProductSearch(options: UseProductSearchOptions) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [pagination, setPagination] = useState<UseProductsReturn['pagination']>(null)

  const searchProducts = useCallback(async () => {
    if (!options.query.trim()) {
      setProducts([])
      setPagination(null)
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await productsApi.getAll({
        search: options.query,
        ...options.filters,
      })

      if (response.success && response.data) {
        setProducts(response.data.products)
        setPagination(response.data.pagination)
      } else {
        setError(response.error || 'Failed to search products')
        setProducts([])
        setPagination(null)
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred while searching products'
      setError(errorMessage)
      setProducts([])
      setPagination(null)
    } finally {
      setLoading(false)
    }
  }, [options.query, options.filters])

  const refetch = useCallback(() => {
    return searchProducts()
  }, [searchProducts])

  const clearError = useCallback(() => {
    setError(null)
  }, [])

  // Auto-fetch when query changes
  useEffect(() => {
    if (options.autoFetch !== false) {
      searchProducts()
    }
  }, [searchProducts, options.autoFetch])

  return {
    products,
    loading,
    error,
    pagination,
    searchProducts,
    refetch,
    clearError,
  }
}

// Hook for product categories
interface UseCategoriesReturn {
  categories: { id: string; name: string; count: number }[]
  loading: boolean
  error: string | null
  fetchCategories: () => Promise<void>
  refetch: () => Promise<void>
  clearError: () => void
}

export function useCategories(): UseCategoriesReturn {
  const [categories, setCategories] = useState<{ id: string; name: string; count: number }[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchCategories = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await productsApi.getAll()

      if (response.success && response.data) {
        // Extract unique categories from products
        const categoryMap = new Map<string, { id: string; name: string; count: number }>()
        
        response.data.products.forEach(product => {
          const categoryId = product.category
          const categoryName = getCategoryDisplayName(product.category)
          
          if (categoryMap.has(categoryId)) {
            categoryMap.get(categoryId)!.count++
          } else {
            categoryMap.set(categoryId, {
              id: categoryId,
              name: categoryName,
              count: 1
            })
          }
        })

        setCategories(Array.from(categoryMap.values()))
      } else {
        setError(response.error || 'Failed to fetch categories')
        setCategories([])
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred while fetching categories'
      setError(errorMessage)
      setCategories([])
    } finally {
      setLoading(false)
    }
  }, [])

  const refetch = useCallback(() => {
    return fetchCategories()
  }, [fetchCategories])

  const clearError = useCallback(() => {
    setError(null)
  }, [])

  // Auto-fetch on mount
  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])

  return {
    categories,
    loading,
    error,
    fetchCategories,
    refetch,
    clearError,
  }
}

// Helper function to get category display names
function getCategoryDisplayName(categoryId: string): string {
  const categoryNames: Record<string, string> = {
    'evening-dresses': 'ชุดราตรี',
    'bags': 'กระเป๋า',
    'jewelry': 'เครื่องประดับ',
    'shoes': 'รองเท้า',
    'accessories': 'อุปกรณ์เสริม',
  }
  
  return categoryNames[categoryId] || categoryId
}
