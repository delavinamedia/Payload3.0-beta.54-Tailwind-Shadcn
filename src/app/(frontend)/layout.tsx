import React from 'react'
import { cn } from '@/lib/utils'
import { Inter as FontSans } from 'next/font/google'

interface LayoutProps {
  children: React.ReactNode
}

import './globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  // display: 'swap',
})

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html suppressHydrationWarning>
      <body
        // className="fontSans.className"
        className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}
      >
        {children}
      </body>
    </html>
  )
}

export default Layout
