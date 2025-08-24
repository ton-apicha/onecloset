import { NextRequest, NextResponse } from 'next/server'
import { logger } from '@/lib/logger'

export function middleware(request: NextRequest) {
  const startTime = Date.now()
  const { pathname, search } = request.nextUrl
  const method = request.method
  const userAgent = request.headers.get('user-agent') || 'unknown'
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'

  // Log incoming request
  logger.info(`Incoming request`, {
    method,
    url: pathname + search,
    userAgent,
    ip,
  }, 'Middleware')

  // Add request ID for tracking
  const requestId = crypto.randomUUID()
  const response = NextResponse.next()
  response.headers.set('x-request-id', requestId)

  // Log response
  response.headers.set('x-response-time', `${Date.now() - startTime}ms`)

  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
