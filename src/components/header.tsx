"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Moon, Sun, Trophy } from 'lucide-react'
import { useTheme } from "next-themes"
import { UserButton } from "@clerk/nextjs"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Analytics", href: "/dashboard/analytics" },
  { name: "Payouts", href: "/dashboard/payouts" },
  { name: "Settings", href: "/dashboard/settings" },
]

export function Header() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <Trophy className="h-6 w-6 text-primary" />
          <span className="hidden sm:inline-block">SportsDuniya</span>
        </Link>
        <nav className="flex flex-1 items-center justify-between space-x-2 md:justify-end md:space-x-4 lg:space-x-6">
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2.5 hover:bg-accent"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <UserButton 
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-8 w-8"
                }
              }}
            />
          </div>
        </nav>
      </div>
    </header>
  )
}

