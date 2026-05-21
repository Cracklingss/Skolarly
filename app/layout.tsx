import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Footer } from '@/components/common/Footer'
import { Header } from '@/components/common/Header'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
  title: 'Skolarly - AI Study Companion',
  description: 'Your intelligent study partner powered by AI. Get lesson explanations, generate quizzes, chat with an AI tutor, and plan your study schedule.',
  keywords: ['AI study', 'education', 'learning', 'quiz generator', 'study planner', 'AI tutor'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen">
        <Header />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <Footer />
      </body>
    </html>
  )
}
