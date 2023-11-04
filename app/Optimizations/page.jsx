import React from 'react'
import Image from 'next/image'
import ATR from '@/public/Images/atr.jpg'
export default function page() {
  return (
    <div>
      <Image src='https://wallpaperaccess.com/full/8625450.jpg' fill style={{objectFit:'cover'}} quality={100}/>
    </div>
  )
}
