import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/components/cart/CartProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-kanit',
})

export const metadata: Metadata = {
  title: 'OneCloset - แพลตฟอร์มเช่าเสื้อผ้าแบรนด์เนม',
  description: 'เช่าชุดดีไซเนอร์และแบรนด์เนมกว่า 10,000+ สไตล์ สำหรับทุกโอกาสพิเศษของคุณ',
  keywords: 'เช่าเสื้อผ้า, แบรนด์เนม, ชุดออกงาน, แฟชั่น, OneCloset',
  authors: [{ name: 'OneCloset Team' }],
  creator: 'OneCloset',
  publisher: 'OneCloset',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://onecloset.com'),
  openGraph: {
    title: 'OneCloset - แพลตฟอร์มเช่าเสื้อผ้าแบรนด์เนม',
    description: 'เช่าชุดดีไซเนอร์และแบรนด์เนมกว่า 10,000+ สไตล์ สำหรับทุกโอกาสพิเศษของคุณ',
    url: 'https://onecloset.com',
    siteName: 'OneCloset',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OneCloset - แพลตฟอร์มเช่าเสื้อผ้าแบรนด์เนม',
      },
    ],
    locale: 'th_TH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OneCloset - แพลตฟอร์มเช่าเสื้อผ้าแบรนด์เนม',
    description: 'เช่าชุดดีไซเนอร์และแบรนด์เนมกว่า 10,000+ สไตล์ สำหรับทุกโอกาสพิเศษของคุณ',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th" className={kanit.variable}>
      <body className={`${kanit.className} antialiased`}>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
