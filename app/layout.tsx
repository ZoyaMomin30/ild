import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: 'Iqra Laser Dies',
  description: 'Created with v0',
  generator: 'v0.dev',
    icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href='/favicon.ico' />
      </head>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
