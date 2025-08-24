import { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface PageLayoutProps {
  children: ReactNode
  showHeader?: boolean
  showFooter?: boolean
  headerProps?: {
    showSearch?: boolean
    showAuth?: boolean
    showCart?: boolean
    showMobileMenu?: boolean
  }
  className?: string
}

export default function PageLayout({
  children,
  showHeader = true,
  showFooter = true,
  headerProps = {},
  className = ''
}: PageLayoutProps) {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 to-white ${className}`}>
      {showHeader && <Header {...headerProps} />}
      
      <main className="flex-1">
        {children}
      </main>
      
      {showFooter && <Footer />}
    </div>
  )
}
