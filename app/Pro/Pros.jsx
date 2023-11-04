'use client'
import React, { useEffect } from 'react'
import LoadPost from '../Load/Load'
export default function Pros({posts}) {
   useEffect(()=>{
    console.log(posts)
   },[posts])
  return (
    <div>
      {posts}
    </div>
  )
}
export const getStaticProps=async()=>{
   //const posts =await LoadPost()
   return{
    props:{
        posts:'kiiir'
    }
   }
}
