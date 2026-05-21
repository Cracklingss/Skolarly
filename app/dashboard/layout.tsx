'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { BookOpen, BrainCircuit, MessageSquare, Calendar, Home, Menu, X, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/dashboard/lessons', label: 'Lessons', icon: BookOpen },
  { href: '/dashboard/quizzes', label: 'Quizzes', icon: BrainCircuit },
  { href: '/dashboard/chat', label: 'AI Tutor', icon: MessageSquare },
  { href: '/dashboard/planner', label: 'Study Planner', icon: Calendar },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Mobile header */}
        <header className="sticky top-0 z-30 flex items-center h-16 px-4 border-b border-border bg-background/80 backdrop-blur-sm lg:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </Button>
          <Link href="/" className="flex items-center ml-3">
            <Image
              src="/images/skolarly-logo.png"
              alt="Skolarly Logo"
              width={100}
              height={30}
              className="h-7 w-auto"
            />
          </Link>
        </header>

        <main className="min-h-[calc(100vh-4rem)] lg:min-h-screen">
          {children}
        </main>
      </div>
    </div>
  )
}
