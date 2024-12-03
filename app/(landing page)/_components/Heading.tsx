"use client"

import { Button } from '@/components/ui/button'
import { ArrowBigRight } from 'lucide-react'
import { useConvexAuth } from "convex/react"
import Link from 'next/link'
import React from 'react'
import { SignInButton, useUser } from '@clerk/clerk-react'

export default function Heading() {
  const {isAuthenticated,isLoading}=useConvexAuth()
  const {user}=useUser()
  return (
    <div className='max-w-3xl space-y-4'>
      <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold'>
        Your Ideas,Documents, & Plans. Unified .<br/> Welcome To <span className='underline'>ThinkSpace</span>
      </h1>
      <h3 className='text-base sm:text-xl md:text-2xl font-medium'>
        ThinkSpace is the workplace where  <br/>better, faster and smoother works happen
      </h3>
      {!isLoading && !isAuthenticated && (
        <SignInButton>
          <Button className='mt-10'>
            Join ThinkSpace
          </Button>
        </SignInButton>
      ) }
      {!isLoading && isAuthenticated && (
        <Link href="/documents">
          <Button className='mt-10'>
           Lets Get Started {user?.firstName}
          </Button>
        </Link>

      ) }
    </div>
  )
}
