'use client'
import React from 'react'
import { notFound } from 'next/navigation'
export default function page({params}) {
  if(params.id > 10){
   notFound()
  }
  const paramse = params
  

  return (
    <div>
      clg{paramse.id}
    </div>
  )
}
