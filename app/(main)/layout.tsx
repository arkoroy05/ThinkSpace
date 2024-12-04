"use client"
import { useConvexAuth } from "convex/react"

import { redirect } from "next/navigation"
import Navbar from "./_components/Navbar"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated) {
    return redirect("/")
  }

  return <div className="h-full flex dark:bg-[#1F1F1F]">
    <Navbar/>
    <main className="flex-1 h-full overflow-y-auto">
    {children}
      </main>
    </div>
}

export default MainLayout
