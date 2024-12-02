"use client"

import { Button } from '@/components/ui/button'
import { ArrowBigRight } from 'lucide-react'
import React from 'react'

export default function Heading() {
  return (
    <div className='max-w-3xl space-y-4'>
      <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold'>
        Your Ideas,Documents, & Plans. Unified . Welcome To <span className='underline'>ThinkSpace</span>
      </h1>
      <h3 className='text-base sm:text-xl md:text-2xl font-medium'>
        ThinkSpace is the workplace where  <br/>better, faster and smoother works happen
      </h3>
      <Button>
        Enter ThinkSpace
        <ArrowBigRight></ArrowBigRight>
      </Button>
    </div>
  )
}
