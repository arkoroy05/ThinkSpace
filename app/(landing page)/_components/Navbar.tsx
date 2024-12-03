"use client"

import * as React from "react"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { useConvexAuth } from "convex/react"
import { SignInButton, UserButton } from "@clerk/clerk-react"
import Link from "next/link"
export function Navbar() {
  const { setTheme } = useTheme()
  const {isAuthenticated,isLoading}=useConvexAuth()

  return (
    <nav className="flex items-center justify-between p-4 bg-transparent">
  <div className="text-2xl font-bold text-primary">ThinkSpace</div>
  
  <div className="flex items-center gap-4 ml-auto">
    {isLoading && (
      <p>Loading....</p>
    )}
    {!isAuthenticated && !isLoading && (
      <>
      <SignInButton mode="modal">
        <Button variant="ghost" size="sm">
          Log In
        </Button>
      </SignInButton>
      <SignInButton mode="modal">
        <Button size="sm">
          Explore ThinkSpace
        </Button>
      </SignInButton>
      </>
    )}
    {isAuthenticated && !isLoading &&(
      <>
        <Button variant="ghost" size="sm">
          <Link href="/documents">
          Enter ThinkSpace
          </Link>
        </Button>
        <UserButton afterSignOutUrl="/"></UserButton>
      </>
    )}
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</nav>

  )
}

