import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const cmufont = localFont({
  src: '../public/cmunbmr-webfont.woff',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'c10k-table-ptest',
  description: 'c10k-table-ptest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cmufont.className}>{children}</body>
    </html>
  )
}

