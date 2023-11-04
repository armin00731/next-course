'use client'
import React,{useState} from 'react'
import Link from 'next/link'
export default function Decide() {
  const [order,setOrder] = useState()

  return (
    <div>
         <select name="asdd" id="" onClick={e=>setOrder(e.target.value)}>
            <option value="name">name</option>
            <option value="email">email</option>
         </select>
         <Link href={`http://localhost:3000/Post?order=${order}`}>Choose Order</Link>
    </div>
  )
}
