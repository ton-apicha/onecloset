import { logger } from './logger'

export interface ErrorInfo {
  message: string
  stack?: string
  code?: string
  context?: string
  data?: any
  userId?: string
  requestId?: string
}

export class AppError extends Error {
  public code: string
  public context: string
  public data: any
  public userId?: string
  public requestId?: string
  public isOperational: boolean

  constructor(
    message: string,
    code: string = 'UNKNOWN_ERROR',
    context: string = 'Application',
    data: any = null,
    isOperational: boolean = true
  ) {
    super(message)
    this.name = 'AppError'
    this.code = code
    this.context = context
    this.data = data
    this.isOperational = isOperational

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError)
    }
  }
}

export class ValidationError extends AppError {
  constructor(message: string, data?: any) {
    super(message, 'VALIDATION_ERROR', 'Validation', data)
    this.name = 'ValidationError'
  }
}

export class DatabaseError extends AppError {
  constructor(message: string, data?: any) {
    super(message, 'DATABASE_ERROR', 'Database', data)
    this.name = 'DatabaseError'
  }
}

export class AuthenticationError extends AppError {
  constructor(message: string, data?: any) {
    super(message, 'AUTHENTICATION_ERROR', 'Authentication', data)
    this.name = 'AuthenticationError'
  }
}

export class AuthorizationError extends AppError {
  constructor(message: string, data?: any) {
    super(message, 'AUTHORIZATION_ERROR', 'Authorization', data)
    this.name = 'AuthorizationError'
  }
}

export class NotFoundError extends AppError {
  constructor(message: string, data?: any) {
    super(message, 'NOT_FOUND_ERROR', 'Resource', data)
    this.name = 'NotFoundError'
  }
}

export function handleError(error: Error | AppError, context?: string): void {
  if (error instanceof AppError) {
    logger.error(
      `${error.context}: ${error.message}`,
      error,
      {
        code: error.code,
        context: error.context,
        data: error.data,
        userId: error.userId,
        requestId: error.requestId,
        isOperational: error.isOperational,
      },
      context
    )
  } else {
    logger.error(
      `Unexpected error: ${error.message}`,
      error,
      { stack: error.stack },
      context
    )
  }
}

export function createErrorResponse(error: Error | AppError) {
  const isDevelopment = process.env.NODE_ENV === 'development'
  
  if (error instanceof AppError) {
    return {
      success: false,
      error: {
        message: error.message,
        code: error.code,
        ...(isDevelopment && { stack: error.stack }),
        ...(isDevelopment && { data: error.data }),
      },
    }
  }

  return {
    success: false,
    error: {
      message: error.message,
      code: 'UNKNOWN_ERROR',
      ...(isDevelopment && { stack: error.stack }),
    },
  }
}

export function withErrorHandling<T extends any[], R>(
  fn: (...args: T) => Promise<R>,
  context?: string
) {
  return async (...args: T): Promise<R> => {
    try {
      return await fn(...args)
    } catch (error) {
      handleError(error as Error, context)
      throw error
    }
  }
}

export function validateRequired(data: any, fields: string[]): void {
  const missingFields = fields.filter(field => !data[field])
  
  if (missingFields.length > 0) {
    throw new ValidationError(
      `Missing required fields: ${missingFields.join(', ')}`,
      { missingFields, providedFields: Object.keys(data) }
    )
  }
}

export function validateEmail(email: string): void {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw new ValidationError('Invalid email format', { email })
  }
}

export function validatePhone(phone: string): void {
  const phoneRegex = /^[0-9+\-\s()]+$/
  if (!phoneRegex.test(phone)) {
    throw new ValidationError('Invalid phone number format', { phone })
  }
}
