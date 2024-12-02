import React from 'react'
import Image from 'next/image'

export default function Heroes() {
  return (
    <div className='flex flex-col items-center justify-center max-w-5xl'>
      <div className='flex items-center'>
        <div className='relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]'>
            <Image
            src="/hero1.png"
            alt='documents'
            fill
            className='object-contain'
            />
        </div>
      </div>
    </div>
  )
}
