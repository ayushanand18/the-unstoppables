import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './footer.tsx'
import Header from './header.tsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flipkart 2.0',
  description: 'Team Unstoppables',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
      
    </html>
  )
}
