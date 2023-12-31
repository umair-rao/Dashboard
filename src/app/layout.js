import Sidebar from '@/components/Sidebar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'User Dashboard',
  description: 'User Dashboard app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar/>
        {children}
        </body>
    </html>
  )
}
