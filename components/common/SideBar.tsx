import Link from 'next/link'
import Image from 'next/image'

export function SideBar() {
    return(
        <aside className={cn(
        "fixed top-0 left-0 z-50 h-full w-64 border-r border-border bg-sidebar transform transition-transform duration-200 ease-in-out lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-16 px-4 border-b border-sidebar-border">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/skolarly-logo.png"
                alt="Skolarly Logo"
                width={120}
                height={36}
                className="h-9 w-auto"
              />
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden text-sidebar-foreground"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          
          <nav className="flex-1 p-4 space-y-1">
            <Link
              href="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground mb-4 border-b border-sidebar-border pb-4"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            {navItems.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== '/dashboard' && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive 
                      ? "bg-sidebar-accent text-sidebar-primary" 
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </aside>
    )
}