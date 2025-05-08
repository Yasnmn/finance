import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Finance',
  /* description: '', */
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}