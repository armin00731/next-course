'use client'
import dynamic from 'next/dynamic'
import React,{useState,useEffect} from 'react'
const Heavy = dynamic(()=>import('./Heavy'),{loading:()=><div>loading...</div>})
export default function Page() {
   const [visi,setVisi] = useState(false)
  return (
    <div>
      <button onClick={()=>setVisi(!visi)}>show</button>
      {visi?<div><Heavy/></div>:null}
    </div>
  )
}
