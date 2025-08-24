import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/components/cart/CartProvider'

export const metadata: Metadata = {
  title: 'OneCloset - เช่าเสื้อผ้าแบรนด์เนม',
  description: 'เช่าเสื้อผ้าแบรนด์เนมคุณภาพดี ราคาไม่แพง จัดส่งฟรีถึงหน้าบ้าน',
  keywords: 'เช่าเสื้อผ้า, แบรนด์เนม, แฟชั่น, ชุดราตรี, กระเป๋า, เครื่องประดับ',
  authors: [{ name: 'OneCloset Team' }],
  openGraph: {
    title: 'OneCloset - เช่าเสื้อผ้าแบรนด์เนม',
    description: 'เช่าเสื้อผ้าแบรนด์เนมคุณภาพดี ราคาไม่แพง จัดส่งฟรีถึงหน้าบ้าน',
    url: 'https://onecloset.com',
    siteName: 'OneCloset',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OneCloset - เช่าเสื้อผ้าแบรนด์เนม',
      },
    ],
    locale: 'th_TH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OneCloset - เช่าเสื้อผ้าแบรนด์เนม',
    description: 'เช่าเสื้อผ้าแบรนด์เนมคุณภาพดี ราคาไม่แพง จัดส่งฟรีถึงหน้าบ้าน',
    images: ['/images/og-image.jpg'],
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
    <html lang="th">
      <body className="font-sans antialiased">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
