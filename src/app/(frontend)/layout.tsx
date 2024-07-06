import React from 'react'
import { cn } from '@/lib/utils'
import { Inter as FontSans } from 'next/font/google'

interface LayoutProps {
  children: React.ReactNode
}

import './globals.css'
import { AuthProvider } from './_providers/Auth'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html suppressHydrationWarning>
      <body
        // className="fontSans.className"
        className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}
      >
        <AuthProvider
          // To toggle between the REST and GraphQL APIs,
          // change the `api` prop to either `rest` or `gql`
          api="rest" // change this to `gql` to use the GraphQL API
        >
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  )
}

export default Layout
